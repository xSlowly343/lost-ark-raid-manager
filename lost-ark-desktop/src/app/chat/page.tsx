'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Send, Users, Hash, Settings, Plus, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const channels = [
  { id: 1, name: 'общий', type: 'text', unread: 3 },
  { id: 2, name: 'рейды', type: 'text', unread: 0 },
  { id: 3, name: 'торговля', type: 'text', unread: 1 },
  { id: 4, name: 'помощь', type: 'text', unread: 0 },
];

const messages = [
  {
    id: 1,
    author: 'РейдМастер',
    content: 'Собираем группу на Валтан сложный, нужен 1 саппорт',
    timestamp: '14:30',
    avatar: '🛡️'
  },
  {
    id: 2,
    author: 'АрканистПро',
    content: 'Могу пойти, уровень предметов 1580',
    timestamp: '14:32',
    avatar: '🔮'
  },
  {
    id: 3,
    author: 'БерсеркВоин',
    content: 'А когда планируете начать?',
    timestamp: '14:33',
    avatar: '⚔️'
  },
  {
    id: 4,
    author: 'ПаладинСвет',
    content: 'Я готов, паладин 1590 уровень',
    timestamp: '14:35',
    avatar: '✨'
  },
];

const onlineMembers = [
  { name: 'РейдМастер', status: 'В рейде', class: 'Берсерк' },
  { name: 'АрканистПро', status: 'В игре', class: 'Арканист' },
  { name: 'БерсеркВоин', status: 'В игре', class: 'Берсерк' },
  { name: 'ПаладинСвет', status: 'В игре', class: 'Паладин' },
  { name: 'СорсМаг', status: 'Отошел', class: 'Сорсерес' },
];

export default function ChatPage() {
  const [selectedChannel, setSelectedChannel] = useState(1);
  const [message, setMessage] = useState('');

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto flex">
        {/* Channels Sidebar */}
        <div className="w-64 bg-gray-800/30 border-r border-gray-700/50 flex flex-col">
          <div className="p-4 border-b border-gray-700/50">
            <h2 className="text-lg font-bold text-white flex items-center">
              <Hash className="w-5 h-5 mr-2 text-blue-400" />
              Каналы
            </h2>
          </div>
          
          <div className="flex-1 p-4">
            <div className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    selectedChannel === channel.id
                      ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
                      : 'hover:bg-gray-700/30 text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Hash className="w-4 h-4" />
                    <span>{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Hash className="w-5 h-5 text-blue-400" />
                <h1 className="text-xl font-bold text-white">
                  {channels.find(c => c.id === selectedChannel)?.name}
                </h1>
                <span className="text-sm text-gray-400">
                  {onlineMembers.length} участников онлайн
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                  <Search className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg">
                  {msg.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-white">{msg.author}</span>
                    <span className="text-xs text-gray-400">{msg.timestamp}</span>
                  </div>
                  <p className="text-gray-300">{msg.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Сообщение в #${channels.find(c => c.id === selectedChannel)?.name}`}
                  className="w-full p-3 pr-12 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // Handle send message
                      setMessage('');
                    }
                  }}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-400 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Members Sidebar */}
        <div className="w-64 bg-gray-800/30 border-l border-gray-700/50 flex flex-col">
          <div className="p-4 border-b border-gray-700/50">
            <h2 className="text-lg font-bold text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-400" />
              Участники
            </h2>
          </div>
          
          <div className="flex-1 p-4">
            <div className="space-y-2">
              {onlineMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                      {member.name[0]}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                      member.status === 'В игре' ? 'bg-green-500' :
                      member.status === 'В рейде' ? 'bg-blue-500' : 'bg-gray-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-gray-400">{member.status}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}