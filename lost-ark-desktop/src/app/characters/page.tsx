'use client';

import { motion } from 'framer-motion';
import { Users, Plus, Filter, Star, TrendingUp, Shield, Sword } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const characters = [
  {
    name: 'Арканист Мастер',
    class: 'Арканист',
    level: 60,
    itemLevel: 1620,
    server: 'Сирен',
    mainCharacter: true,
    avatar: '/characters/arcanist.jpg',
    stats: {
      attack: 15420,
      health: 185000,
      mana: 12500
    }
  },
  {
    name: 'Берсерк Воин',
    class: 'Берсерк',
    level: 60,
    itemLevel: 1580,
    server: 'Сирен',
    mainCharacter: false,
    avatar: '/characters/berserker.jpg',
    stats: {
      attack: 14800,
      health: 220000,
      mana: 8500
    }
  },
  {
    name: 'Сорсерес Маг',
    class: 'Сорсерес',
    level: 58,
    itemLevel: 1490,
    server: 'Сирен',
    mainCharacter: false,
    avatar: '/characters/sorceress.jpg',
    stats: {
      attack: 13200,
      health: 155000,
      mana: 15000
    }
  },
  {
    name: 'Паладин Защитник',
    class: 'Паладин',
    level: 60,
    itemLevel: 1520,
    server: 'Сирен',
    mainCharacter: false,
    avatar: '/characters/paladin.jpg',
    stats: {
      attack: 11800,
      health: 280000,
      mana: 10000
    }
  }
];

const classColors = {
  'Арканист': 'from-purple-500 to-pink-500',
  'Берсерк': 'from-red-500 to-orange-500',
  'Сорсерес': 'from-blue-500 to-cyan-500',
  'Паладин': 'from-yellow-500 to-amber-500'
};

export default function CharactersPage() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Users className="w-8 h-8 mr-3 text-blue-400" />
                Персонажи
              </h1>
              <p className="text-gray-400 mt-1">Управляйте своими персонажами и их прогрессом</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Фильтры</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Добавить персонажа</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Всего персонажей</p>
                  <p className="text-3xl font-bold text-white">{characters.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Средний уровень предметов</p>
                  <p className="text-3xl font-bold text-yellow-400">1553</p>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Готовы к рейдам</p>
                  <p className="text-3xl font-bold text-green-400">3</p>
                </div>
                <Sword className="w-8 h-8 text-green-400" />
              </div>
            </motion.div>
          </div>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 group cursor-pointer"
              >
                {/* Character Header */}
                <div className={`h-32 bg-gradient-to-br ${classColors[character.class as keyof typeof classColors]} relative`}>
                  <div className="absolute inset-0 bg-black/30" />
                  {character.mainCharacter && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded border border-yellow-500/30">
                        Основной
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-bold text-white">{character.name}</h3>
                    <p className="text-sm text-gray-200">{character.class}</p>
                  </div>
                </div>

                {/* Character Info */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-400">Уровень</p>
                      <p className="text-lg font-bold text-white">{character.level}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Уровень предметов</p>
                      <p className="text-lg font-bold text-yellow-400">{character.itemLevel}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Сервер</p>
                    <p className="text-sm text-blue-400">{character.server}</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Атака</span>
                      <span className="text-xs text-white font-medium">{character.stats.attack.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Здоровье</span>
                      <span className="text-xs text-white font-medium">{character.stats.health.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Мана</span>
                      <span className="text-xs text-white font-medium">{character.stats.mana.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
                      Управлять
                    </button>
                    <button className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors">
                      <TrendingUp className="w-4 h-4" />
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