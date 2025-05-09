import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BASE_URL = 'https://vokal-api.oyelabs.com';

const CreatePlanModal = ({ onClose, fetchPlans }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    is_trial: 0,
    price: '',
    price_crossed: '',
    short_des: '',
    dialer: 0,
    call_broadcast: 0,
    messaging: 0,
    agent_access: 0,
    phonebook_limit: '100',
    device_limit: '1',
    trial_days: '30',
    interval: 'month',
    interval_count: 1,
    currency: 'INR'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(`${BASE_URL}/plan/add_plan`, {
        title: formData.title,
        is_trial: Number(formData.is_trial),
        price: formData.price,
        price_crossed: formData.price_crossed,
        short_des: formData.short_des,
        dialer: Number(formData.dialer),
        call_broadcast: Number(formData.call_broadcast),
        messaging: Number(formData.messaging),
        agent_access: Number(formData.agent_access),
        phonebook_limit: formData.phonebook_limit,
        device_limit: formData.device_limit,
        trial_days: formData.trial_days,
        interval: formData.interval,
        interval_count: Number(formData.interval_count),
        currency: formData.currency
      }, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': token
        }
      });

      if (response.data.success) {
        await fetchPlans();
        onClose();
        toast.success('Plan created successfully');
      } else {
        toast.error(response.data.message || 'Failed to create plan');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error creating plan');
      console.error('Error creating plan:', err);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleDaysChange = (days) => {
    let interval = 'month';
    let intervalCount = 1;

    if (days === 7) {
      interval = 'week';
    } else if (days === 1) {
      interval = 'day';
    } else if (days === 365) {
      interval = 'year';
    } else if (days % 30 === 0) {
      interval = 'month';
      intervalCount = days / 30;
    } else {
      interval = 'day';
      intervalCount = days;
    }

    setFormData(prev => ({
      ...prev,
      trial_days: days.toString(),
      interval: interval,
      interval_count: intervalCount
    }));
  };

  const handleToggle = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field] === 1 ? 0 : 1
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[6500]">
      <div className="bg-background rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Create plan</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="rounded-b-2xl p-6 gap-4 w-full flex flex-col">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Title
            </div>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Is trial?</span>
            <button
              type="button"
              onClick={() => handleToggle('is_trial')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.is_trial === 1 ? 'bg-primary-400' : 'bg-gray-200'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.is_trial === 1 ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Price
              </div>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
                min="0"
                step="0.01"
              />
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Currency
              </div>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Price strike
              </div>
              <input
                type="number"
                value={formData.price_crossed}
                onChange={(e) => setFormData({ ...formData, price_crossed: e.target.value })}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Short description
            </div>
            <textarea
              value={formData.short_des}
              onChange={(e) => setFormData({ ...formData, short_des: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              rows="3"
              required
            />
          </div>

          <div className="space-y-4">
            {[
              { label: 'Dialer', field: 'dialer' },
              { label: 'Call Broadcast', field: 'call_broadcast' },
              { label: 'Messaging', field: 'messaging' },
              { label: 'Agent access', field: 'agent_access' }
            ].map(({ label, field }) => (
              <div key={field} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                <button
                  type="button"
                  onClick={() => handleToggle(field)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData[field] === 1 ? 'bg-primary-400' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData[field] === 1 ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Phonebook limit
            </div>
            <input
              type="text"
              value={formData.phonebook_limit}
              onChange={(e) => setFormData({ ...formData, phonebook_limit: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Device limit
            </div>
            <input
              type="text"
              value={formData.device_limit}
              onChange={(e) => setFormData({ ...formData, device_limit: e.target.value })}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
              Trial days
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.trial_days}
                onChange={(e) => handleDaysChange(Number(e.target.value))}
                className="flex-1 pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                min="1"
                required
              />
              <span className="text-primary-400">
                {formData.interval_count} {formData.interval}(s)
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Common values: 7 (week), 30 (month), 365 (year)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Interval
              </div>
              <select
                value={formData.interval}
                onChange={(e) => setFormData({ ...formData, interval: e.target.value })}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                required
              >
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="week">Week</option>
                <option value="day">Day</option>
              </select>
            </div>
            <div className="relative group">
              <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                Interval Count
              </div>
              <input
                type="number"
                value={formData.interval_count}
                onChange={(e) => setFormData({ ...formData, interval_count: e.target.value })}
                className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                min="1"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlanModal;