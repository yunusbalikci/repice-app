import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/app';
import { auth } from "../Firebase";


export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Başarıyla kaydedilen kullanıcı
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      // Hata durumunda
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  }

  return (
    <div className='font-open'>
      <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #FFF5F4, #F4EADE)' }}>
        <div className='container mx-auto'>
          <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className='w-1/2 bg-food'>
              <h1 className='text-white text-3xl font-bold mt-36 text-center'>HOŞGELDİNİZ</h1>
              <p className='text-white text-center mt-3 text-xl font-bold'>Yemek Tarifim'e hoşgeldiniz. Hemen kayıt olarak aramıza katılın!</p>
            </div>

            <div className='w-1/2 py-16 px-12'>
              <h1 className='text-3xl font-bold text-center mb-4'>KAYIT OL</h1>
              <p className='mb-4 text-center'>Hemen hesap oluşturun ve tariflerinizi paylaşın!</p>
              <form action='#'>
                <div className='grid grid-cols-2 gap-5'>
                  <input type='text' placeholder='İsim' className='border shadow rounded-md border-gray-400 py-1 px-2'></input>
                  <input type='text' placeholder='Soyisim' className='border shadow rounded-md border-gray-400 py-1 px-2'></input>
                </div>
                <div className='mt-5'>
                  <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className='border rounded-md w-full shadow border-gray-400 py-1 px-2'></input>
                </div>
                <div className='mt-5'>
                  <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Şifre' className='border rounded-md shadow w-full border-gray-400 py-1 px-2'></input>
                </div>
                <div className='mt-5'>
                  <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Şifre Tekrar' className='border rounded-md shadow w-full border-gray-400 py-1 px-2'></input>
                </div>
                <div className='mt-5'>
                  <input type='checkbox' className='border border-gray-400' checked={null} />
                  <span className='ml-1'>
                    Gizlilik şartlarını kabul ediyorum.
                  </span>
                </div>
                <div className='mt-5'>
                  <button type='submit' onClick={onSubmit} className='w-full bg-orange-400 text-white py-1 rounded-md'>Kayıt Ol</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
