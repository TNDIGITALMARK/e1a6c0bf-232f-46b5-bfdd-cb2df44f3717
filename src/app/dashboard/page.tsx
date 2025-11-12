'use client';

import React from 'react';
import { FreshTrackWordmark } from '@/components/freshtrack/logo';
import { mockFoodItems } from '@/lib/mockData';
import { Apple, Carrot, Milk, Beef, Wine, ShoppingCart, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  fruits: <Apple className="w-5 h-5" />,
  vegetables: <Carrot className="w-5 h-5" />,
  dairy: <Milk className="w-5 h-5" />,
  meat: <Beef className="w-5 h-5" />,
  beverages: <Wine className="w-5 h-5" />,
  seafood: <Beef className="w-5 h-5" />,
  grains: <ShoppingCart className="w-5 h-5" />,
  condiments: <Wine className="w-5 h-5" />,
  snacks: <Apple className="w-5 h-5" />,
  other: <ShoppingCart className="w-5 h-5" />
};

// Status badge colors
const statusColors = {
  fresh: 'bg-green-100 text-green-800 border-green-200',
  expiring_soon: 'bg-amber-100 text-amber-800 border-amber-200',
  expired: 'bg-red-100 text-red-800 border-red-200',
  consumed: 'bg-gray-100 text-gray-800 border-gray-200'
};

export default function DashboardPage() {
  const freshItems = mockFoodItems.filter(item => item.status === 'fresh');
  const expiringSoon = mockFoodItems.filter(item => item.status === 'expiring_soon');
  const totalItems = mockFoodItems.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <FreshTrackWordmark />
            <nav className="flex items-center gap-6">
              <a href="/dashboard" className="text-sm font-medium text-[#008000] border-b-2 border-[#008000] pb-1">Dashboard</a>
              <a href="/recipes" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Recipes</a>
              <a href="/shopping" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Shopping List</a>
              <a href="/analytics" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Smart Fridge</h1>
          <p className="text-gray-600">AI-powered food tracking to reduce waste and save money</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Items</span>
              <ShoppingCart className="w-5 h-5 text-[#008000]" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalItems}</div>
            <p className="text-xs text-gray-500 mt-1">In your fridge</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Fresh Items</span>
              <CheckCircle2 className="w-5 h-5 text-[#7CB342]" />
            </div>
            <div className="text-3xl font-bold text-[#008000]">{freshItems.length}</div>
            <p className="text-xs text-gray-500 mt-1">Good condition</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Expiring Soon</span>
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-amber-600">{expiringSoon.length}</div>
            <p className="text-xs text-gray-500 mt-1">Use quickly</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">This Month</span>
              <TrendingUp className="w-5 h-5 text-[#008000]" />
            </div>
            <div className="text-3xl font-bold text-[#008000]">$76</div>
            <p className="text-xs text-gray-500 mt-1">Money saved</p>
          </div>
        </div>

        {/* Alerts */}
        {expiringSoon.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Items Expiring Soon</h3>
                <p className="text-sm text-amber-800">
                  {expiringSoon.map((item, idx) => (
                    <span key={item.id}>
                      {item.name}
                      {idx < expiringSoon.length - 1 ? ', ' : ''}
                    </span>
                  ))} - Use them in your next meal or add to shopping list for replacement.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Food Inventory */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Food Inventory</h2>
            <button className="text-sm font-medium text-[#008000] hover:text-[#006600] transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {mockFoodItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#008000] border border-gray-200">
                    {categoryIcons[item.category]}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[item.status]}`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.quantity} {item.unit} • {item.storage_location} • Freshness: {item.freshness_score}%
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  {item.expiry_date && (
                    <p className="text-sm text-gray-600">
                      Expires: {new Date(item.expiry_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  )}
                  {item.detected_by_ai && (
                    <p className="text-xs text-green-600 mt-1">
                      AI Detected • {Math.round((item.confidence_score || 0) * 100)}% confidence
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/recipes"
            className="bg-[#008000] hover:bg-[#006600] text-white rounded-xl p-6 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2">Get Recipe Suggestions</h3>
            <p className="text-sm text-green-100">
              AI suggests recipes based on what's in your fridge
            </p>
          </a>

          <a
            href="/shopping"
            className="bg-[#7CB342] hover:bg-[#6ba032] text-white rounded-xl p-6 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2">View Shopping List</h3>
            <p className="text-sm text-green-100">
              Smart list updates based on expiring items
            </p>
          </a>

          <a
            href="/analytics"
            className="bg-[#A5D6A7] hover:bg-[#95c697] text-gray-900 rounded-xl p-6 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
            <p className="text-sm text-gray-700">
              Track savings and reduce food waste
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
