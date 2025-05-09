
import React from 'react';
import { Check, X, Phone, Smartphone, Clock, Trash2, Edit } from 'lucide-react';

const PlanCard = ({ plan, onEdit, onDelete }) => {
  const getIcon = (feature) => {
    return feature ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="bg-background rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-2xl">$</span>
          <h2 className="text-2xl font-semibold">{plan.title} / {plan.price}</h2>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(plan)}
            className="text-primary-400 hover:text-primary-500 flex items-center gap-2 p-2 rounded-lg border border-primary-500 hover:bg-blue-50"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onDelete(plan.id)}
            className="text-red-500 hover:text-red-700 flex items-center gap-2 p-2 rounded-lg border border-red-500 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-6">{plan.short_des}</p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          {getIcon(plan.dialer)} <span>Dialer</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.call_broadcast)} <span>Call Broadcast</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.messaging)} <span>Messaging</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.agent_access)} <span>Agent access</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.is_trial)} <span>Is trial?</span>
        </div>
      </div>

      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span>Phonebook limit: {plan.phonebook_limit}</span>
        </div>
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          <span>Device limit: {plan.device_limit}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>Plan duration: {plan.days} days</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;