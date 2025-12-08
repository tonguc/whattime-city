'use client'

import { WeatherAnimation } from '@/lib/weather'

interface WeatherBackgroundProps {
  animation: WeatherAnimation
  isDay: boolean
}

export default function WeatherBackground({ animation, isDay }: WeatherBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400/40 to-blue-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            height: `${15 + Math.random() * 20}px`,
            animation: `rain ${0.5 + Math.random() * 0.5}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes rain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function DrizzleAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 bg-gradient-to-b from-transparent to-blue-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10}%`,
            height: `${8 + Math.random() * 12}px`,
            animation: `drizzle ${1 + Math.random() * 1}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes drizzle {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function SnowAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            animation: `snow ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes snow {
          0% { transform: translateY(-100%) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function ThunderAnimation() {
  return (
    <div className="absolute inset-0">
      <RainAnimation />
      <div 
        className="absolute inset-0 bg-white/0"
        style={{
          animation: 'lightning 4s infinite',
        }}
      />
      <style jsx>{`
        @keyframes lightning {
          0%, 89%, 91%, 93%, 95%, 100% { background-color: transparent; }
          90%, 92%, 94% { background-color: rgba(255, 255, 255, 0.3); }
        }
      `}</style>
    </div>
  )
}

function CloudsAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/20 rounded-full blur-2xl"
          style={{
            left: `${-20 + i * 25}%`,
            top: `${10 + Math.random() * 20}%`,
            width: `${150 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 40}px`,
            animation: `clouds ${20 + Math.random() * 10}s linear infinite`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes clouds {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  )
}

function FogAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: `fog ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fog {
          0%, 100% { opacity: 0.3; transform: translateX(-10%); }
          50% { opacity: 0.5; transform: translateX(10%); }
        }
      `}</style>
    </div>
  )
}

function SunAnimation() {
  return (
    <div className="absolute top-10 right-10">
      <div 
        className="w-20 h-20 rounded-full bg-yellow-300/30 blur-xl"
        style={{
          animation: 'sunPulse 3s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
