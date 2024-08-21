import Image from "next/image";
import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
    return (
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <Link href={'/recipe-list'}> Go back </Link>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:sticky top-10 sm:flex gap-2">
                    <Image
                        src={getRecipeDetails?.image}
                        alt={getRecipeDetails?.name} width={1000} height={1000} className="w-4/5 rounded object-cover" />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-750">
                        {getRecipeDetails?.name}
                    </h2>
                    <div className='flex flex-wrap gap-4 mt-5'>
                    <p className="text-2xl text-gray-700">
                        {getRecipeDetails?.mealType[0]}
                    </p>
                </div>
                <div className="mt-5">
                    <p className="text-xl text-gray-800">{getRecipeDetails?.cusine}</p>
                </div>
                <div className="mt-5">
                    <p className="text-lg font-bold text-gray-700">{getRecipeDetails?.ingredients}</p>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                        {getRecipeDetails?.ingredients.map((item) =>(
                            <li key={item.id}>{item}</li>
                        ))}
                        
                    </ul>
                </div>
            </div>
                </div>
                
        </div>
    )
}
