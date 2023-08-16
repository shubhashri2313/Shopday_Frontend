import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 ">
      <div className="h-[13rem] w-[10rem]mx-3  ">
        <img
          //object cover so that object won't get shrinked
          className="object-cover object-top w-full h-full"
          //src="https://assets.ajio.com/medias/sys_master/root/20230607/pIsd/647fdb0ed55b7d0c63541d63/-473Wx593H-466245818-black-MODEL.jpg"
          src={product.imageUrl}
          alt=" "
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
         {product.title}
          </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
