'use client'

import { useEffect, useState } from 'react'
import { WeatherAnimation } from '@/lib/weather'

interface WeatherBackgroundProps {
  animation: WeatherAnimation
  isDay: boolean
}

export default function WeatherBackground({ animation, isDay }: WeatherBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {animation === 'rain' && <RainAnimation />}
      {animation === 'drizzle' && <DrizzleAnimation />}
      {animation === 'snow' && <SnowAnimation />}
      {animation === 'thunder' && <ThunderAnimation />}
      {animation === 'clouds' && <CloudsAnimation />}
      {animation === 'fog' && <FogAnimation />}
      {animation === 'clear' && isDay && <SunAnimation />}
    </div>
  )
}

function RainAnimation() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])
  
  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
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
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400/40 to-blue-400/60 rounded-full"
          style={{
            left: `${drop.left}%`,
            top: '-20px',
            height: '20px',
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
    const newFlakes = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 3 + Math.random() * 5
    }))
    setFlakes(newFlakes)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes snowFall {
          0% { transform: translateY(-100%) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(30px); opacity: 0; }
        }
      `}</style>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${flake.left}%`,
            top: '-10px',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `snowFall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
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
  const [clouds, setClouds] = useState<Array<{ id: number; top: number; duration: number; delay: number; width: number; height: number }>>([])
  
  useEffect(() => {
    const newClouds = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 25,
      duration: 25 + Math.random() * 15,
      delay: i * 5,
      width: 200 + Math.random() * 150,
      height: 80 + Math.random() * 60
    }))
    setClouds(newClouds)
  }, [])
  
  return (
    <>
      <style>{`
        @keyframes cloudMove {
          0% { transform: translateX(-300px); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }
      `}</style>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute bg-white/40 rounded-full blur-3xl"
          style={{
            top: `${cloud.top}%`,
            left: '-300px',
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
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
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
      `}</style>
      <div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-yellow-300/30 blur-2xl"
        style={{
          animation: 'sunPulse 3s ease-in-out infinite',
        }}
      />
    </>
  )
}
