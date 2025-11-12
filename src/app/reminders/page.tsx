'use client';

import { useState } from 'react';
import { Bell, ShoppingCart, Check } from 'lucide-react';
import { AlertCard } from '@/components/smartfridge/AlertCard';
import { BottomNav } from '@/components/smartfridge/BottomNav';
import { mockReminders, mockShoppingList } from '@/lib/mock-data';
import Image from 'next/image';

export default function RemindersPage() {
  const [reminders] = useState(mockReminders);
  const [shoppingList, setShoppingList] = useState(mockShoppingList);

  const urgentCount = reminders.filter(r => r.priority === 'urgent').length;
  const warningCount = reminders.filter(r => r.priority === 'warning').length;

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="FoodWise"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {/* Alert Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {urgentCount}
                </div>
                <div className="text-sm text-gray-600">Urgent Alerts</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">
                  {warningCount}
                </div>
                <div className="text-sm text-gray-600">Warnings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Reminders Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-600" />
            Active Reminders
          </h2>
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <AlertCard
                key={reminder.id}
                reminder={reminder}
                onAction={() => console.log('Action clicked')}
              />
            ))}
          </div>
        </div>

        {/* Shopping List Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
            Shopping List
          </h2>
          <div className="bg-white rounded-xl shadow divide-y divide-gray-100">
            {shoppingList.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <button
                  onClick={() => toggleShoppingItem(item.id)}
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    item.checked
                      ? 'bg-emerald-600 border-emerald-600'
                      : 'border-gray-300 hover:border-emerald-600'
                  }`}
                >
                  {item.checked && <Check className="w-4 h-4 text-white" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-medium ${
                      item.checked
                        ? 'text-gray-400 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.reason === 'ran-out'
                        ? 'bg-red-100 text-red-700'
                        : item.reason === 'low-stock'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {item.reason === 'ran-out'
                      ? 'Out of stock'
                      : item.reason === 'low-stock'
                      ? 'Low'
                      : 'Suggested'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {reminders.length === 0 && (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Active Reminders
            </h3>
            <p className="text-gray-600">
              Your fridge is in good shape! We'll notify you when items are expiring.
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
