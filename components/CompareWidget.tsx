'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { TOP_10_CITIES } from '@/config/cities';

interface CityInputProps {
  value: string;
  onChange: (val: string) => void;
  onSelect: (slug: string, name: string) => void;
  placeholder: string;
}

function CompactCityInput({ value, onChange, onSelect, placeholder }: CityInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  // Portal için client-side mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  // Input konumunu hesapla
  useEffect(() => {
    if (isOpen && inputRef.current) {
      const updatePosition = () => {
        if (inputRef.current) {
          const rect = inputRef.current.getBoundingClientRect();
          setCoords({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
          });
        }
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);

      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [isOpen]);

  // Dışarı tıklayınca kapat
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      // Portal içindeki tıklamaları yoksay (dropdown kapanmasın diye)
      // Ancak burada portal DOM'un başka yerinde olduğu için basit bir flag kullanabiliriz
      // veya event target kontrolü yapabiliriz. En temizi:
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        // Dropdown'a tıklanıp tıklanmadığını kontrol etmek zor (portal olduğu için).
        // Bu yüzden dropdown item'larına tıklandığında zaten kapanıyor.
        // Sadece boşluğa tıklanınca kapansın:
        // Basit timeout çözümü ile çakışmayı önleyelim:
        setTimeout(() => setIsOpen(false), 100);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filtered = value.length < 1 
    ? TOP_10_CITIES 
    : TOP_10_CITIES.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="relative flex-1 w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full h-10 md:h-14 pl-4 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm md:text-base shadow-sm"
        />
        
        {/* CLEAR BUTTON (X) */}
        {value && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            onMouseDown={(e) => {
              e.preventDefault(); // Focus kaybını önle
              e.stopPropagation();
              onChange('');
              setIsOpen(true); // Listeyi tekrar aç
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* PORTAL DROPDOWN - Asla kesilmez, en üstte durur */}
      {mounted && isOpen && createPortal(
        <div 
          style={{ 
            position: 'absolute', 
            top: coords.top + 4, // Biraz boşluk
            left: coords.left, 
            width: coords.width,
            zIndex: 99999 
          }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 max-h-60 overflow-y-auto"
        >
          {filtered.length > 0 ? (
            filtered.map(city => (
              <div
                key={city.slug}
                className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-50 dark:border-slate-700 last:border-0"
                onMouseDown={(e) => {
                  e.preventDefault(); // Focus kaybını önle
                  e.stopPropagation();
                  onSelect(city.slug, city.name);
                  setIsOpen(false);
                }}
              >
                <div className="text-sm font-medium text-slate-900 dark:text-white">{city.name}</div>
                <div className="text-xs text-slate-500">{city.country}</div>
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-slate-500 text-center">No city found</div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}

interface CompareWidgetProps {
  className?: string;
  prefillOrigin?: string; // Slug
  prefillTarget?: string; // Slug
}

export default function CompareWidget({ className = '', prefillOrigin, prefillTarget }: CompareWidgetProps) {
  const router = useRouter();
  
  const getCityName = (slug?: string) => TOP_10_CITIES.find(c => c.slug === slug)?.name || '';
  
  const [origin, setOrigin] = useState(getCityName(prefillOrigin));
  const [target, setTarget] = useState(getCityName(prefillTarget));
  
  const [originSlug, setOriginSlug] = useState(prefillOrigin || '');
  const [targetSlug, setTargetSlug] = useState(prefillTarget || '');

  // Eğer prop değişirse state'i güncelle (Result sayfasında gezinirken önemli)
  useEffect(() => {
    if (prefillOrigin) {
      setOriginSlug(prefillOrigin);
      setOrigin(getCityName(prefillOrigin));
    }
    if (prefillTarget) {
      setTargetSlug(prefillTarget);
      setTarget(getCityName(prefillTarget));
    }
  }, [prefillOrigin, prefillTarget]);

  const handleCompare = () => {
    if (originSlug && targetSlug) {
      router.push(`/city/${originSlug}/guide/time-difference/from-${targetSlug}`);
    }
  };

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        
        <CompactCityInput 
          value={origin}
          onChange={(val) => {
            setOrigin(val);
            if (val === '') setOriginSlug(''); // Temizlenince slug'ı da sil
          }}
          onSelect={(slug, name) => {
            setOriginSlug(slug);
            setOrigin(name);
          }}
          placeholder="City 1 (e.g. Istanbul)"
        />

        <div className="flex items-center justify-center text-slate-400 py-1 md:py-0">
          <svg className="w-5 h-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        <CompactCityInput 
          value={target}
          onChange={(val) => {
            setTarget(val);
            if (val === '') setTargetSlug('');
          }}
          onSelect={(slug, name) => {
            setTargetSlug(slug);
            setTarget(name);
          }}
          placeholder="City 2 (e.g. London)"
        />

        <button
          onClick={handleCompare}
          disabled={!originSlug || !targetSlug}
          className="h-10 md:h-14 px-6 md:px-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 whitespace-nowrap text-sm md:text-base"
        >
          Compare Time
        </button>
      </div>
    </div>
  );
}