'use client';

import { motion } from 'framer-motion';
import { Settings, User, Bell, Shield, Monitor, Globe, Database, Palette } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('ru');

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Settings className="w-8 h-8 mr-3 text-blue-400" />
                Настройки
              </h1>
              <p className="text-gray-400 mt-1">Настройте приложение под свои предпочтения</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 max-w-4xl">
          <div className="space-y-6">
            {/* Account Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                Аккаунт
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Имя пользователя</label>
                  <input 
                    type="text"
                    defaultValue="LostArkPlayer"
                    className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Основной сервер</label>
                  <select className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none">
                    <option value="siren">Сирен</option>
                    <option value="nineveh">Ниневия</option>
                    <option value="procyon">Прокион</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Appearance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-purple-400" />
                Внешний вид
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Темная тема</p>
                    <p className="text-sm text-gray-400">Использовать темный интерфейс</p>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      darkMode ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Язык интерфейса</label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
                  >
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                    <option value="ko">한국어</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                Уведомления
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Уведомления о рейдах</p>
                    <p className="text-sm text-gray-400">Получать напоминания о запланированных рейдах</p>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Автосинхронизация</p>
                    <p className="text-sm text-gray-400">Автоматически синхронизировать с сайтом</p>
                  </div>
                  <button
                    onClick={() => setAutoSync(!autoSync)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      autoSync ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoSync ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Data & Sync */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2 text-green-400" />
                Данные и синхронизация
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">URL вашего сайта</label>
                  <input 
                    type="text"
                    placeholder="https://your-lost-ark-site.com"
                    className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
                    Синхронизировать сейчас
                  </button>
                  <button className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
                    Экспорт данных
                  </button>
                </div>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-gray-400" />
                О приложении
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Версия</span>
                  <span className="text-white">1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Electron</span>
                  <span className="text-white">37.3.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Next.js</span>
                  <span className="text-white">15.5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Последнее обновление</span>
                  <span className="text-white">20.12.2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}