import Hotels from '@/hotels.json';
import HotelsCard from './HotelsCard';
import Link from 'next/link';

const HomeHotels = () => {
    const recentHotels = Hotels.slice(0, 3);
    return (
    <>
    <section className="px-4 py-6">
    <div className="container-xl lg:container m-auto">
    <h2 className='text-3xl font-bold text-pink-500 mb-6 text-center' >
    Recent Hotels </h2>
      {Hotels.length === 0 ? (<p>No Hotels Found</p>) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
        {recentHotels.map((Hotels) =>(
            <HotelsCard key={Hotels._id} Hotels={Hotels} />
          
        ))}
        </div>
      )}
    
    </div>
    </section>
    <section className='m-auto max-w-lg my-6 px-6'>
      <Link href='/hotels' 
      className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>View all Hotels</Link>

    </section>
    </>
    )
    ;
}
 
export default HomeHotels;