import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={mainImage} 
          alt={productName}
          className="w-full h-[400px] object-cover object-center"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-md">
          Available
        </div>
      </div>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="flex p-4 gap-2 ">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                mainImage === image ? "border-green-500 shadow-md" : "border-transparent"
              }`}
            >
              <img src={image} alt={`${productName} view ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};