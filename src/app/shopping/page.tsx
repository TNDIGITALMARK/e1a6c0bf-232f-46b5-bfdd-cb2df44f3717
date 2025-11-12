'use client';

import React, { useState } from 'react';
import { FreshTrackWordmark } from '@/components/freshtrack/logo';
import { mockShoppingList } from '@/lib/mockData';
import { ShoppingCart, Sparkles, CheckCircle2, Circle, Plus, Trash2, AlertTriangle } from 'lucide-react';

export default function ShoppingPage() {
  const [items, setItems] = useState(mockShoppingList);

  const togglePurchased = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, is_purchased: !item.is_purchased } : item
    ));
  };

  const unpurchasedItems = items.filter(item => !item.is_purchased);
  const purchasedItems = items.filter(item => item.is_purchased);
  const highPriorityItems = unpurchasedItems.filter(item => item.priority === 'high' || item.priority === 'urgent');

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
              <a href="/shopping" className="text-sm font-medium text-[#008000] border-b-2 border-[#008000] pb-1">Shopping List</a>
              <a href="/analytics" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping List</h1>
              <p className="text-gray-600">Smart suggestions based on expiring items and recipes</p>
            </div>
            <button className="flex items-center gap-2 bg-[#008000] hover:bg-[#006600] text-white font-medium px-6 py-3 rounded-lg transition-colors">
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">To Buy</span>
              <ShoppingCart className="w-4 h-4 text-[#008000]" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{unpurchasedItems.length}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">High Priority</span>
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-bold text-amber-600">{highPriorityItems.length}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">AI Suggested</span>
              <Sparkles className="w-4 h-4 text-[#7CB342]" />
            </div>
            <div className="text-2xl font-bold text-[#7CB342]">
              {items.filter(i => i.suggested_by_ai).length}
            </div>
          </div>
        </div>

        {/* High Priority Alert */}
        {highPriorityItems.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Priority Items</h3>
                <p className="text-sm text-amber-800">
                  {highPriorityItems.length} item{highPriorityItems.length > 1 ? 's' : ''} need{highPriorityItems.length === 1 ? 's' : ''} urgent replacement - items in your fridge are expiring soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Shopping List - Unpurchased */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Items to Buy</h2>
          <div className="space-y-2">
            {unpurchasedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <button
                  onClick={() => togglePurchased(item.id)}
                  className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-[#008000] transition-colors flex items-center justify-center"
                >
                  <Circle className="w-4 h-4 text-gray-300" />
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{item.item_name}</h3>
                    {item.priority === 'high' || item.priority === 'urgent' ? (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {item.priority}
                      </span>
                    ) : null}
                    {item.suggested_by_ai && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-200">
                        AI suggested
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {item.quantity} {item.unit} {item.category && `• ${item.category}`}
                  </p>
                  {item.reason && (
                    <p className="text-xs text-gray-500 mt-1 italic">{item.reason}</p>
                  )}
                </div>

                <button className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}

            {unpurchasedItems.length === 0 && (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600">No items to buy</p>
                <p className="text-sm text-gray-500 mt-1">Add items or let AI suggest based on your fridge</p>
              </div>
            )}
          </div>
        </div>

        {/* Shopping List - Purchased */}
        {purchasedItems.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Purchased</h2>
            <div className="space-y-2">
              {purchasedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <button
                    onClick={() => togglePurchased(item.id)}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#008000] flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </button>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-700 line-through">{item.item_name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} {item.unit}
                    </p>
                  </div>

                  <button className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Insights */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#008000]" />
            Smart Shopping Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="font-semibold text-green-900 mb-2">Expiry-Based Suggestions</div>
              <p className="text-gray-600">FreshTRACK automatically suggests replacements for expiring items</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="font-semibold text-green-900 mb-2">Recipe Integration</div>
              <p className="text-gray-600">Missing ingredients from recipes are automatically added to your list</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
