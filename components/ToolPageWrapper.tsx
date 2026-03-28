'use client'

import { ReactNode, useState } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import AlarmModal, { ActiveAlarmPopup } from '@/components/AlarmModal'
import { useAlarm } from '@/shared/hooks'

interface ToolPageWrapperProps {
  children: ReactNode
  footer?: ReactNode
}

export default function ToolPageWrapper({ children, footer }: ToolPageWrapperProps) {
  const { theme, isLight } = useCityContext()
  const [showAlarmModal, setShowAlarmModal] = useState(false)
  const { alarms, setAlarms, activeAlarm, dismissAlarm } = useAlarm()

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      {/* Shared Header */}
      <Header />

      {/* Main Content - grows to push footer down */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-4 w-full">
        {children}
      </div>
      
      {/* Footer - sticks to bottom */}
      {footer}
      
      {/* Alarm Modal */}
      <AlarmModal
        isOpen={showAlarmModal}
        onClose={() => setShowAlarmModal(false)}
        alarms={alarms}
        setAlarms={setAlarms}
      />
      
      {/* Active Alarm Popup */}
      <ActiveAlarmPopup
        alarm={activeAlarm}
        onDismiss={dismissAlarm}
      />
    </div>
  )
}
