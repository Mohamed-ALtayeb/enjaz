import jsPDF from 'jspdf';
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const CardToPrint = () => {
  const location = useLocation();
  const { him, me, ratio1, ratio2, swi } = location.state;
  const navigate = useNavigate();
  const domEl = useRef(null);

  const { gen } = location.state;

  // const choose = () => {
  //   if (gen === 'male') {
  //     return <Male location={location} />;
  //   } else {
  //     return <Female location={location} />;
  //   }
  // };

  // const Male = () => {
  //   const { gen, him, me, ratio1, ratio2, swi } = location.state;

  //   return (
  //     <div className='min-w-fit lg:min-w-fit'>
  //       <div className='relative'>
  //         <img src={img1} className='w-1/2 m-auto rounded-3xl' />
  //         <p className='absolute top-1/4 left-1/3 text-xs md:text-xl text-white font-Cairo '>
  //           {me}
  //         </p>
  //         <p className='absolute top-1/2 -translate-y-1.5  md:-translate-y-3  left-1/3 -translate-x-2 text-xs md:text-3xl text-emerald-800 font-Cairo font-bold'>
  //           {ratio2}.{ratio1}%
  //         </p>
  //         <p className='absolute -top-1/3 md:top-96 md:translate-y-16 translate-y-40 left-1/3 -translate-x-10 text-xs md:text-xl text--900 font-Cairo font-black'>
  //           {him}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };

  const Female = () => {
    const location = useLocation();
    const { gen, him, me, ratio1, ratio2, swi } = location.state;

    return (
      <div
        style={{ backgroundImage: `url(${img2})` }}
        className='w-1/2 h-1/4 relative bg-conver bg-center bg-fixed'>
        <div className='absolute'>
          <p>{him}</p>
          <p className='text-purple-700'>{me}</p>
          <span>{ratio2}</span>.<span>{ratio2}</span>
        </div>
      </div>
    );
  };

  const handlePrint = useReactToPrint({
    content: () => domEl.current,
    copyStyles: () => true,
    // onAfterPrint: () => navigate('/'),
  });

  return (
    <>
      {/* <div className='flex flex-col h-screen justify-center align-middle items-center space-y-2 bg-emerald-700'>
        <div>
          <div
            ref={domEl}
            className='flex flex-col justify-center items-center'>
            <div className='w-1/2 ml-44'>
              <div className='w-2/3'>
                <img src={img1} alt='' className='rounded-3xl' />
              </div>
            </div>
          </div>
          <button onClick={handlePrint} className='btn'>
            Click ME
          </button>
        </div>
      </div> */}
      <div className='flex flex-col h-screen justify-center align-middle items-center space-y-2'>
        <div className='hidden'>
          {' '}
          <div
            ref={domEl}
            className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-2/3'>
                <img
                  src={img1}
                  alt=''
                  className='w-full rounded-3xl relative'
                />
                <p className='absolute top-36 left-1/3  -translate-x-10 text-2xl font-semibold font-Cairo'>
                  {me}{' '}
                </p>
                <p className='absolute top-1/3 -translate-y-32  translate-x-28 text-2xl font-bold font-Cairo mt-1'>
                  <span>{ratio2}</span>.<span>{ratio1}%</span>
                </p>
                <p className='absolute top-1/3 left-1/3 translate-x-10  -translate-y-20 font-bold text-xl font-Cairo mt-14'>
                  : مهداة من
                </p>
                <p className='absolute top-1/3 left-1/3 -translate-x-20 -translate-y-7 font-bold text-xl font-Cairo mt-16'>
                  {him}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handlePrint} className='btn'>
          Click ME
        </button>
      </div>
    </>
  );
};

export default CardToPrint;
