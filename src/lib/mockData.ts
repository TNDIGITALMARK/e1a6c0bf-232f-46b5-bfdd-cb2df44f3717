import { FoodItem, Recipe, ShoppingListItem, UserAnalytics } from './supabase/types';

const TENANT_ID = 'AcNjZ3ZJCOhT7zQey4AwCMjirWh1';
const PROJECT_ID = 'e1a6c0bf-232f-46b5-bfdd-cb2df44f3717';

// Helper to generate dates
const daysFromNow = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

// Mock food inventory data
export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Fresh Strawberries',
    category: 'fruits',
    quantity: 1,
    unit: 'container',
    purchase_date: daysFromNow(-2),
    expiry_date: daysFromNow(3),
    freshness_score: 85,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.95,
    storage_location: 'fridge',
    created_at: daysFromNow(-2),
    updated_at: daysFromNow(-2)
  },
  {
    id: '2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Milk',
    category: 'dairy',
    quantity: 1,
    unit: 'gallon',
    purchase_date: daysFromNow(-5),
    expiry_date: daysFromNow(2),
    freshness_score: 75,
    status: 'expiring_soon',
    detected_by_ai: true,
    confidence_score: 0.98,
    storage_location: 'fridge',
    created_at: daysFromNow(-5),
    updated_at: daysFromNow(-5)
  },
  {
    id: '3',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Chicken Breast',
    category: 'meat',
    quantity: 2,
    unit: 'lbs',
    purchase_date: daysFromNow(-1),
    expiry_date: daysFromNow(5),
    freshness_score: 90,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.92,
    storage_location: 'fridge',
    created_at: daysFromNow(-1),
    updated_at: daysFromNow(-1)
  },
  {
    id: '4',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Tomatoes',
    category: 'vegetables',
    quantity: 6,
    unit: 'pieces',
    purchase_date: daysFromNow(-3),
    expiry_date: daysFromNow(4),
    freshness_score: 80,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.89,
    storage_location: 'fridge',
    created_at: daysFromNow(-3),
    updated_at: daysFromNow(-3)
  },
  {
    id: '5',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Greek Yogurt',
    category: 'dairy',
    quantity: 4,
    unit: 'cups',
    purchase_date: daysFromNow(-4),
    expiry_date: daysFromNow(10),
    freshness_score: 95,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.97,
    storage_location: 'fridge',
    created_at: daysFromNow(-4),
    updated_at: daysFromNow(-4)
  },
  {
    id: '6',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Lettuce',
    category: 'vegetables',
    quantity: 1,
    unit: 'head',
    purchase_date: daysFromNow(-6),
    expiry_date: daysFromNow(1),
    freshness_score: 60,
    status: 'expiring_soon',
    detected_by_ai: true,
    confidence_score: 0.88,
    storage_location: 'fridge',
    created_at: daysFromNow(-6),
    updated_at: daysFromNow(-6)
  },
  {
    id: '7',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Orange Juice',
    category: 'beverages',
    quantity: 1,
    unit: 'carton',
    purchase_date: daysFromNow(-7),
    expiry_date: daysFromNow(7),
    freshness_score: 85,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.96,
    storage_location: 'fridge',
    created_at: daysFromNow(-7),
    updated_at: daysFromNow(-7)
  },
  {
    id: '8',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Eggs',
    category: 'dairy',
    quantity: 12,
    unit: 'pieces',
    purchase_date: daysFromNow(-3),
    expiry_date: daysFromNow(21),
    freshness_score: 100,
    status: 'fresh',
    detected_by_ai: true,
    confidence_score: 0.99,
    storage_location: 'fridge',
    created_at: daysFromNow(-3),
    updated_at: daysFromNow(-3)
  }
];

// Mock recipes
export const mockRecipes: Recipe[] = [
  {
    id: '1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    title: 'Greek Yogurt Parfait',
    description: 'A healthy and delicious breakfast using your fresh strawberries and yogurt',
    prep_time: 5,
    cook_time: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { name: 'Greek Yogurt', quantity: 2, unit: 'cups' },
      { name: 'Fresh Strawberries', quantity: 1, unit: 'cup' },
      { name: 'Granola', quantity: 0.5, unit: 'cup' },
      { name: 'Honey', quantity: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Layer yogurt in serving glasses',
      'Add sliced strawberries',
      'Sprinkle granola on top',
      'Drizzle with honey',
      'Serve immediately'
    ],
    cuisine: 'Mediterranean',
    meal_type: ['breakfast', 'snack'],
    dietary_tags: ['vegetarian', 'gluten-free-option'],
    suggested_by_ai: true,
    match_score: 0.92,
    missing_ingredients: ['Granola', 'Honey'],
    times_cooked: 3,
    user_rating: 5,
    is_favorite: true,
    created_at: daysFromNow(-5),
    updated_at: daysFromNow(-2)
  },
  {
    id: '2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    title: 'Grilled Chicken Salad',
    description: 'Fresh and healthy salad using chicken breast, lettuce, and tomatoes from your fridge',
    prep_time: 10,
    cook_time: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
      { name: 'Chicken Breast', quantity: 1, unit: 'lb' },
      { name: 'Lettuce', quantity: 1, unit: 'head' },
      { name: 'Tomatoes', quantity: 2, unit: 'pieces' },
      { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
      { name: 'Balsamic Vinegar', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Season chicken with salt and pepper',
      'Grill chicken for 6-7 minutes per side',
      'Chop lettuce and tomatoes',
      'Slice grilled chicken',
      'Toss salad with olive oil and balsamic vinegar',
      'Top with sliced chicken'
    ],
    cuisine: 'American',
    meal_type: ['lunch', 'dinner'],
    dietary_tags: ['high-protein', 'gluten-free'],
    suggested_by_ai: true,
    match_score: 0.88,
    missing_ingredients: ['Olive Oil', 'Balsamic Vinegar'],
    times_cooked: 1,
    is_favorite: false,
    created_at: daysFromNow(-3),
    updated_at: daysFromNow(-3)
  },
  {
    id: '3',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    title: 'Tomato Scrambled Eggs',
    description: 'Quick and nutritious breakfast with eggs and fresh tomatoes',
    prep_time: 5,
    cook_time: 8,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { name: 'Eggs', quantity: 4, unit: 'pieces' },
      { name: 'Tomatoes', quantity: 2, unit: 'pieces' },
      { name: 'Butter', quantity: 1, unit: 'tbsp' },
      { name: 'Salt and Pepper', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Beat eggs in a bowl',
      'Dice tomatoes',
      'Melt butter in pan',
      'Add tomatoes and cook for 2 minutes',
      'Pour eggs and scramble until cooked',
      'Season with salt and pepper'
    ],
    cuisine: 'International',
    meal_type: ['breakfast'],
    dietary_tags: ['vegetarian', 'gluten-free'],
    suggested_by_ai: true,
    match_score: 0.95,
    missing_ingredients: ['Butter'],
    times_cooked: 5,
    user_rating: 4,
    is_favorite: false,
    created_at: daysFromNow(-7),
    updated_at: daysFromNow(-1)
  }
];

// Mock shopping list
export const mockShoppingList: ShoppingListItem[] = [
  {
    id: '1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    item_name: 'Granola',
    category: 'grains',
    quantity: 1,
    unit: 'box',
    is_purchased: false,
    priority: 'normal',
    suggested_by_ai: true,
    reason: 'Needed for Greek Yogurt Parfait recipe',
    recipe_id: '1',
    created_at: daysFromNow(-2),
    updated_at: daysFromNow(-2)
  },
  {
    id: '2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    item_name: 'Honey',
    category: 'condiments',
    quantity: 1,
    unit: 'jar',
    is_purchased: false,
    priority: 'normal',
    suggested_by_ai: true,
    reason: 'Needed for Greek Yogurt Parfait recipe',
    recipe_id: '1',
    created_at: daysFromNow(-2),
    updated_at: daysFromNow(-2)
  },
  {
    id: '3',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    item_name: 'Milk',
    category: 'dairy',
    quantity: 1,
    unit: 'gallon',
    is_purchased: false,
    priority: 'high',
    suggested_by_ai: true,
    reason: 'Your milk is expiring soon (2 days left)',
    created_at: daysFromNow(-1),
    updated_at: daysFromNow(-1)
  },
  {
    id: '4',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    item_name: 'Lettuce',
    category: 'vegetables',
    quantity: 1,
    unit: 'head',
    is_purchased: false,
    priority: 'high',
    suggested_by_ai: true,
    reason: 'Your lettuce is expiring soon (1 day left)',
    created_at: daysFromNow(-1),
    updated_at: daysFromNow(-1)
  },
  {
    id: '5',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    item_name: 'Olive Oil',
    category: 'condiments',
    quantity: 1,
    unit: 'bottle',
    is_purchased: false,
    priority: 'normal',
    suggested_by_ai: false,
    created_at: daysFromNow(-3),
    updated_at: daysFromNow(-3)
  }
];

// Mock analytics
export const mockAnalytics: UserAnalytics = {
  id: '1',
  tenantid: TENANT_ID,
  projectid: PROJECT_ID,
  period_start: daysFromNow(-30),
  period_end: daysFromNow(0),
  items_consumed: 42,
  items_wasted: 5,
  waste_percentage: 10.6,
  estimated_savings: 85.50,
  money_saved: 76.30,
  category_breakdown: {
    'fruits': 12,
    'vegetables': 15,
    'dairy': 8,
    'meat': 5,
    'grains': 2
  },
  most_consumed_items: ['Eggs', 'Milk', 'Chicken Breast', 'Tomatoes'],
  most_wasted_items: ['Lettuce', 'Strawberries'],
  peak_shopping_days: ['Saturday', 'Sunday'],
  created_at: daysFromNow(0)
};
