import Card from '@/components/Card';
import { getRecipes } from '@/library/api-call'


export default async function page() {
    const recipes = await getRecipes();

    return (
        <div className='max-w-[1300px] he mx-auto px-6 text-2xl py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                recipes.map((data, index) => {
                    return (
                        <Card key={index} id={data.id} image={data.image} title={data.name} cookTimeMinutes={data.cookTimeMinutes} prepTimeMinutes={data.prepTimeMinutes} />
                    )
                })
            }
        </div>
    )
}
