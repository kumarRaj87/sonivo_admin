import React, { useState, useEffect } from 'react';
import TestimonialForm from './TestimonialForm';
import TestimonialList from './TestimonialList';
import TestimonialSkeleton from './TestimonialSkeleton';
import { IoMdPhonePortrait } from "react-icons/io";

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([
    {
      title: "Incredible automation capabilities",
      description: "sonivo's automation features have significantly reduced our workload. The AI assistant handles repetitive queries, freeing up time for our agents to focus on critical tasks. It's been a game-changer for us!",
      name: "Elena R.",
      position: "Customer Success Lead",
      avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop",
    },
    {
      title: "Seamless CRM integration",
      description: "The seamless integration with our CRM has streamlined our workflows. Agents have instant access to customer history, making interactions more personalized and efficient.",
      name: "Jordan T.",
      position: "Sales Manager",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop",
    },
    {
      title: "Improved response time",
      description: "Since implementing sonivo, our response time has drastically improved. The AI-driven call routing ensures every call reaches the right agent, reducing wait times and improving customer satisfaction.",
      name: "Priya K.",
      position: "Support Team Lead",
      avatar: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=150&h=150&fit=crop",
    },
    {
      title: "Scalability at its best",
      description: "As our company grows, sonivo grows with us. The cloud-based infrastructure allows us to add new agents effortlessly while maintaining top-notch service quality.",
      name: "Nathan B.",
      position: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=150&h=150&fit=crop",
    },
    {
      title: "Great for remote teams",
      description: "With remote work becoming the norm, sonivo has made collaboration between our global support teams seamless. The AI assistant and call management tools ensure we never miss a customer inquiry.",
      name: "Sophia M.",
      position: "Remote Team Coordinator",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop",
    },
    {
      title: "Cost-effective solution",
      description: "sonivo has helped us cut operational costs while improving efficiency. The AI-driven insights allow us to optimize our customer interactions without increasing expenses.",
      name: "Liam D.",
      position: "Finance Director",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    },
    {
      title: "User-friendly and intuitive",
      description: "sonivo's dashboard is incredibly user-friendly. Even new team members can quickly adapt and start managing calls efficiently with minimal training.",
      name: "Ava C.",
      position: "HR & Training Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      title: "Data-driven insights",
      description: "The analytics and reporting tools in sonivo provide valuable insights into our call performance. We can now make data-driven decisions to enhance our customer service strategies.",
      name: "Ethan J.",
      position: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
    {
      title: "24/7 support without extra cost",
      description: "With sonivo, we can offer 24/7 customer support without hiring additional agents. The AI assistant efficiently handles after-hours inquiries, ensuring our customers always get help.",
      name: "Hannah W.",
      position: "Customer Experience Director",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    },
    {
      title: "Reliable and secure",
      description: "Security is a top priority for us, and sonivo ensures all our call data is encrypted and stored securely. We trust it completely for our communications.",
      name: "Oliver S.",
      position: "IT Security Manager",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, {
      ...newTestimonial,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    }]);
  };

  return (
    <div className=" ">
      <div className="mb-8 overflow-x-hidden">
        
        {/* <div className="flex items-start gap-4 w-full sm:w-auto lg:flex-col" >
          <img
            src='https://sonivo.oneoftheprojects.com/assets/payment_gateway.svg'
            alt=''
            className='h-16 w-16 sm:h-24 sm:w-24'
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Testimonial</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Testimonial</span>
            </div>
          </div>
        </div> */}


        
<div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/payment_gateway.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Testimonial</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Testimonial</span>
            </div>
          </div>
          {/* <button
            onClick={() => setIsCreateModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            Create Plan
          </button> */}
        </div>
      </div>
      </div>

      <TestimonialForm onSubmit={handleAddTestimonial} />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <TestimonialSkeleton key={i} />
          ))}
        </div>
      ) : (
        <TestimonialList testimonials={testimonials} />
      )}
    </div>
  );
};

export default Testimonial;