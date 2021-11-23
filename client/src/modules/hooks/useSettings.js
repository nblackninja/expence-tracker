import { useContext } from 'react'
import SettingsContext from '../context/Settings'

export const useSettings = () => {
  return useContext(SettingsContext)
}

// USE
// const { settings, saveSettings } = useSettings()
// settings.%VALUE_NAME%
// saveSettings({ ...settings, %VALUE_NAME%: %VALUE_VALUE% })
