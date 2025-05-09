import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Users, DollarSign, FileText } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from './loader/Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.get(
        'https://vokal-api.oyelabs.com/admin/get_dashboard_for_user',
        {
          headers: {
            'accept': 'application/json',
            'access-token': token
          }
        }
      );

      if (response.data.success) {
        setDashboardData(response.data.data);
      } else {
        throw new Error(response.data.message || 'Failed to fetch dashboard data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const transformData = (data) => {
    // Create a map for each month's data for quick lookup
    const paidMap = {};
    const unpaidMap = {};
    const ordersMap = {};

    data.paid.forEach(item => {
      paidMap[item.month] = item.numberOfSignups;
    });

    data.unpaid.forEach(item => {
      unpaidMap[item.month] = item.numberOfSignups;
    });

    data.orders.forEach(item => {
      ordersMap[item.month] = item.numberOfOders;
    });

    // Create arrays in the order of months array
    const paidData = months.map(month => paidMap[month] || 0);
    const unpaidData = months.map(month => unpaidMap[month] || 0);
    const ordersData = months.map(month => ordersMap[month] || 0);

    return {
      labels: months,
      datasets: [
        {
          label: 'Paid users',
          data: paidData,
          borderColor: '#3A7D90',
          backgroundColor: 'rgba(58, 125, 144, 0.1)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Unpaid users',
          data: unpaidData,
          borderColor: 'rgb(46, 74, 98)',
          backgroundColor: 'rgba(46, 74, 98, 0.1)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Orders',
          data: ordersData,
          borderColor: 'rgb(76, 175, 80)',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          fill: true,
          tension: 0.4,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 3,
      },
    },
  };

  const stats = [
    {
      title: 'Total Users',
      value: dashboardData?.userLength || '0',
      icon: Users,
    },
    {
      title: 'Total orders',
      value: dashboardData?.orderLength || '0',
      icon: DollarSign,
    },
    {
      title: 'Total leads',
      value: '1',
      icon: FileText,
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="min-h-[50vh] bg-primary-200 p-2 w-full flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
      <div className="bg-background rounded-lg p-6 w-full lg:h-[80vh] md:h-[50vh] sm:h-[40vh] h-[40vh]">
        {dashboardData && <Line data={transformData(dashboardData)} options={options} />}
      </div>
      <div className="w-full mt-5 rounded-lg bg-background p-4 gap-2 flex-col flex justify-start items-start">
        {stats.map((stat, index) => (
          <div key={index} className="w-full justify-between items-center flex border-primary-200 border-b-[1px]">
            <div className="flex items-center gap-4 w-full justify-start">
              <stat.icon className="w-10 h-10 text-primary-300" />
              <h3 className="text-sm font-semibold text-primary-300 w-full">{stat.title}</h3>
              <div className='w-full flex justify-end items-center'>
                <p className="text-lg font-semibold text-primary-300">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;