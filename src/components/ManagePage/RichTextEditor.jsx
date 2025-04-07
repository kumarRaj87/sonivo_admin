const RichTextEditor = () => {
  return (
    <div className="border rounded-md">
      <div className="border-b p-2 flex gap-2">
        <select className="border rounded px-2 py-1">
          <option>Normal</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
        </select>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          <strong>B</strong>
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          <em>I</em>
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          <u>U</u>
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          🔗
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          •
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          1.
        </button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">
          Tx
        </button>
      </div>
      <textarea
        className="w-full p-4 min-h-[200px] outline-none"
        placeholder="Enter your content here..."
      />
    </div>
  );
};

export default RichTextEditor;