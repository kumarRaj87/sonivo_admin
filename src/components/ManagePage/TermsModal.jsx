const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[6500]">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Terms & Conditions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="p-4">
        <div className="relative group mb-4">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
             Title
            </div>
            <input
              type="text"
              value={""}
              className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder="Terms"
            />
          </div>
          <div className="relative group mb-4">
            <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
             Content
            </div>
            <textarea
              type="text"
              value={""}
              className="w-full pl-3 min-h-[200px] text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
              placeholder="Terms page updated"
            />
          </div>
          <button className="w-full bg-primary-400 text-white py-2 rounded-md hover:bg-primary-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;