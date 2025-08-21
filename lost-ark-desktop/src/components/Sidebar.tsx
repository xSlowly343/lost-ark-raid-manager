'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sword, 
  Users, 
  Calendar, 
  MessageCircle, 
  Settings, 
  Calculator,
  Brain,
  Shield,
  Trophy,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { 
    href: '/', 
    icon: Trophy, 
    label: 'Главная',
    description: 'Обзор и статистика'
  },
  { 
    href: '/raids', 
    icon: Sword, 
    label: 'Рейды',
    description: 'Управление рейдами'
  },
  { 
    href: '/characters', 
    icon: Users, 
    label: 'Персонажи',
    description: 'Ваши персонажи'
  },
  { 
    href: '/schedule', 
    icon: Calendar, 
    label: 'Расписание',
    description: 'События и задачи'
  },
  { 
    href: '/chat', 
    icon: MessageCircle, 
    label: 'Чаты',
    description: 'Общение с гильдией'
  },
  { 
    href: '/calculator', 
    icon: Calculator, 
    label: 'Калькуляторы',
    description: 'Заточка и улучшения'
  },
  { 
    href: '/ai', 
    icon: Brain, 
    label: 'ИИ Помощник',
    description: 'Умные функции'
  },
  { 
    href: '/settings', 
    icon: Settings, 
    label: 'Настройки',
    description: 'Конфигурация'
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ width: 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen bg-gray-800/50 backdrop-blur-lg border-r border-gray-700/50 flex flex-col relative"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-3"
            >
              <Shield className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="font-bold text-lg text-white">Lost Ark</h1>
                <p className="text-sm text-gray-400">Desktop</p>
              </div>
            </motion.div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center space-x-3 p-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400' 
                    : 'hover:bg-gray-700/30 text-gray-300 hover:text-white'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
                {!collapsed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1"
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </motion.div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700/50">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <p className="text-xs text-gray-500">Lost Ark Desktop v1.0.0</p>
            <p className="text-xs text-gray-600">Made with ❤️</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}