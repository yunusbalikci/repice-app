import { Motion } from 'react-motion';

export default function SignUp(){
    return(
        <div className='font-open'>
            <div className="min-h-screen py-40"style={{ backgroundImage: 'linear-gradient(115deg, #DAB785, #F4EADE)' }} >
                <div className='container mx-auto'>
                    <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                        <div className='w-1/2 bg-food'>
                            <h1 className='text-white text-3xl font-bold mt-32 text-center'>Welcome</h1>
                        </div>

                        <div className='w-1/2 py-16 px-12'>
                            <h1 className='text-3xl text-center mb-4'>KAYIT OL</h1>
                            <p className='mb-4 text-center'>Hemen hesap oluşturun ve tariflerinizi paylaşın!</p>
                            <form action='#'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <input type='text' placeholder='İsim' className='border rounded-md border-gray-400 py-1 px-2'></input>
                                    <input type='text' placeholder='Soyisim' className='border rounded-md border-gray-400 py-1 px-2'></input>
                                </div>
                                <div className='mt-5'>
                                <input type='text' placeholder='E-mail' className='border rounded-md w-full border-gray-400 py-1 px-2'></input>
                                </div>
                                <div className='mt-5'>
                                <input type='text' placeholder='Şifre' className='border rounded-md w-full border-gray-400 py-1 px-2'></input>
                                </div>
                                <div className='mt-5'>
                                <input type='text' placeholder='Şifre Tekrar' className='border rounded-md w-full border-gray-400 py-1 px-2'></input>
                                </div>
                                <div className='mt-5'>
                                    <input type='checkbox' className='border border-gray-400' checked={null}/>
                                        <span className='ml-1'>
                                            Gizlilik şartlarını kabul ediyorum.
                                        </span>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-full bg-orange-400 text-white py-1 rounded-md'>Kayıt Ol</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}