// SmartFridge Type Definitions

export type FreshnesStatus = 'fresh' | 'expiring-soon' | 'expired';
export type AlertPriority = 'urgent' | 'warning' | 'info';

export interface FridgeItem {
  id: string;
  name: string;
  category: string;
  quantity: string;
  expiresIn: number; // days
  status: FreshnesStatus;
  imageUrl?: string;
  addedDate: Date;
}

export interface Reminder {
  id: string;
  type: 'expiration' | 'shopping' | 'recipe';
  priority: AlertPriority;
  title: string;
  description: string;
  itemId?: string;
  actionLabel?: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookingTime: number; // minutes
  matchingIngredients: string[];
  allIngredients: string[];
  matchPercentage: number;
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  reason: 'ran-out' | 'low-stock' | 'suggested';
  checked: boolean;
}
