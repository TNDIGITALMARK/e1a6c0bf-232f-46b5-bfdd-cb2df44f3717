'use client';

import React from 'react';
import { FreshTrackWordmark } from '@/components/freshtrack/logo';
import { mockRecipes, mockFoodItems } from '@/lib/mockData';
import { ChefHat, Clock, Users, Star, Sparkles, AlertCircle } from 'lucide-react';

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <FreshTrackWordmark />
            <nav className="flex items-center gap-6">
              <a href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-[#008000] transition-colors">Dashboard</a>
              <a href="/recipes" className="text-sm font-medium text-[#008000] border-b-2 border-[#008000] pb-1">Recipes</a>
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipe Suggestions</h1>
              <p className="text-gray-600">AI-powered recipes using ingredients from your fridge</p>
            </div>
            <button className="flex items-center gap-2 bg-[#008000] hover:bg-[#006600] text-white font-medium px-6 py-3 rounded-lg transition-colors">
              <Sparkles className="w-5 h-5" />
              Generate More Recipes
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-6 h-6 text-[#008000]" />
              <div>
                <p className="text-sm font-semibold text-green-900">Smart Matching Active</p>
                <p className="text-xs text-green-700">Using {mockFoodItems.length} items from your fridge</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#008000]">{mockRecipes.length}</p>
              <p className="text-xs text-green-700">Recipes available</p>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Recipe Image Placeholder */}
              <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center">
                <ChefHat className="w-16 h-16 text-[#008000] opacity-50" />
              </div>

              <div className="p-5">
                {/* Title and Match Score */}
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg flex-1">{recipe.title}</h3>
                    {recipe.is_favorite && (
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
                </div>

                {/* Match Score Badge */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#008000] h-2 rounded-full"
                        style={{ width: `${(recipe.match_score || 0) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#008000]">
                      {Math.round((recipe.match_score || 0) * 100)}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Ingredient match</p>
                </div>

                {/* Recipe Details */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{(recipe.prep_time || 0) + (recipe.cook_time || 0)} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    recipe.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    recipe.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {recipe.difficulty}
                  </div>
                </div>

                {/* Missing Ingredients */}
                {recipe.missing_ingredients && recipe.missing_ingredients.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-amber-900 mb-1">Missing ingredients:</p>
                        <p className="text-xs text-amber-800">{recipe.missing_ingredients.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.dietary_tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#008000] hover:bg-[#006600] text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                    View Recipe
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                    Add to List
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Cooked {recipe.times_cooked}x</span>
                  {recipe.user_rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{recipe.user_rating}/5</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#008000]" />
            How FreshTRACK Suggests Recipes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="font-semibold text-green-900 mb-2">1. Ingredient Analysis</div>
              <p className="text-gray-600">AI scans your fridge inventory to identify available ingredients</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="font-semibold text-green-900 mb-2">2. Expiry Priority</div>
              <p className="text-gray-600">Recipes prioritize items expiring soon to reduce waste</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="font-semibold text-green-900 mb-2">3. Match Scoring</div>
              <p className="text-gray-600">Higher scores mean fewer missing ingredients to buy</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
