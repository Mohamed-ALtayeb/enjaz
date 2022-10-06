import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';
import Card from '../components/Card';
const App = () => {
  const navigate = useNavigate();
  const [swi, setSwi] = useState(null);
  const [info, setInfo] = useState({
    him: '',
    me: '',
    ratio1: '',
    ratio2: '',
    gen: '',
    swi: null,
  });

  const onValueChange = (e) => {
    const value = e.target.value;
    setInfo({
      ...info,
      [e.target.name]: value,
    });
  };

  const submitHandler = (e) => {
    navigate('/toprint', {
      state: info,
    });
    console.log(info);
  };

  return (
    <div
      className='w-screen h-screen  bg-cover bg-center bg-no-repeat bg-fixed'
      style={{ backgroundImage: `url(${background})` }}>
      <div className='w-full h-full flex flex-col justify-center items-center font-cairo backdrop-blur-sm font-Cairo space-y-10 '>
        <h3 className='text-gray-700 font-Arabic font-black text-xl lg:text-3xl'>
          خش هنئ
        </h3>
        <form
          onSubmit={submitHandler}
          dir='rtl'
          className='py-10 px-10 md:py-6 md:px-16 bg-gray-500 rounded-lg shadow-lg shadow-slate-600 opacity-90'>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text text-white font-semibold'>
                اسم المهنئ
              </span>
            </label>
            <input
              type='text'
              // placeholder='Type here'
              name='him'
              value={info.him}
              onChange={onValueChange}
              className='input input-bordered w-60 max-w-xs text-white bg-gray-800 focus:ring-4 focus:ring-sky-500'
              autoComplete='off'
              required
              // onInvalid={(e) => e.target.setCustomValidity('الرجاء ملء الفراغ')}
            />
            <label className='label'>
              <span className='label-text text-white font-semibold'>
                اسم الناجح{' '}
              </span>
            </label>
            <input
              type='text'
              // placeholder='Type here'
              name='me'
              value={info.me}
              onChange={onValueChange}
              className='input input-bordered w-full max-w-xs text-white bg-gray-800 font-black focus:ring-4 focus:ring-sky-500'
              autoComplete='off'
              required
              // onInvalid={(e) => e.target.setCustomValidity('الرجاء ملء الفراغ')}
            />
          </div>
          <label className='label'>
            <span className='label-text text-white font-semibold'>النسبة </span>
          </label>
          <div className='flex flex-row justify-evenly items-center'>
            <input
              type='number'
              // placeholder='Type here'
              name='ratio1'
              value={info.ratio1}
              onChange={onValueChange}
              className='input input-bordered w-16 text-white bg-gray-800 focus:ring-4 focus:ring-sky-500 font-black'
              autoComplete='off'
              required
            />
            <span className='text-xl mt-4 font-bold text-white'>.</span>
            <input
              type='number'
              // placeholder='Type here'
              name='ratio2'
              value={info.ratio2}
              onChange={onValueChange}
              className='input input-bordered w-16 text-white bg-gray-800 focus:ring-4 focus:ring-sky-500 font-black'
              autoComplete='off'
              required
            />
          </div>
          <div className='form-control mt-5'>
            <label className='label cursor-pointer'>
              <span className=' text-white font-arabic font-black'>طالبة</span>
              <input
                type='radio'
                name='gen'
                value='female'
                onChange={onValueChange}
                className='radio bg-gray-700 checked:bg-purple-500'
                required
              />
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <span className=' text-white font-arabic font-black'>طالب</span>
              <input
                type='radio'
                name='gen'
                value='male'
                onChange={onValueChange}
                className='radio bg-gray-700 checked:bg-blue-500'
                required
              />
            </label>
          </div>
          <button type='submit' className='btn text-center mr-20'>
            طبــاعـة
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
