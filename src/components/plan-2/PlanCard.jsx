import React from 'react';
import { Check, X, Phone, Smartphone, Clock, Trash2 } from 'lucide-react';

const PlanCard = ({ plan, onEdit, onDelete }) => {
  const getIcon = (feature) => {
    return feature ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-2xl">$</span>
          <h2 className="text-2xl font-semibold">{plan.name} / {plan.price}</h2>
        </div>
        <button 
          onClick={() => onDelete(plan.id)}
          className="text-red-500 hover:text-red-700 flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>

      <p className="text-gray-600 mb-6">{plan.description}</p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          {getIcon(plan.dialer)} <span>Dialer</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.callBroadcast)} <span>Call Broadcast</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.messaging)} <span>Messaging</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.agentAccess)} <span>Agent access</span>
        </div>
        <div className="flex items-center gap-2">
          {getIcon(plan.isTrial)} <span>Is trial?</span>
        </div>
      </div>

      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span>Phonebook limit: {plan.phonebookLimit}</span>
        </div>
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          <span>Device limit: {plan.deviceLimit}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>Plan duration: {plan.planDuration} days</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;