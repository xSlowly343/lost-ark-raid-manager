'use client'

import { useState } from 'react'
import { 
  Sword, 
  Users, 
  Calendar, 
  MessageCircle, 
  Settings, 
  Brain, 
  Calculator,
  Home,
  Crown,
  Zap,
  Shield,
  Target,
  BookOpen,
  BarChart3,
  Gamepad2
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-blue-400' },
    { id: 'characters', label: 'Characters', icon: Users, color: 'text-green-400' },
    { id: 'raids', label: 'Raids', icon: Crown, color: 'text-purple-400' },
    { id: 'schedule', label: 'Schedule', icon: Calendar, color: 'text-orange-400' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, color: 'text-pink-400' },
    { id: 'ai', label: 'AI Features', icon: Brain, color: 'text-cyan-400' },
    { id: 'calculators', label: 'Calculators', icon: Calculator, color: 'text-yellow-400' },
    { id: 'gear', label: 'Gear', icon: Shield, color: 'text-red-400' },
    { id: 'market', label: 'Market', icon: BarChart3, color: 'text-emerald-400' },
    { id: 'guides', label: 'Guides', icon: BookOpen, color: 'text-indigo-400' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'text-gray-400' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />
      case 'characters':
        return <CharactersContent />
      case 'raids':
        return <RaidsContent />
      case 'schedule':
        return <ScheduleContent />
      case 'chat':
        return <ChatContent />
      case 'ai':
        return <AIContent />
      case 'calculators':
        return <CalculatorsContent />
      case 'gear':
        return <GearContent />
      case 'market':
        return <MarketContent />
      case 'guides':
        return <GuidesContent />
      case 'settings':
        return <SettingsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-dark">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-lostark-gold to-lostark-orange rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Lost Ark</h1>
              <p className="text-sm text-gray-400">Desktop App</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              >
                <Icon className={`w-5 h-5 mr-3 ${item.color}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            <p>Version 1.0.0</p>
            <p className="mt-1">Lost Ark Desktop</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white capitalize">
              {navigationItems.find(item => item.id === activeTab)?.label}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Zap className="w-4 h-4" />
                <span>Online</span>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

// Dashboard Content
function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Characters</p>
              <p className="text-2xl font-bold text-white">6</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Active Raids</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Guild Members</p>
              <p className="text-2xl font-bold text-white">24</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Item Level</p>
              <p className="text-2xl font-bold text-white">1580</p>
            </div>
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[
              { text: 'Completed Valtan Hard Mode', time: '2 hours ago', type: 'success' },
              { text: 'Joined Akkan Normal Mode', time: '5 hours ago', type: 'info' },
              { text: 'Upgraded weapon to +25', time: '1 day ago', type: 'warning' },
              { text: 'Joined guild "Lost Ark Warriors"', time: '2 days ago', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-white">{activity.text}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-primary">
              <Sword className="w-4 h-4 mr-2" />
              Start Raid
            </button>
            <button className="btn-secondary">
              <Users className="w-4 h-4 mr-2" />
              Find Party
            </button>
            <button className="btn-success">
              <Calculator className="w-4 h-4 mr-2" />
              Upgrade Calc
            </button>
            <button className="btn-secondary">
              <MessageCircle className="w-4 h-4 mr-2" />
              Guild Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Placeholder content components
function CharactersContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Characters Management</h3>
      <p className="text-gray-400">Characters functionality will be implemented here...</p>
    </div>
  )
}

function RaidsContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Raids Management</h3>
      <p className="text-gray-400">Raids functionality will be implemented here...</p>
    </div>
  )
}

function ScheduleContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Schedule Management</h3>
      <p className="text-gray-400">Schedule functionality will be implemented here...</p>
    </div>
  )
}

function ChatContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Chat System</h3>
      <p className="text-gray-400">Chat functionality will be implemented here...</p>
    </div>
  )
}

function AIContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">AI Features</h3>
      <p className="text-gray-400">AI functionality will be implemented here...</p>
    </div>
  )
}

function CalculatorsContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Calculators</h3>
      <p className="text-gray-400">Calculators functionality will be implemented here...</p>
    </div>
  )
}

function GearContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Gear Management</h3>
      <p className="text-gray-400">Gear functionality will be implemented here...</p>
    </div>
  )
}

function MarketContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Market Analysis</h3>
      <p className="text-gray-400">Market functionality will be implemented here...</p>
    </div>
  )
}

function GuidesContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Game Guides</h3>
      <p className="text-gray-400">Guides functionality will be implemented here...</p>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
      <p className="text-gray-400">Settings functionality will be implemented here...</p>
    </div>
  )
}