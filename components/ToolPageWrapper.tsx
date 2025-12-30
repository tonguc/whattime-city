'use client'

import { ReactNode, useState } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import { useAlarm } from '@/shared/hooks'

interface ToolPageWrapperProps {
  children: ReactNode
}

export default function ToolPageWrapper({ children }: ToolPageWrapperProps) {
  const { theme, isLight } = useCityContext()
  const [showAlarmModal, setShowAlarmModal] = useState(false)
  const { alarms, setAlarms, activeAlarm, dismissAlarm } = useAlarm()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      {/* Shared Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {children}
      </div>
      
      {/* Floating Alarm Button */}
      <button 
        onClick={() => setShowAlarmModal(true)} 
        title="Set time alert for any city"
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${theme.accentBg} text-white`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {alarms.filter(a => a.active).length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {alarms.filter(a => a.active).length}
          </span>
        )}
      </button>
      
      {/* Alarm Modal */}
      <AlarmModal
        isOpen={showAlarmModal}
        onClose={() => setShowAlarmModal(false)}
        isLight={isLight}
        theme={theme}
        alarms={alarms}
        setAlarms={setAlarms}
      />
      
      {/* Active Alarm Popup */}
      <ActiveAlarmPopup
        alarm={activeAlarm}
        onDismiss={dismissAlarm}
        isLight={isLight}
        theme={theme}
      />
    </div>
  )
}
