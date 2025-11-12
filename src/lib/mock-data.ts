import { FridgeItem, Reminder, Recipe, ShoppingItem } from './types';

// Mock Fridge Inventory Data
export const mockFridgeItems: FridgeItem[] = [
  {
    id: '1',
    name: 'Fresh Spinach',
    category: 'Vegetables',
    quantity: 'Half bag',
    expiresIn: 2,
    status: 'expiring-soon',
    imageUrl: '/generated/fridge-hero.png',
    addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    name: 'Organic Milk',
    category: 'Dairy',
    quantity: '3/4 full',
    expiresIn: 5,
    status: 'fresh',
    imageUrl: '/generated/fridge-hero.png',
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '3',
    name: 'Leftover Pizza',
    category: 'Prepared Food',
    quantity: '2 slices',
    expiresIn: 0,
    status: 'expired',
    imageUrl: '/generated/recipe-pizza-bread.png',
    addedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: '4',
    name: 'Chicken Breast',
    category: 'Meat',
    quantity: '1 pound',
    expiresIn: 3,
    status: 'fresh',
    imageUrl: '/generated/fridge-hero.png',
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: '5',
    name: 'Greek Yogurt',
    category: 'Dairy',
    quantity: 'Unopened',
    expiresIn: 7,
    status: 'fresh',
    imageUrl: '/generated/fridge-hero.png',
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: '6',
    name: 'Red Bell Peppers',
    category: 'Vegetables',
    quantity: '3 pieces',
    expiresIn: 4,
    status: 'fresh',
    imageUrl: '/generated/fridge-hero.png',
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '7',
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    quantity: 'Half loaf',
    expiresIn: 2,
    status: 'expiring-soon',
    imageUrl: '/generated/recipe-pizza-bread.png',
    addedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

// Mock Reminder Notifications
export const mockReminders: Reminder[] = [
  {
    id: '1',
    type: 'expiration',
    priority: 'urgent',
    title: 'Leftover Pizza Expires Today',
    description: 'Use it now or it will go to waste',
    itemId: '3',
    actionLabel: 'View Item',
  },
  {
    id: '2',
    type: 'expiration',
    priority: 'warning',
    title: 'Fresh Spinach Expires in 2 Days',
    description: 'Consider making a smoothie or salad',
    itemId: '1',
    actionLabel: 'See Recipes',
  },
  {
    id: '3',
    type: 'shopping',
    priority: 'info',
    title: 'Low on Milk',
    description: 'Add to your shopping list',
    actionLabel: 'Add to List',
  },
  {
    id: '4',
    type: 'recipe',
    priority: 'info',
    title: 'Make Chicken Stir Fry',
    description: 'You have chicken breast and bell peppers available',
    actionLabel: 'View Recipe',
  },
];

// Mock Recipe Suggestions
export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Chicken Stir Fry',
    description: 'Quick and healthy stir fry with bell peppers and chicken',
    imageUrl: '/generated/recipe-stir-fry.png',
    cookingTime: 20,
    matchingIngredients: ['Chicken Breast', 'Red Bell Peppers'],
    allIngredients: ['Chicken Breast', 'Red Bell Peppers', 'Soy Sauce', 'Garlic', 'Rice'],
    matchPercentage: 40,
  },
  {
    id: '2',
    name: 'Spinach Smoothie',
    description: 'Refreshing green smoothie packed with nutrients',
    imageUrl: '/generated/recipe-smoothie.png',
    cookingTime: 5,
    matchingIngredients: ['Fresh Spinach', 'Greek Yogurt'],
    allIngredients: ['Fresh Spinach', 'Greek Yogurt', 'Banana', 'Honey'],
    matchPercentage: 50,
  },
  {
    id: '3',
    name: 'Pizza Bread Appetizer',
    description: 'Transform leftover pizza and bread into a creative snack',
    imageUrl: '/generated/recipe-pizza-bread.png',
    cookingTime: 15,
    matchingIngredients: ['Leftover Pizza', 'Whole Wheat Bread'],
    allIngredients: ['Leftover Pizza', 'Whole Wheat Bread', 'Cheese', 'Herbs'],
    matchPercentage: 50,
  },
];

// Mock Shopping List
export const mockShoppingList: ShoppingItem[] = [
  {
    id: '1',
    name: 'Milk',
    category: 'Dairy',
    reason: 'low-stock',
    checked: false,
  },
  {
    id: '2',
    name: 'Eggs',
    category: 'Dairy',
    reason: 'ran-out',
    checked: false,
  },
  {
    id: '3',
    name: 'Fresh Vegetables',
    category: 'Produce',
    reason: 'suggested',
    checked: false,
  },
];
