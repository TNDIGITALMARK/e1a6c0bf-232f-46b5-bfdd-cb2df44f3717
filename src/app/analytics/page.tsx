'use client';

import React from 'react';
import { FreshTrackWordmark } from '@/components/freshtrack/logo';
import { mockAnalytics } from '@/lib/mockData';
import { TrendingUp, DollarSign, AlertTriangle, CheckCircle2, PieChart, Calendar, TrendingDown } from 'lucide-react';

export default function AnalyticsPage() {
  const analytics = mockAnalytics;
  const wasteReduction = 100 - (analytics.waste_percentage || 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <FreshTrackWordmark />
            <nav className="flex items-center gap-6">
              <a href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Dashboard</a>
              <a href="/recipes" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Recipes</a>
              <a href="/shopping" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Shopping List</a>
              <a href="/analytics" className="text-sm font-medium text-[#008000] border-b-2 border-[#008000] pb-1">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Lifestyle Analytics</h1>
              <p className="text-gray-600">Track your savings and reduce food waste</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              Last 30 days
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-900">Money Saved</span>
              <DollarSign className="w-5 h-5 text-[#008000]" />
            </div>
            <div className="text-3xl font-bold text-[#008000]">${analytics.money_saved.toFixed(2)}</div>
            <p className="text-xs text-green-700 mt-1">↑ 12% from last month</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Items Consumed</span>
              <CheckCircle2 className="w-5 h-5 text-[#7CB342]" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{analytics.items_consumed}</div>
            <p className="text-xs text-gray-500 mt-1">Fully utilized</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Items Wasted</span>
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-amber-600">{analytics.items_wasted}</div>
            <p className="text-xs text-amber-600 mt-1">{analytics.waste_percentage?.toFixed(1)}% waste rate</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Waste Reduction</span>
              <TrendingDown className="w-5 h-5 text-[#008000]" />
            </div>
            <div className="text-3xl font-bold text-[#008000]">{wasteReduction.toFixed(0)}%</div>
            <p className="text-xs text-green-600 mt-1">Better than average</p>
          </div>
        </div>

        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">Great job this month!</h2>
              <p className="text-green-100">
                You've saved <span className="font-bold">${analytics.money_saved.toFixed(2)}</span> and reduced food waste by keeping {wasteReduction.toFixed(0)}% of your food fresh and consumed.
              </p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Category Breakdown */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-[#008000]" />
              <h2 className="text-xl font-bold text-gray-900">Category Breakdown</h2>
            </div>
            <div className="space-y-3">
              {analytics.category_breakdown && Object.entries(analytics.category_breakdown).map(([category, count]) => {
                const percentage = ((count as number) / analytics.items_consumed * 100).toFixed(0);
                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 capitalize">{category}</span>
                      <span className="text-sm font-semibold text-[#008000]">{count} items</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#008000] h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Most Consumed Items */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Consumed Items</h2>
            <div className="space-y-4">
              {analytics.most_consumed_items?.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 text-[#008000] rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Most Wasted Items */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Items to Watch
            </h2>
            <p className="text-sm text-amber-800 mb-4">
              These items were wasted most frequently. Consider buying smaller quantities or using them sooner.
            </p>
            <div className="space-y-2">
              {analytics.most_wasted_items?.map((item) => (
                <div key={item} className="bg-white rounded-lg p-3 border border-amber-200">
                  <span className="text-sm font-medium text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Habits */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-green-900 mb-4">Shopping Habits</h2>
            <p className="text-sm text-green-800 mb-4">
              Your typical shopping days - plan your meals around these patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              {analytics.peak_shopping_days?.map((day) => (
                <div key={day} className="bg-white border border-green-200 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-gray-900">{day}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Monthly Estimate</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#008000]">${analytics.estimated_savings.toFixed(0)}</span>
                <span className="text-sm text-green-700">potential savings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">How to Improve</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="font-semibold text-gray-900 mb-2">Check Expiry Dates</div>
              <p className="text-gray-600">Regularly review your fridge to use items before they expire</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="font-semibold text-gray-900 mb-2">Cook with Leftovers</div>
              <p className="text-gray-600">Use recipe suggestions to create meals from expiring ingredients</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="font-semibold text-gray-900 mb-2">Shop Smarter</div>
              <p className="text-gray-600">Follow the AI shopping list to avoid overbuying</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
