import { useState } from 'react';
import { FaSave } from "react-icons/fa";

function WebConfig() {
    const [allowCustomHome, setAllowCustomHome] = useState(false);
    const [formData, setFormData] = useState({
        sonivoAi: 'Sonivo ai',
        currencyCode: 'USD',
        currencySymbol: '$',
        exchangeRate: '1',
        seoDescription: 'Sonivo - AI Call Center solution with SIP integration, AI call assistant, and advanced call dialer. Build seamless call flows with our drag-and-drop flow builder, and boost customer satisfaction with real-time analytics. Streamline your call center operations and elevate customer service with Sonivo.',
        frontPageVideo: 'https://youtu.be/HnSQxSiWaxE?si=OrM-U2z7jxXY996C',
        customHomeUrl: 'https://google.com'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div className="min-h-[50vh] bg-primary-200 w-full">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col items-start gap-4">
                        <img
                         src='https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-beauty-female-programmer-with-laptop-at-workplace-png-image_6058798.png'
                        alt=''
                        className='h-32 w-32'
                        />
                        <div className='space-y-2'>
                            <h1 className="text-2xl font-medium text-primary">Web Config</h1>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>Dashboard</span>
                                <span>•</span>
                                <span>Web Config</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-20">
                        <img
                            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop&crop=center"
                            alt="Logo"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 w-full flex flex-col">
                    <div className="flex gap-6 bg-white rounded-xl px-2 py-4 flex-col">
                        <div className='flex w-full justify-between items-center'>
                            <label className="text-sm font-medium text-primary">Allow custom home</label>
                            <button
                                type="button"
                                onClick={() => setAllowCustomHome(!allowCustomHome)}
                                className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ease-in-out ${allowCustomHome ? 'bg-primary' : 'bg-gray-200'}`}
                            >
                                <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition duration-200 ease-in-out ${allowCustomHome ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        {allowCustomHome && (
                            <div className="relative group">
                                <div className="absolute -top-2.5 left-3 bg-white px-1 
                            transition-all duration-300 
                            text-primary text-[11px]">
                                    Enter custrom home URL
                                </div>
                                <input
                                    type="url"
                                    name="customHomeUrl"
                                    value={formData.customHomeUrl}
                                    onChange={handleInputChange}
                                    className="w-full pl-4 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                                />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                                Sonivo Ai
                            </div>
                            <input
                                type="text"
                                name="sonivoAi"
                                value={formData.sonivoAi}
                                onChange={handleInputChange}
                                className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                                Currwnt Code
                            </div>
                            <input
                                type="text"
                                name="currencyCode"
                                value={formData.currencyCode}
                                onChange={handleInputChange}
                                className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                                Currency Symbol
                            </div>
                            <input
                                type="text"
                                name="currencySymbol"
                                value={formData.currencySymbol}
                                onChange={handleInputChange}
                                className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                                Exchange Rate
                            </div>
                            <input
                                type="text"
                                name="exchangeRate"
                                value={formData.exchangeRate}
                                onChange={handleInputChange}
                                className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                            SEO Description
                        </div>
                        <textarea
                            name="seoDescription"
                            value={formData.seoDescription}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 
              transition-all duration-300 
              text-primary text-[11px]">
                            Front Page Video
                        </div>
                        <input
                            type="url"
                            name="frontPageVideo"
                            value={formData.frontPageVideo}
                            onChange={handleInputChange}
                            className="w-full pl-4 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-sm bg-primary-400 text-center text-white py-2 px-4 rounded-md hover:bg-primary transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <FaSave className='text-white' size={20}/>
                        Submit
                    </button>
                </form>
        </div>
    );
}

export default WebConfig;