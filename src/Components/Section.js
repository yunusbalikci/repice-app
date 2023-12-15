import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Section(){


    const contents = [
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: 'Beyti', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/uploads/2023/10/saray-koftesi-yemekcom.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: 'Beyti', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/uploads/2023/10/saray-koftesi-yemekcom.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },


        // Diğer içerikler buraya eklenebilir
      ];

      const carousel = [
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: 'Beyti', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/uploads/2023/10/saray-koftesi-yemekcom.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        { title: 'Beyti', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/uploads/2023/10/saray-koftesi-yemekcom.jpg' },
        { title: '5 bean chilli', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/620/388/uploads/2017/03/yaglama-yeni-one-cikan.jpg' },
        

        // Diğer içerikler buraya eklenebilir
      ];


    return(
        <div className="bg-zinc-100">
            <div className="xl:container mx-auto py-10 pb-8 bg-zinc-100">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                            <h1 class="text-2xl md:text-4xl font-bold mt-10 xl:mt-3 mb-5">Deftere en çok eklenen <br />Yemekler</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>
                        </div>

                        <div className="w-96 mr-20 md:w-1/2 mt-12 md:mt-32 pl-20 rounded-md">
                            <Carousel
                            autoPlay infiniteLoop  
                            interval={5000}
                            >
                                {carousel.map((content,index) =>(
                                    <div key={index} className="rounded shadow">
                                        <img className="rounded-md" src={content.imageUrl}  alt={`Content ${index + 1}`} />

                                    </div>
                                ))}
                            </Carousel>
                        </div>     

                    </div>
                    
                    <h1 className="text-center md:opacity-0 md:ml-16  md:text-left font-bold text-3xl mt-5 uppercase font-open -mb-20">trend yemekler</h1>
                    <div className="mt-20">
                        <div className="flex">
                            <h1 className="opacity-0 md:opacity-100 ml-20 text-3xl font-bold mt-3">TREND YEMEKLER</h1>
                            <div className="hidden md:flex md:text-right flex-grow space-x-2 md:-space-x-96 text-md  md:text-lg uppercase whitespace-nowrap font-bold font-open">
                                <p className="mt-4 flex-grow text-center lg:text-right hover:text-red-600  cursor-pointer">Bugün</p>
                                <p className="mt-4 flex-grow text-center lg:text-right  cursor-pointer">Bu hafta</p>
                                <p className="mt-4 flex-grow text-center lg:text-right  cursor-pointer">Bu ay</p>
                                <p className="mt-4 flex-grow text-center lg:text-right  cursor-pointer">Bu yıl</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center py-3 space-y-4 space-x-10 text-center">
                    {contents.map((content, index) => (
                        <div key={index} className="mt-4 ml-8 rounded overflow-hidden w-64 h-64 md:w-80 md:h-80 shadow-md bg-white">
                            <img src={content.imageUrl} className="w-full h-40 md:h-60 sm:h-48 object-cover" alt={`Content ${index + 1}`} />
                        <div className="mt-3">
                            <span className="font-open uppercase font-bold">{content.title}</span><br />
                            <span className="font-open">{content.chef}</span>
                        </div>
                        </div>
      ))}
      <p className="text-gray-500 opacity-80">Designed by https://github.com/yunusbalikci</p>
                    </div>

            </div>
             
        </div>
    )
}