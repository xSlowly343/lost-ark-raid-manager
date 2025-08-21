import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // Здесь будут API для коммуникации с основным процессом
  getAppVersion: () => process.versions.electron,
  platform: process.platform,
  
  // API для будущих функций
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', title, body),
  
  // API для работы с файлами
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, data) => ipcRenderer.invoke('write-file', filePath, data),
  
  // API для настроек
  getSettings: () => ipcRenderer.invoke('get-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings)
});