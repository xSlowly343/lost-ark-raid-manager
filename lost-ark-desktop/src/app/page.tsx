'use client';

import { motion } from 'framer-motion';
import { 
  Sword, 
  Users, 
  Calendar, 
  TrendingUp,
  Star,
  Clock,
  Zap,
  Shield,
  Calculator,
  Brain
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const stats = [
  {
    title: 'Активные персонажи',
    value: '6',
    change: '+2',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Завершенные рейды',
    value: '24',
    change: '+8',
    icon: Sword,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Уровень предметов',
    value: '1620',
    change: '+15',
    icon: Star,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },
  {
    title: 'Время в игре',
    value: '1,250ч',
    change: '+45ч',
    icon: Clock,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  }
];

const recentActivities = [
  {
    type: 'raid',
    title: 'Завершен рейд Валтан (Сложный)',
    time: '2 часа назад',
    reward: '+1500 золота',
    icon: Sword
  },
  {
    type: 'enhancement',
    title: 'Заточка оружия +20 → +21',
    time: '5 часов назад',
    reward: 'Успешно!',
    icon: Zap
  },
  {
    type: 'character',
    title: 'Новый персонаж: Артиллерист',
    time: '1 день назад',
    reward: 'Уровень 50',
    icon: Users
  }
];

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Добро пожаловать в Lost Ark Desktop</h1>
              <p className="text-gray-400 mt-1">Управляйте своими персонажами и прогрессом</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Последний вход</p>
                <p className="text-white font-medium">Сегодня, 14:30</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <p className="text-green-400 text-sm mt-1">{stat.change} за неделю</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                Последняя активность
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/30">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-gray-400 text-sm">{activity.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-medium">{activity.reward}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Быстрые действия
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 group">
                  <Sword className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium">Планировать рейд</p>
                </button>
                <button className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-200 group">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium">Добавить персонажа</p>
                </button>
                <button className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-200 group">
                  <Calculator className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium">Калькулятор заточки</p>
                </button>
                <button className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200 group">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-medium">ИИ Советы</p>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Featured Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20 lost-ark-gradient"
          >
            <div className="text-center">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-4 lost-ark-glow" />
              <h2 className="text-2xl font-bold text-white mb-2">Готовы к новым приключениям?</h2>
              <p className="text-gray-300 mb-6">Планируйте рейды, отслеживайте прогресс и общайтесь с гильдией</p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
                  Начать планирование
                </button>
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
                  Просмотр гайдов
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
