import { Recipe } from '@/lib/types';
import { Clock, ChefHat } from 'lucide-react';
import Image from 'next/image';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
    >
      {/* Recipe Image */}
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          fill
          className="object-cover"
        />
        {/* Match Percentage Badge */}
        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {recipe.matchPercentage}% Match
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {recipe.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {recipe.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.matchingIngredients.length} ingredients</span>
          </div>
        </div>

        {/* Matching Ingredients */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1.5">You have:</p>
          <div className="flex flex-wrap gap-1.5">
            {recipe.matchingIngredients.map((ingredient, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Get Recipe Button */}
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
          Get Recipe
        </button>
      </div>
    </div>
  );
}
