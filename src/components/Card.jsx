import React, { createRef, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import * as htmlToImage from 'html-to-image';
import Pdf from 'react-to-pdf';
import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image';
import jsPDF from 'jspdf';
const Card = () => {
  const [genn, setGenn] = useState(null);
  const location = useLocation();
  const { gen, him, me, ratio1, ratio2, swi } = location.state;
  // const domEl = useRef(null);
  const domEl = createRef(null);
  // console.log(location);

  const choose = () => {
    if (gen === 'male') {
      return <Male location={location} />;
    } else {
      return <Female location={location} />;
    }
  };

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'تهنئة.png';
    link.href = dataUrl;
    link.click();
  };

  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8, 7],
  };

  const generatePDF = () => {
    const report = new jsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    });

    return (
      // <div className='w-screen h-screen'>
      //   <div className='w-full h-full flex flex-col justify-center items-center'>
      //     <div
      //       // className='hidden'
      //       // ref={domEl}
      //       // id='domEl'
      //       id='report'
      //       ref={domEl}>
      //       {choose()}
      //     </div>
      //     <div>
      //       <button
      //         className='btn '
      //         // onClick={downloadImage}
      //         // onClick={() => exportComponentAsPDF(domEl)}
      //         onClick={generatePDF}>
      //         تحمــيل
      //       </button>
      //     </div>
      //   </div>
      // </div>
      <h1 className='text-emerald-900'>Hello Mother Fucker</h1>
    );
  };

  const Male = () => {
    const location = useLocation();
    const { gen, him, me, ratio1, ratio2, swi } = location.state;

    return (
      <div className='min-w-fit lg:min-w-fit'>
        <div className='relative'>
          <img src={img1} className='w-1/2 m-auto rounded-3xl' />
          <p className='absolute top-1/4 left-1/3 text-xs md:text-xl text-white font-Cairo '>
            {me}
          </p>
          <p className='absolute top-1/2 -translate-y-1.5  md:-translate-y-3  left-1/3 -translate-x-2 text-xs md:text-3xl text-emerald-800 font-Cairo font-bold'>
            {ratio2}.{ratio1}%
          </p>
          <p className='absolute -top-1/3 md:top-96 md:translate-y-16 translate-y-40 left-1/3 -translate-x-10 text-xs md:text-xl text--900 font-Cairo font-black'>
            {him}
          </p>
        </div>
      </div>
    );
  };

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
};

export default Card;
