import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import {
  Users,
  FileText,
  CreditCard,
  Users2,
  ShoppingCart,
  MessageSquare,
  FileEdit,
  MessageCircle,
  HelpCircle,
  Palette,
  Settings,
  Mail,
  Languages,
  Bandage
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { divider: true, label: 'Useful' },
    { path: '/dashboard', icon: MdSpaceDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/plan', icon: FileText, label: 'Plan' },
    { path: '/payment-gateway', icon: CreditCard, label: 'Payment Gateway' },
    { divider: true, label: 'Brand' },
    { path: '/brand', icon: Bandage, label: 'Brand' },
    { divider: true, label: 'Partnerships' },
    { path: '/front-partner', icon: Users2, label: 'Front Partner' },
    { path: '/orders', icon: ShoppingCart, label: 'Orders' },
    { path: '/leads', icon: MessageSquare, label: 'Leads' },
   
    { divider: true, label: 'Content Management' },
    { path: '/manage-page', icon: FileEdit, label: 'Manage Page' },
    { path: '/testimonial', icon: MessageCircle, label: 'Testimonial' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
    { divider: true, label: 'Appearance & Settings' },
    { path: '/web-theme', icon: Palette, label: 'Web theme' },
    { path: '/web-config', icon: Settings, label: 'Web Config' },
    { path: '/smtp-settings', icon: Mail, label: 'SMTP Settings' },
    { path: '/web-translation', icon: Languages, label: 'Web Translation' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[5005] lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed inset-y-0 left-0 w-60 bg-white transform transition-transform duration-300 ease-in-out z-[5500]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="py-5 flex items-center px-4">
          <Link to="/dashboard" className="flex items-center space-x-2 pl-2">
            <span className="text-2xl font-semibold text-[#1C2833]">Vokal</span>
          </Link>
        </div>

        <nav className="px-3 h-[calc(100vh-5rem)] overflow-y-auto pb-2">
          {menuItems.map((item, index) => (
            item.divider ? (
              <div key={index} className="mt-5 mb-2">
                <p className="px-1 text-xs font-medium text-gray-500 tracking-wider">
                  {item.label}
                </p>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleSidebar}
                className={`flex items-center space-x-3 px-3 py-1.5 rounded-md mb-1 text-sm ${
                  isActive(item.path)
                    ? 'bg-[#F7FAFC] text-[#1C2833] font-medium'
                    : 'text-gray-800 hover:bg-[#F7FAFC]'
                }`}
              >
                <item.icon className={`h-[18px] w-[18px] ${
                  isActive(item.path) ? 'text-[#1C2833]' : 'text-gray-600'
                }`} />
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;