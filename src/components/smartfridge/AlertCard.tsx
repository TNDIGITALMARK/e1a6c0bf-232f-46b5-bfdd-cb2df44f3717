import { Reminder } from '@/lib/types';
import { AlertCircle, Bell, Lightbulb } from 'lucide-react';

interface AlertCardProps {
  reminder: Reminder;
  onAction?: () => void;
}

export function AlertCard({ reminder, onAction }: AlertCardProps) {
  const getIcon = () => {
    switch (reminder.type) {
      case 'expiration':
        return <AlertCircle className="w-5 h-5" />;
      case 'shopping':
        return <Bell className="w-5 h-5" />;
      case 'recipe':
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  const getColorClasses = () => {
    switch (reminder.priority) {
      case 'urgent':
        return 'bg-red-50 border-red-200 text-red-900';
      case 'warning':
        return 'bg-amber-50 border-amber-200 text-amber-900';
      case 'info':
        return 'bg-emerald-50 border-emerald-200 text-emerald-900';
    }
  };

  const getIconColor = () => {
    switch (reminder.priority) {
      case 'urgent':
        return 'text-red-600';
      case 'warning':
        return 'text-amber-600';
      case 'info':
        return 'text-emerald-600';
    }
  };

  const getButtonColor = () => {
    switch (reminder.priority) {
      case 'urgent':
        return 'bg-red-600 hover:bg-red-700';
      case 'warning':
        return 'bg-amber-600 hover:bg-amber-700';
      case 'info':
        return 'bg-emerald-600 hover:bg-emerald-700';
    }
  };

  return (
    <div className={`rounded-xl border-2 p-4 ${getColorClasses()}`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 ${getIconColor()}`}>
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1">
            {reminder.title}
          </h3>
          <p className="text-sm opacity-90 mb-3">
            {reminder.description}
          </p>
          {reminder.actionLabel && (
            <button
              onClick={onAction}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors ${getButtonColor()}`}
            >
              {reminder.actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
