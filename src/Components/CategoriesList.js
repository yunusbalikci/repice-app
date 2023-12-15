import { motion } from "framer-motion"

const containerVariants = {
    hidden: {
        x: "100vw",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

export default function CategoriesList() {
    const contents = [
        { title: 'TATLI', chef: '', imageUrl: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2023/04/sutlu-soguk-kadayif-yemekcom.jpg' },
        { title: 'SULU YEMEK', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mnresize/940/940/uploads/2016/08/sebzeli-kofte-sunum-yemekcom.jpg' },
        { title: 'ARA SICAK', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/mantar-graten-onecikan.jpg' },
        { title: 'ÇORBALAR', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/mercimek-corbasi-yemekcom.jpg' },
        { title: 'BÖREKLER', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/12/patatesli-gul-boregi-one-cikan.jpg' },
        { title: 'Salatalar', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/gavurdagi-salatasi-yeni-one-cikan.jpg' },
        { title: 'ZEYTİNYAĞLILAR', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/06/mini-imam-bayildi-tarifi.jpg' },
        { title: 'YÖRESEL YEMEKLER', chef: 'Recipe by Mario', imageUrl: 'https://cdn.yeniakit.com.tr/images/news/625/turkiyenin-hangi-ilinde-ne-yenilir-yoresel-yemekler-ve-sehirleri-hangi-sehirlerde-hangi-yemekler-yenir-turkiyenin-lezzet-haritasi-h1566057182-448951.jpeg' },


        // Diğer içerikler buraya eklenebilir
      ];
    return(
        <motion.div className="bg-zinc-100 ml-5 mt-14 w-full h-full lg:mt-24 flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{type: "spring", delay: 0.2}}
        >
            {contents.map((content, index) => (
                        <div key={index} className="mt-4 ml-10 rounded overflow-hidden w-64 h-64 hover:scale-75 duration-200 md:w-80 md:h-80 mb-10 shadow-md bg-white">
                            <img src={content.imageUrl} className="w-full h-40 md:h-60 sm:h-48 object-covermb-10 " alt={`Content ${index + 1}`} />
                        <div className="mt-3 text-center">
                            <span className="font-open uppercase font-bold">{content.title}</span><br />
                            <span className="font-open">{content.chef}</span>
                        </div>
                        </div>
      ))}
        </motion.div>
    )
}