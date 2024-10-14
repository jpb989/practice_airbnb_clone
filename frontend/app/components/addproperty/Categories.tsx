import Image from "next/image";
interface CategoriesProp {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProp> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === "Amazing views" ? "border-gray-800" : "border-white hover:border-gray-200"} opacity-60 hover:opacity-100`}
                onClick={() => setCategory("Amazing views")}
            >
                <Image
                    src="/icn_views.jpg"
                    alt="Amazing views"
                    width={25}
                    height={25}
                />
                <span className="text-xs">Amazing Views</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === "Amazing Pools" ? "border-gray-800" : "border-white hover:border-gray-200"} opacity-60 hover:opacity-100`}
                onClick={() => setCategory("Amazing Pools")}
            >
                <Image
                    src="/icn_pools.jpg"
                    alt="Amazing pools"
                    width={25}
                    height={25}
                />
                <span className="text-xs">Amazing Pools</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === "Farms" ? "border-gray-800" : "border-white hover:border-gray-200"} opacity-60 hover:opacity-100`}
                onClick={() => setCategory("Farms")}
            >
                <Image src="/icn_farms.jpg" alt="Farms" width={25} height={25} />
                <span className="text-xs">Farms</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === "Countryside" ? "border-gray-800" : "border-white hover:border-gray-200"} opacity-60 hover:opacity-100`}
                onClick={() => setCategory("Countryside")}
            >
                <Image
                    src="/icn_countryside.jpg"
                    alt="Countryside"
                    width={25}
                    height={25}
                />
                <span className="text-xs">Countryside</span>
            </div>
            </div>
        </>
    )
}

export default Categories;