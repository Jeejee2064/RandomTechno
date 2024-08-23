
import React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image'


const Footer = ({ email, phone, adress, contact, conditions }) => {
  const DynamicMapComponent = dynamic(
    () => import('./FootMap'),
    { ssr: false }
  );


  return (
    <footer className="bg-gray-600 text-white p-8">
      <div className="md:flex justify-between">
        <DynamicMapComponent />
        <div className=" w-full md:w-1/2 md:px-12 px-4 flex flex-col justify-center">
          <div className="text-2xl font-bold my-4">{contact}</div>
          <div>
            
            <Link className='flex  items-center ' href="mailto:sosebbocas@gmail.com">
            <img
              src="/email.png"
              alt="mail icon" 
              width={30}
              height={30}
              className="mr-2"
            />
             sosebbocas@gmail.com
            </Link>
            <br />
            <Link className='flex  items-center  ' href="https://wa.me/50768031299">
            <img
              src="/whatsapp.png"
              alt="whatsapp icon" 
              width={30}
              height={30}
              className="mr-2"
            />
           +50768031299 (WhatsApp)</Link>
            <br />
            <Link className='flex  items-center ' href="https://www.google.com/maps/place/9%C2%B024'21.7%22N+82%C2%B015'02.8%22W/@9.4058516,-82.2526802,17z/">
            <img
              src="/location.png"
              alt="location icon" 
              width={30}
              height={30}
              className="mr-2"
            />
            Bluff Beach, Isla Colón, Bocas del Toro, Panamá</Link>
                        <br />
            <Link className='flex  items-center ' href="https://www.instagram.com/hotel_s_bocas/">
            <img
              src="/instagram.svg"
              alt="instagram icon" 
              width={30}
              height={30}
              className="mr-2"
            />
            @hotel_s_bocas</Link>

          </div>
                      <Link className='flex ' href="./Conditions">
<h1         className="p-8 text-l text-center  text-blue-400 font-bold">
            {conditions}
            </h1>
            </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

