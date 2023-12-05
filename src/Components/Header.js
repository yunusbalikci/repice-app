import React,{useState} from "react"
import LoginModal from "./LoginModal";
import icon from '../newicon.png'


export default function Header(){

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

    

    return(
        <div>
            <div className="bg-repice-red">
            <header className="fixed top-0 w-full z-50  bg-repice-red py-2 lg:py-4  uppercase">
                <div className="container mx-auto">
                <div className="flex items-center  justify-between space-x-4 lg:space-x-8">
                    <a to ="/"  className="md:pl-0 text-3xl lg:text-6xl font-bold font-open  text-repice-orange2">YEMEK</a>
                    <div className="block md:hidden pr-4">
                        <div className="space-y-1 cursor-pointer">
                            <div className="bg-orange-400 w-8 h-1 rounded-full"></div>
                            <div className="bg-orange-400 w-8 h-1 rounded-full"></div>
                            <div className="bg-orange-400 w-8 h-1 rounded-full"></div>
                        </div>
                    </div>

                <nav className="hidden md:flex text-white justify-between flex-1">
                    <div className="flex items-center font-bold text-sm lg:text-lg lg:space-x-8">
                        
                        <form>   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black font-open">Ara</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-yellow-300 rounded-lg bg-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:border-2 focus:border-yellow-500 dark:bg-repice-gray dark:border-yellow-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Tarif veya yazar ara..." required/>
                                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-repice-yellow hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-repice-yellow dark:hover:bg-yellow-500 dark:focus:ring-yellow-800 transition duration-200">Ara</button>
                            </div>
                        </form>

                        <a href="/" className="hover:text-slate-200 transition duration-200 font-open">tarifler</a>
                        <a href="/" className="hover:text-slate-200 transition duration-200 font-open">kategoriler</a>
                        <a href="/" className="hover:text-slate-200 transition duration-200 font-open">favoriler</a>
                        
                        <div onClick={handleLoginClick}  className="flex border rounded-md px-1 py-1 cursor-pointer">
                            
                            <img src="https://static.thenounproject.com/png/4851855-200.png" className="w-10 h-10 mt-1 rounded-full"></img>
                            <p className="ml-2 font-open">Giriş yap
                            <p className="text-xs opacity-75">Veya kayıt ol</p>
                            </p>
                            
                        </div>
                        
                        
                        

                    </div>

                </nav>
                </div>
                </div>
            </header>    
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />        

        </div>
    )
}