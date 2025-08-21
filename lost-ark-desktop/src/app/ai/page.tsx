'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Target, MessageSquare, Lightbulb, BarChart3 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const aiFeatures = [
  {
    title: 'Оптимизация билда',
    description: 'ИИ анализирует ваш билд и предлагает улучшения',
    icon: Target,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Планирование рейдов',
    description: 'Умное планирование рейдов на основе вашего расписания',
    icon: BarChart3,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Анализ прогресса',
    description: 'Отслеживание и анализ вашего игрового прогресса',
    icon: TrendingUp,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Советы по заточке',
    description: 'Рекомендации по оптимальной стратегии заточки',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  }
];

const suggestions = [
  {
    type: 'optimization',
    title: 'Рекомендация по билду',
    content: 'Ваш Арканист может улучшить DPS на 15% заменив гравировку "Увеличение урона" на "Импульс"',
    priority: 'high',
    icon: Target
  },
  {
    type: 'scheduling',
    title: 'Планирование рейдов',
    content: 'Оптимальное время для рейда Браелшаза: завтра в 20:00, когда онлайн большинство гильдии',
    priority: 'medium',
    icon: BarChart3
  },
  {
    type: 'enhancement',
    title: 'Заточка экипировки',
    content: 'Рекомендуется сначала улучшить оружие до +20, а затем броню. Экономия: 2,500 золота',
    priority: 'low',
    icon: Zap
  }
];

export default function AIPage() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'ai',
      content: 'Привет! Я ваш ИИ помощник по Lost Ark. Чем могу помочь?',
      timestamp: '14:20'
    }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, {
        type: 'user',
        content: chatMessage,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setChatMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          type: 'ai',
          content: 'Анализирую ваш запрос... Дайте мне немного времени для подготовки рекомендаций.',
          timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Brain className="w-8 h-8 mr-3 text-blue-400" />
                ИИ Помощник
              </h1>
              <p className="text-gray-400 mt-1">Умные рекомендации и анализ для вашей игры</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Features */}
          <div className="lg:col-span-2 space-y-6">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className={`p-3 rounded-lg ${feature.bgColor} mb-4 w-fit`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors text-sm">
                      Использовать
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* AI Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                Рекомендации ИИ
              </h2>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => {
                  const Icon = suggestion.icon;
                  return (
                    <motion.div
                      key={suggestion.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-white">{suggestion.title}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              suggestion.priority === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                              suggestion.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                              'bg-green-500/20 text-green-400 border border-green-500/30'
                            }`}>
                              {suggestion.priority === 'high' ? 'Высокий' :
                               suggestion.priority === 'medium' ? 'Средний' : 'Низкий'}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{suggestion.content}</p>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded transition-colors">
                              Применить
                            </button>
                            <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-xs rounded transition-colors">
                              Подробнее
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/30 flex flex-col h-fit"
          >
            <div className="p-4 border-b border-gray-700/50">
              <h2 className="text-lg font-bold text-white flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                Чат с ИИ
              </h2>
            </div>
            
            <div className="flex-1 p-4 space-y-4 max-h-96 overflow-auto">
              {chatHistory.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700/50 text-gray-300'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Спросите что-нибудь об игре..."
                  className="flex-1 p-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}