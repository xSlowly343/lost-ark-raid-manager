'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Plus, Filter, Bell, Sword, Star, Users } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const events = [
  {
    id: 1,
    title: 'Рейд Валтан (Сложный)',
    time: '20:00',
    date: '2024-12-20',
    type: 'raid',
    participants: 8,
    status: 'scheduled'
  },
  {
    id: 2,
    title: 'Гильдейские задания',
    time: '19:00',
    date: '2024-12-20',
    type: 'guild',
    participants: 15,
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Рейд Браелшаза (1-4 врата)',
    time: '21:30',
    date: '2024-12-21',
    type: 'raid',
    participants: 8,
    status: 'scheduled'
  },
  {
    id: 4,
    title: 'Еженедельные задания',
    time: '18:00',
    date: '2024-12-22',
    type: 'weekly',
    participants: 1,
    status: 'pending'
  }
];

const dailyTasks = [
  { name: 'Ежедневные задания хаоса', completed: true, reward: '+150 золота' },
  { name: 'Подземелье стражей', completed: true, reward: '+200 золота' },
  { name: 'Уна задания', completed: false, reward: '+100 золота' },
  { name: 'Гильдейские задания', completed: false, reward: '+300 золота' },
];

const typeColors = {
  raid: 'bg-red-500/20 text-red-400 border-red-500/30',
  guild: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  weekly: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  daily: 'bg-green-500/20 text-green-400 border-green-500/30'
};

export default function SchedulePage() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-blue-400" />
                Расписание
              </h1>
              <p className="text-gray-400 mt-1">Планируйте события и отслеживайте задачи</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Фильтры</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Добавить событие</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Tasks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-yellow-400" />
              Задачи на сегодня
            </h2>
            <div className="space-y-3">
              {dailyTasks.map((task, index) => (
                <motion.div
                  key={task.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30"
                >
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                    task.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-gray-500'
                  }`}>
                    {task.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                      {task.name}
                    </p>
                    <p className="text-xs text-green-400">{task.reward}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Предстоящие события
              </h2>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20">
                          {event.type === 'raid' && <Sword className="w-6 h-6 text-blue-400" />}
                          {event.type === 'guild' && <Users className="w-6 h-6 text-blue-400" />}
                          {event.type === 'weekly' && <Star className="w-6 h-6 text-blue-400" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{event.title}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm text-gray-400 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.time}
                            </span>
                            <span className="text-sm text-gray-400 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(event.date).toLocaleDateString('ru-RU')}
                            </span>
                            <span className="text-sm text-gray-400 flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {event.participants}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${typeColors[event.type as keyof typeof typeColors]}`}>
                          {event.type === 'raid' && 'Рейд'}
                          {event.type === 'guild' && 'Гильдия'}
                          {event.type === 'weekly' && 'Еженедельно'}
                          {event.type === 'daily' && 'Ежедневно'}
                        </span>
                        <button className="p-2 rounded-lg bg-gray-600/50 hover:bg-gray-500/50 transition-colors">
                          <Bell className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Weekly Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 mt-6"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Недельный прогресс
              </h2>
              
              <div className="grid grid-cols-7 gap-2">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
                  <div key={day} className="text-center">
                    <p className="text-xs text-gray-400 mb-2">{day}</p>
                    <div className={`w-full h-16 rounded-lg border-2 flex items-center justify-center ${
                      index < 4 
                        ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                        : index === 4
                        ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                        : 'bg-gray-700/30 border-gray-600/30 text-gray-500'
                    }`}>
                      {index < 4 && <Sword className="w-6 h-6" />}
                      {index === 4 && <Clock className="w-6 h-6" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}