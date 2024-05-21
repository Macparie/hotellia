import HotelsCard from '@/components/HotelsCard'
import Hotels from '@/hotels.json'

const hotelsPage = () => {
  return (
    <div>
       <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto">
        {Hotels.length === 0 ? (<p>No Hotels Found</p>) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Hotels.map((Hotels) =>(
            
              <HotelsCard key={Hotels._id} Hotels={Hotels} />
            
          ))}
          </div>
        )}
      
      </div>
      </section>
      

    </div>
  )
}

export default hotelsPage