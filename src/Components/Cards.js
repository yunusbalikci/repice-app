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
export default function Cards(){
    return(
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{type: "spring", delay: 0.2}}
        className="bg-zinc-100 font-open w-full h-full md:mt-24">
            <h1 className="text-3xl text-center py-5  font-bold mb-3 mt-14 text-repice-orange2">Favori Yemekler</h1>

            <div className="container w-full h-full">
                    <div className="lg:flex space-y-8 lg:space-x-8">
                    <div className="w-80 h-80 mx-auto  lg:w-96 lg:h-96 bg-white  rounded-xl shadow-lg">
                        <div className="text-center items-center">
                        <h2 className="mt-5 pt-3 font-bold uppercase font-open">Yaprak Sarma</h2>
                        <img className="mt-5 rounded mx-auto w-80 h-auto" src="https://image.milimaj.com/i/milliyet/75/0x410/5c8dcd3845d2a09e009fb6c3.jpg"></img>
                        <h3 className="font-open uppercase mt-3">Yazar Adı</h3>
                        </div>
                    </div>
                    <div className="w-80 h-80 mx-auto  lg:w-96 lg:h-96 bg-white rounded-xl shadow-lg">
                        <div className="text-center items-center">
                        <h2 className="pt-3 font-bold uppercase font-open">Etli Nohut</h2>
                        <img className="mt-5 rounded mx-auto w-80 h-auto" src="https://cdn.yemek.com/mnresize/940/940/uploads/2016/08/sebzeli-kofte-sunum-yemekcom.jpg"></img>
                        <h3 className="font-open uppercase mt-3">Yazar Adı</h3>
                        </div>
                    </div>
                    <div className="w-80 h-80 mx-auto  lg:w-96 lg:h-96 bg-white rounded-xl shadow-lg">
                        <div className="text-center items-center">
                        <h2 className="mt-5 pt-3 font-bold uppercase font-open">Kaşarlı Mantar</h2>
                        <img className="mt-5 rounded mx-auto w-80 h-auto" src="https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/mantar-graten-onecikan.jpg"></img>
                        <h3 className="font-open uppercase mt-3">Yazar Adı</h3>
                        </div>
                    </div>
                    </div>

                    
            </div>
        </motion.div>
    )
}