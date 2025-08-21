'use client';

import { motion } from 'framer-motion';
import { Sword, Clock, Users, Star, Plus, Filter } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const raids = [
  {
    name: 'Валтан',
    difficulty: 'Сложный',
    itemLevel: 1415,
    players: 8,
    duration: '45 мин',
    rewards: ['Реликвия', 'Золото', 'Материалы'],
    completed: true,
    image: '/raids/valtan.jpg'
  },
  {
    name: 'Виакисс',
    difficulty: 'Сложный', 
    itemLevel: 1430,
    players: 8,
    duration: '50 мин',
    rewards: ['Реликвия', 'Золото', 'Материалы'],
    completed: false,
    image: '/raids/vyakiss.jpg'
  },
  {
    name: 'Какул-Сайдон',
    difficulty: 'Адский',
    itemLevel: 1475,
    players: 8,
    duration: '60 мин',
    rewards: ['Древняя реликвия', 'Золото', 'Материалы'],
    completed: false,
    image: '/raids/kakul.jpg'
  },
  {
    name: 'Браелшаза',
    difficulty: 'Адский',
    itemLevel: 1490,
    players: 8,
    duration: '70 мин',
    rewards: ['Древняя реликвия', 'Золото', 'Материалы'],
    completed: false,
    image: '/raids/brelshaza.jpg'
  }
];

export default function RaidsPage() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Sword className="w-8 h-8 mr-3 text-blue-400" />
                Рейды
              </h1>
              <p className="text-gray-400 mt-1">Планируйте и отслеживайте прохождение рейдов</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Фильтры</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Добавить рейд</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Завершено на неделе</p>
                  <p className="text-2xl font-bold text-green-400">12</p>
                </div>
                <Sword className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Запланировано</p>
                  <p className="text-2xl font-bold text-blue-400">8</p>
                </div>
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Заработано золота</p>
                  <p className="text-2xl font-bold text-yellow-400">15,750</p>
                </div>
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Участников</p>
                  <p className="text-2xl font-bold text-purple-400">64</p>
                </div>
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </motion.div>
          </div>

          {/* Raids Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {raids.map((raid, index) => (
              <motion.div
                key={raid.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 group cursor-pointer"
              >
                {/* Raid Image */}
                <div className="h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      raid.difficulty === 'Адский' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {raid.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {raid.completed && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{raid.name}</h3>
                  </div>
                </div>

                {/* Raid Info */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{raid.itemLevel} уровень</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{raid.players} игроков</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{raid.duration}</span>
                    </div>
                  </div>

                  {/* Rewards */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Награды:</p>
                    <div className="flex flex-wrap gap-1">
                      {raid.rewards.map((reward, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30"
                        >
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
                      {raid.completed ? 'Повторить' : 'Запланировать'}
                    </button>
                    <button className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors">
                      Инфо
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}