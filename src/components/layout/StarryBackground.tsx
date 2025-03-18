
const StarryBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#010a1e]">
      {/* First layer - original starry background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/b32c71e2-c5d5-4022-9841-570dcfc46f40.png")',
          opacity: 0.9
        }}
      />
      
      {/* Second layer - new top image */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40vh] bg-cover bg-center z-10" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fe50b33c-cf49-4f0c-bc11-b7ff8a8d4fd3.png")',
          opacity: 0.9
        }}
      />
      
      {/* Gradient overlay to blend images */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010a1e]/80 to-[#010a1e] z-20" />
    </div>
  );
};

export default StarryBackground;
