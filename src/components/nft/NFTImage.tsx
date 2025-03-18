
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface NFTImageProps {
  image: string;
  name: string;
}

export const NFTImage = ({ image, name }: NFTImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image for ${name}`);
  };

  return (
    <div className="w-full">
      {imageError ? (
        <div className="aspect-square rounded-xl flex items-center justify-center bg-[#1A1F2C] text-white/50">
          <ImageIcon className="w-10 h-10" />
        </div>
      ) : (
        <img
          src={image}
          alt={name}
          className="aspect-square w-full h-full object-cover rounded-xl"
          onError={handleImageError}
          loading="eager"
        />
      )}
    </div>
  );
};
