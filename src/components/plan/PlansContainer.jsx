import React, { useState, useEffect } from 'react';
import PlanCard from './PlanCard';
import PlanCardSkeleton from './PlanCardSkeleton';
import EditPlanModal from './EditPlanModal';

const PlansContainer = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPlan, setEditingPlan] = useState(null);

  // Simulated data
  const mockPlans = [
    {
      id: 1,
      name: 'Trial',
      price: 'NA',
      description: 'Experience all premium features with our 7-day free trial, no commitment required. Dive into our tools and see how they elevate your workflow!',
      dialer: true,
      callBroadcast: true,
      messaging: true,
      agentAccess: true,
      isTrial: true,
      phonebookLimit: 1000,
      deviceLimit: 1,
      planDuration: 7
    },
    {
      id: 2,
      name: 'Gold',
      price: '99',
      description: 'Unlock exclusive access with the Gold Plan, featuring advanced tools, priority support, and extended usage limits. Perfect for growing teams aiming to boost productivity and efficiency!',
      dialer: true,
      callBroadcast: false,
      messaging: true,
      agentAccess: true,
      isTrial: false,
      phonebookLimit: 10000,
      deviceLimit: 5,
      planDuration: 30
    },
    {
      id: 3,
      name: 'Platinum',
      price: '199',
      description: 'Gain unlimited access to all premium features with the Platinum Plan, including personalized support and priority upgrades. Ideal for power users and enterprises seeking maximum performance and flexibility!',
      dialer: true,
      callBroadcast: true,
      messaging: true,
      agentAccess: true,
      isTrial: false,
      phonebookLimit: 9968,
      deviceLimit: 1,
      planDuration: 30
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPlans(mockPlans);
      setLoading(false);
    }, 500);
  }, []);

  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  const handleSave = (updatedPlan) => {
    setPlans(plans.map(p => p.id === updatedPlan.id ? updatedPlan : p));
    setEditingPlan(null);
  };

  const handleDelete = (planId) => {
    setPlans(plans.filter(p => p.id !== planId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Plans</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Create Plan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          [...Array(3)].map((_, i) => <PlanCardSkeleton key={i} />)
        ) : (
          plans.map(plan => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onEdit={() => handleEdit(plan)}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {editingPlan && (
        <EditPlanModal
          plan={editingPlan}
          onClose={() => setEditingPlan(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default PlansContainer;