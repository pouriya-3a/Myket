const Loading = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#0071f0] rounded-full animate-bounce" style={{ animationDelay: '-0.32s' }}></div>
          <div className="w-3 h-3 bg-[#0071f0] rounded-full animate-bounce" style={{ animationDelay: '-0.16s' }}></div>
          <div className="w-3 h-3 bg-[#0071f0] rounded-full animate-bounce"></div>
        </div>
        <p className="text-[#0071f0] font-medium">Loading...</p>
      </div>
    );
  };
  
  export default Loading;