const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[5005]">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Privacy policy</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              defaultValue="Privacy policy"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-4 min-h-[200px] border rounded-md"
              defaultValue="hey i am privacy policy updated"
            />
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;