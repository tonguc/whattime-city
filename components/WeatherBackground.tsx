'use client'

import { useEffect, useState } from 'react'
import { WeatherAnimation } from '@/lib/weather'

interface WeatherBackgroundProps {
  animation: WeatherAnimation
  isDay: boolean
}

export default function WeatherBackground({ animation, isDay }: WeatherBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {animation === 'rain' && <RainAnimation />}
      {animation === 'drizzle' && <DrizzleAnimation />}
      {animation === 'snow' && <SnowAnimation />}
      {animation === 'thunder' && <ThunderAnimation />}
      {animation === 'clouds' && <CloudsAnimation />}
      {animation === 'fog' && <FogAnimation />}
      {animation === 'clear' && isDay && <SunAnimation />}
      {animation === 'clear' && !isDay && <NightAnimation />}
    </div>
  )
}

function RainAnimation() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])
  
  useEffect(() => {
    const newDrops = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.4 + Math.random() * 0.4
    }))
    setDrops(newDrops)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-blue-300/60 via-blue-400/80 to-blue-500/60 rounded-full"
          style={{
            left: `${drop.left}%`,
            top: '-20px',
            height: '25px',
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
    const newDrops = Array.from({ length: 25 }, (_, i) => ({
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
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-transparent to-blue-300/40 rounded-full"
          style={{
            left: `${drop.left}%`,
            top: '-15px',
            height: '12px',
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
    }, 4000 + Math.random() * 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      <RainAnimation />
      <div 
        className={`absolute inset-0 transition-colors duration-100 ${flash ? 'bg-white/30' : 'bg-transparent'}`}
      />
    </>
  )
}

function CloudsAnimation() {
  const [clouds, setClouds] = useState<Array<{ id: number; top: number; duration: number; delay: number; width: number; height: number; opacity: number }>>([])
  
  useEffect(() => {
    const newClouds = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 30,
      duration: 20 + Math.random() * 20,
      delay: i * 4,
      width: 250 + Math.random() * 200,
      height: 100 + Math.random() * 80,
      opacity: 0.3 + Math.random() * 0.3
    }))
    setClouds(newClouds)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes cloudMove {
          0% { transform: translateX(-400px); }
          100% { transform: translateX(calc(100vw + 400px)); }
        }
      `}</style>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute bg-white rounded-full blur-2xl"
          style={{
            top: `${cloud.top}%`,
            left: '-400px',
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            opacity: cloud.opacity,
            animation: `cloudMove ${cloud.duration}s linear infinite`,
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
        @keyframes fogMove {
          0%, 100% { opacity: 0.2; transform: translateX(-5%); }
          50% { opacity: 0.4; transform: translateX(5%); }
        }
      `}</style>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: `fogMove ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </>
  )
}

function SunAnimation() {
  return (
    <>
      <style>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.6; }
        }
        @keyframes sunRays {
          0%, 100% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className="absolute top-8 right-8">
        <div 
          className="w-32 h-32 rounded-full bg-yellow-300/50 blur-xl"
          style={{ animation: 'sunPulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200/30 via-transparent to-yellow-200/30"
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
    // Twinkling stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 60,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }))
    setStars(newStars)
    
    // Shooting stars
    const newShootingStars = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 30,
      delay: i * 8 + Math.random() * 4
    }))
    setShootingStars(newShootingStars)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(300px) translateY(150px); opacity: 0; }
        }
        @keyframes moonGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
      `}</style>
      
      {/* Moon glow */}
      <div className="absolute top-8 right-8">
        <div 
          className="w-24 h-24 rounded-full bg-slate-200/20 blur-2xl"
          style={{ animation: 'moonGlow 6s ease-in-out infinite' }}
        />
        <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-slate-200/30 to-transparent" />
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
            boxShadow: '0 0 3px rgba(255,255,255,0.8)',
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: '10%',
            top: `${star.top}%`,
            animation: `shootingStar 1.5s linear infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 6px 2px rgba(255,255,255,0.6), -20px 0 15px rgba(255,255,255,0.4), -40px 0 10px rgba(255,255,255,0.2)',
          }}
        />
      ))}
    </>
  )
}
