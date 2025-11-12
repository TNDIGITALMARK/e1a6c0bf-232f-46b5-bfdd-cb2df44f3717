import { FridgeItem } from '@/lib/types';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface FoodItemCardProps {
  item: FridgeItem;
  onClick?: () => void;
}

export function FoodItemCard({ item, onClick }: FoodItemCardProps) {
  const getStatusColor = () => {
    switch (item.status) {
      case 'fresh':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'expiring-soon':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'expired':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = () => {
    switch (item.status) {
      case 'fresh':
        return <CheckCircle className="w-4 h-4" />;
      case 'expiring-soon':
        return <AlertCircle className="w-4 h-4" />;
      case 'expired':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getExpirationText = () => {
    if (item.expiresIn === 0) return 'Expires today';
    if (item.expiresIn === 1) return 'Expires tomorrow';
    if (item.expiresIn < 0) return `Expired ${Math.abs(item.expiresIn)} days ago`;
    return `${item.expiresIn} days left`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
    >
      {/* Food Image */}
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={item.imageUrl || '/placeholder.svg'}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-base text-gray-900 mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          {item.quantity}
        </p>

        {/* Expiration Badge */}
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusColor()}`}>
          {getStatusIcon()}
          <span>{getExpirationText()}</span>
        </div>
      </div>
    </div>
  );
}
