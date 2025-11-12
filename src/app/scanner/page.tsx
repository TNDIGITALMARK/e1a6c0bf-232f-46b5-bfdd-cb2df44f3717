'use client';

import { useState } from 'react';
import { Camera, Sparkles, Grid3x3 } from 'lucide-react';
import { FoodItemCard } from '@/components/smartfridge/FoodItemCard';
import { BottomNav } from '@/components/smartfridge/BottomNav';
import { mockFridgeItems } from '@/lib/mock-data';
import Image from 'next/image';

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [items] = useState(mockFridgeItems);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate AI scanning
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  const freshCount = items.filter(i => i.status === 'fresh').length;
  const expiringSoonCount = items.filter(i => i.status === 'expiring-soon').length;
  const expiredCount = items.filter(i => i.status === 'expired').length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="FoodWise"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <Camera className="w-5 h-5" />
              {isScanning ? 'Scanning...' : 'Scan Fridge'}
            </button>
          </div>
        </div>
      </header>

      {/* Scanning Overlay */}
      {isScanning && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Camera className="w-16 h-16 text-emerald-600 animate-pulse" />
                <Sparkles className="w-6 h-6 text-emerald-400 absolute -top-1 -right-1 animate-spin" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI Scanning in Progress
            </h3>
            <p className="text-gray-600">
              Analyzing fridge contents and identifying items...
            </p>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-emerald-600 mb-1">
              {freshCount}
            </div>
            <div className="text-xs text-gray-600 font-medium">Fresh</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-1">
              {expiringSoonCount}
            </div>
            <div className="text-xs text-gray-600 font-medium">Expiring Soon</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {expiredCount}
            </div>
            <div className="text-xs text-gray-600 font-medium">Expired</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-emerald-600" />
            Your Fridge Inventory
          </h2>
          <span className="text-sm text-gray-600 font-medium">
            {items.length} items
          </span>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <FoodItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State (if no items) */}
        {items.length === 0 && (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Items Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Scan your fridge to automatically catalog your food items
            </p>
            <button
              onClick={handleScan}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <Camera className="w-5 h-5" />
              Start Scanning
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
