import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import PlanCard from "./PlanCard";
import EditPlanModal from "./EditPlanModal";
import CreatePlanModal from "./CreatePlanModal";
import { IoMdPhonePortrait } from "react-icons/io";
import Loader from "../loader/Loader";

const BASE_URL = 'https://vokal-api.oyelabs.com';

const PlansContainer = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPlan, setEditingPlan] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlans = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${BASE_URL}/plan/get_plans`, {
        headers: {
          'Accept': 'application/json',
          'access-token': token
        }
      });
      const data = await response.json();

      if (data.success) {
        setPlans(data.data || []);
      } else {
        setError(data.message || 'Failed to fetch plans');
        toast.error(data.message || 'Failed to fetch plans');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch plans. Please try again later.';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Error fetching plans:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  const handleDelete = async (planId) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${BASE_URL}/plan/del_plan/${planId}`, {
        method: 'DELETE',
        headers: {
          'access-token': token
        }
      });
      const data = await response.json();

      if (data.success) {
        await fetchPlans();
        toast.success('Plan deleted successfully');
      } else {
        toast.error('Failed to delete plan');
      }
    } catch (err) {
      toast.error(err.message || 'Error deleting plan');
      console.error('Error deleting plan:', err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error && !plans.length) {
    return (
      <div className="min-h-[50vh] bg-primary-200 p-4 md:p-6 w-full flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src="https://sonivo.oneoftheprojects.com/assets/plan.svg"
            alt=""
            className="h-24 w-24"
          />
        </div>
        <div className="w-full justify-between items-center flex">
          <div className="space-y-2 flex flex-col">
            <h1 className="text-2xl font-medium text-primary">Call Force</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Call Force</span>
            </div>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className="text-background" size={20} />
            Create Plan
          </button>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center py-4 mb-4">
          {error}
        </div>
      )}
      {plans.length > 0 ?
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onEdit={() => handleEdit(plan)}
              onDelete={handleDelete}
            />
          ))}
        </div>
        : <div className="min-h-[50vh] bg-primary-200 p-4 md:p-6 w-full flex items-center justify-center">
          <div className="bg-primary-200 border border-primary-400 text-primary-500 px-4 py-3 rounded">
            No plans available at the moment.
          </div>
        </div>
      }

      {editingPlan && (
        <EditPlanModal
          plan={editingPlan}
          onClose={() => setEditingPlan(null)}
          fetchPlans={fetchPlans}
        />
      )}

      {isCreateModalOpen && (
        <CreatePlanModal
          onClose={() => setIsCreateModalOpen(false)}
          fetchPlans={fetchPlans}
        />
      )}
    </div>
  );
};

export default PlansContainer;