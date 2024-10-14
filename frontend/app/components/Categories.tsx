import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_views.jpg"
          alt="Amazing views"
          width={25}
          height={25}
        />
        <span className="text-xs">Amazing Views</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_pools.jpg"
          alt="Amazing pools"
          width={25}
          height={25}
        />
        <span className="text-xs">Amazing Pools</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src="/icn_farms.jpg" alt="Farms" width={25} height={25} />
        <span className="text-xs">Farms</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_countryside.jpg"
          alt="Countryside"
          width={25}
          height={25}
        />
        <span className="text-xs">Countryside</span>
      </div>
    </div>
  );
};

export default Categories;
