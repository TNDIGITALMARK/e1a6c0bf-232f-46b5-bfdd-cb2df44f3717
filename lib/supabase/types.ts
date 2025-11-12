// FreshTRACK Database Types

export interface FoodItem {
  id: string;
  tenantid: string;
  projectid: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'dairy' | 'meat' | 'seafood' | 'grains' | 'beverages' | 'condiments' | 'snacks' | 'other';
  quantity: number;
  unit: string;
  purchase_date: string;
  expiry_date?: string;
  freshness_score?: number;
  status: 'fresh' | 'expiring_soon' | 'expired' | 'consumed';
  detected_by_ai: boolean;
  confidence_score?: number;
  image_url?: string;
  storage_location: 'fridge' | 'freezer' | 'pantry';
  created_at: string;
  updated_at: string;
}

export interface Recipe {
  id: string;
  tenantid: string;
  projectid: string;
  title: string;
  description?: string;
  prep_time?: number;
  cook_time?: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Array<{
    name: string;
    quantity: number;
    unit: string;
  }>;
  instructions: string[];
  image_url?: string;
  cuisine?: string;
  meal_type?: string[];
  dietary_tags?: string[];
  suggested_by_ai: boolean;
  match_score?: number;
  missing_ingredients?: Array<string>;
  times_cooked: number;
  user_rating?: number;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}

export interface ShoppingListItem {
  id: string;
  tenantid: string;
  projectid: string;
  item_name: string;
  category?: string;
  quantity: number;
  unit: string;
  is_purchased: boolean;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  suggested_by_ai: boolean;
  reason?: string;
  recipe_id?: string;
  created_at: string;
  updated_at: string;
}

export interface UserAnalytics {
  id: string;
  tenantid: string;
  projectid: string;
  period_start: string;
  period_end: string;
  items_consumed: number;
  items_wasted: number;
  waste_percentage?: number;
  estimated_savings: number;
  money_saved: number;
  category_breakdown?: Record<string, number>;
  most_consumed_items?: string[];
  most_wasted_items?: string[];
  peak_shopping_days?: string[];
  created_at: string;
}
