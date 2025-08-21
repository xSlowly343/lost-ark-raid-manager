'use client';

import { motion } from 'framer-motion';
import { Calculator, Zap, TrendingUp, DollarSign, Target, Settings } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const enhancementData = [
  { level: 15, successRate: 100, cost: 500, materials: { stone: 12, fusion: 6 } },
  { level: 16, successRate: 60, cost: 800, materials: { stone: 18, fusion: 9 } },
  { level: 17, successRate: 45, cost: 1200, materials: { stone: 24, fusion: 12 } },
  { level: 18, successRate: 30, cost: 1800, materials: { stone: 36, fusion: 18 } },
  { level: 19, successRate: 15, cost: 2500, materials: { stone: 48, fusion: 24 } },
  { level: 20, successRate: 10, cost: 3500, materials: { stone: 60, fusion: 30 } },
  { level: 21, successRate: 5, cost: 5000, materials: { stone: 80, fusion: 40 } },
];

export default function CalculatorPage() {
  const [currentLevel, setCurrentLevel] = useState(15);
  const [targetLevel, setTargetLevel] = useState(20);
  const [useProtection, setUseProtection] = useState(false);

  const calculateCost = () => {
    let totalCost = 0;
    let totalMaterials = { stone: 0, fusion: 0 };
    
    for (let i = currentLevel; i < targetLevel; i++) {
      const data = enhancementData.find(e => e.level === i + 1);
      if (data) {
        const attempts = Math.ceil(100 / data.successRate);
        totalCost += data.cost * attempts;
        totalMaterials.stone += data.materials.stone * attempts;
        totalMaterials.fusion += data.materials.fusion * attempts;
      }
    }
    
    return { totalCost, totalMaterials };
  };

  const { totalCost, totalMaterials } = calculateCost();

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Calculator className="w-8 h-8 mr-3 text-blue-400" />
                Калькуляторы
              </h1>
              <p className="text-gray-400 mt-1">Рассчитайте стоимость улучшений и заточки</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Enhancement Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30"
            >
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Калькулятор заточки
              </h2>

              {/* Input Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Текущий уровень</label>
                  <select 
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(Number(e.target.value))}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
                  >
                    {enhancementData.map(data => (
                      <option key={data.level} value={data.level - 1}>+{data.level - 1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Целевой уровень</label>
                  <select 
                    value={targetLevel}
                    onChange={(e) => setTargetLevel(Number(e.target.value))}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
                  >
                    {enhancementData.filter(data => data.level > currentLevel).map(data => (
                      <option key={data.level} value={data.level}>+{data.level}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    id="protection"
                    checked={useProtection}
                    onChange={(e) => setUseProtection(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="protection" className="text-sm text-gray-400">
                    Использовать защиту от разрушения
                  </label>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Общая стоимость</span>
                    <span className="text-xl font-bold text-yellow-400 flex items-center">
                      <DollarSign className="w-5 h-5 mr-1" />
                      {totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Камни разрушения:</span>
                      <span className="text-white">{totalMaterials.stone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Материалы слияния:</span>
                      <span className="text-white">{totalMaterials.fusion}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                  <Target className="w-4 h-4 mr-2" />
                  Сохранить план заточки
                </button>
              </div>
            </motion.div>

            {/* Quick Calculators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Honing Success Rate */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Шанс успеха заточки
                </h3>
                <div className="space-y-3">
                  {enhancementData.slice(0, 4).map((data, index) => (
                    <div key={data.level} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <span className="text-white">+{data.level}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                            style={{ width: `${data.successRate}%` }}
                          />
                        </div>
                        <span className="text-sm text-white w-12">{data.successRate}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gold Calculator */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-yellow-400" />
                  Калькулятор золота
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Ежедневный доход</span>
                    <span className="text-green-400 font-bold">+2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Еженедельный доход</span>
                    <span className="text-green-400 font-bold">+15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-400">Расходы на заточку</span>
                    <span className="text-red-400 font-bold">-8,000</span>
                  </div>
                  <hr className="border-gray-600" />
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                    <span className="text-white font-medium">Итого за неделю</span>
                    <span className="text-blue-400 font-bold text-lg">+7,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}