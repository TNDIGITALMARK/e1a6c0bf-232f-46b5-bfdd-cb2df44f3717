'use client';

import { useState } from 'react';
import { ChefHat, Sparkles, TrendingUp } from 'lucide-react';
import { RecipeCard } from '@/components/smartfridge/RecipeCard';
import { BottomNav } from '@/components/smartfridge/BottomNav';
import { mockRecipes } from '@/lib/mock-data';
import Image from 'next/image';

export default function RecipesPage() {
  const [recipes] = useState(mockRecipes);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMore = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const avgMatchPercentage = Math.round(
    recipes.reduce((sum, r) => sum + r.matchPercentage, 0) / recipes.length
  );

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
              onClick={handleGenerateMore}
              disabled={isGenerating}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              {isGenerating ? 'Generating...' : 'Generate More'}
            </button>
          </div>
        </div>
      </header>

      {/* Generating Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <ChefHat className="w-16 h-16 text-emerald-600 animate-pulse" />
                <Sparkles className="w-6 h-6 text-emerald-400 absolute -top-1 -right-1 animate-spin" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI Generating Recipes
            </h3>
            <p className="text-gray-600">
              Finding perfect recipes based on your ingredients...
            </p>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6 border border-emerald-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Recipe Recommendations
              </h1>
              <p className="text-gray-700 mb-4">
                AI-powered recipes based on what's in your fridge. Use your ingredients before they expire!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {avgMatchPercentage}% Avg Match
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {recipes.length} Recipes Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => console.log('Recipe clicked:', recipe.name)}
            />
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Recipes Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Scan your fridge first, then we'll generate personalized recipe recommendations
            </p>
            <button
              onClick={handleGenerateMore}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Generate Recipes
            </button>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            Smart Tips
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                1
              </span>
              <span>
                Recipes prioritize ingredients expiring soon to minimize waste
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                2
              </span>
              <span>
                Match percentage shows how many ingredients you already have
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                3
              </span>
              <span>
                Generate new recipes anytime to discover creative ways to use your food
              </span>
            </li>
          </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
