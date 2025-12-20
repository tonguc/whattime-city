'use client'

import { useEffect, useState } from 'react'
import { WeatherAnimation } from '@/lib/weather'

interface WeatherBackgroundProps {
  animation: WeatherAnimation
  isDay: boolean
}

export default function WeatherBackground({ animation, isDay }: WeatherBackgroundProps) {
  // Gece mi gündüz mü? (fog/clouds için de kullanılacak)
  const showNightBase = !isDay
  const showDayBase = isDay
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {/* Base animations - her zaman gece/gündüz efekti */}
      {showDayBase && (animation === 'clear' || animation === 'clouds' || animation === 'fog') && <SunAnimation />}
      {showNightBase && (animation === 'clear' || animation === 'clouds' || animation === 'fog') && <NightAnimation />}
      
      {/* Weather-specific animations */}
      {animation === 'rain' && <RainAnimation />}
      {animation === 'drizzle' && <DrizzleAnimation />}
      {animation === 'snow' && <SnowAnimation />}
      {animation === 'thunder' && <ThunderAnimation />}
      {animation === 'clouds' && <CloudsAnimation />}
      {animation === 'fog' && <FogAnimation />}
    </div>
  )
}

function RainAnimation() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])
  
  useEffect(() => {
    const newDrops = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.5 + Math.random() * 0.5
    }))
    setDrops(newDrops)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.9; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-blue-300/80 via-blue-400 to-blue-500/80 rounded-full"
          style={{
            left: `${drop.left}%`,
            top: '-20px',
            height: '30px',
            animation: `rainFall ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </>
  )
}

function DrizzleAnimation() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])
  
  useEffect(() => {
    const newDrops = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1 + Math.random() * 1
    }))
    setDrops(newDrops)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes drizzleFall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-blue-200/30 to-blue-400/70 rounded-full"
          style={{
            left: `${drop.left}%`,
            top: '-15px',
            height: '18px',
            animation: `drizzleFall ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </>
  )
}

function SnowAnimation() {
  const [flakes, setFlakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])
  
  useEffect(() => {
    const newFlakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 4 + Math.random() * 6
    }))
    setFlakes(newFlakes)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes snowFall {
          0% { transform: translateY(-10px) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.9; }
          100% { transform: translateY(100vh) translateX(30px) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white shadow-sm"
          style={{
            left: `${flake.left}%`,
            top: '-10px',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `snowFall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            boxShadow: '0 0 4px rgba(255,255,255,0.8)',
          }}
        />
      ))}
    </>
  )
}

function ThunderAnimation() {
  const [flash, setFlash] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true)
      setTimeout(() => setFlash(false), 100)
      setTimeout(() => {
        setFlash(true)
        setTimeout(() => setFlash(false), 50)
      }, 150)
    }, 5000 + Math.random() * 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      <RainAnimation />
      <div 
        className={`absolute inset-0 transition-colors duration-100 ${flash ? 'bg-white/15' : 'bg-transparent'}`}
      />
    </>
  )
}

function CloudsAnimation() {
  const [clouds, setClouds] = useState<Array<{ id: number; top: number; duration: number; delay: number; width: number; height: number }>>([])
  
  useEffect(() => {
    const newClouds = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 20,
      duration: 40 + Math.random() * 30,
      delay: i * 8,
      width: 250 + Math.random() * 150,
      height: 100 + Math.random() * 60
    }))
    setClouds(newClouds)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes cloudDrift {
          0% { transform: translateX(-350px); }
          100% { transform: translateX(calc(100vw + 350px)); }
        }
      `}</style>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute rounded-full blur-3xl mix-blend-overlay"
          style={{
            top: `${cloud.top}%`,
            left: '-350px',
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)',
            animation: `cloudDrift ${cloud.duration}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </>
  )
}

function FogAnimation() {
  return (
    <>
      <style>{`
        @keyframes fogWave {
          0%, 100% { transform: translateX(-3%) scaleY(1); opacity: 0.5; }
          50% { transform: translateX(3%) scaleY(1.1); opacity: 0.7; }
        }
      `}</style>
      <div className="absolute inset-0 mix-blend-overlay">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 bg-gradient-to-t from-white/30 via-white/20 to-transparent"
            style={{
              bottom: `${i * 15}%`,
              height: '40%',
              animation: `fogWave ${12 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              filter: 'blur(30px)',
            }}
          />
        ))}
      </div>
    </>
  )
}

function SunAnimation() {
  return (
    <>
      <style>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes sunRays {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className="absolute top-8 right-8">
        <div 
          className="w-40 h-40 rounded-full bg-yellow-300/60 blur-2xl"
          style={{ animation: 'sunPulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-200/40 via-transparent to-yellow-200/40"
          style={{ animation: 'sunRays 20s linear infinite' }}
        />
      </div>
    </>
  )
}

function NightAnimation() {
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; size: number; delay: number; duration: number }>>([])
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; top: number; delay: number }>>([])
  
  useEffect(() => {
    // Twinkling stars - more stars, bigger sizes
    const newStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 70,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }))
    setStars(newStars)
    
    // Shooting stars
    const newShootingStars = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 30,
      delay: i * 6 + Math.random() * 3
    }))
    setShootingStars(newShootingStars)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(300px) translateY(150px); opacity: 0; }
        }
        @keyframes moonGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
      
      {/* Moon glow */}
      <div className="absolute top-8 right-8">
        <div 
          className="w-32 h-32 rounded-full bg-slate-200/30 blur-2xl"
          style={{ animation: 'moonGlow 6s ease-in-out infinite' }}
        />
        <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-gradient-to-br from-slate-100/40 to-transparent" />
      </div>
      
      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            left: '10%',
            top: `${star.top}%`,
            animation: `shootingStar 1.5s linear infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 8px 3px rgba(255,255,255,0.8), -20px 0 20px rgba(255,255,255,0.5), -40px 0 15px rgba(255,255,255,0.3)',
          }}
        />
      ))}
    </>
  )
}
