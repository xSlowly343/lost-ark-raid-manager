const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  getVersion: () => ipcRenderer.invoke('get-version'),
  onNavigate: (callback) => ipcRenderer.on('navigate-to', callback),
  removeNavigateListener: () => ipcRenderer.removeAllListeners('navigate-to'),
});

// DOM ready
window.addEventListener('DOMContentLoaded', () => {
  console.log('Lost Ark Desktop App Loaded');
});