
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { getDictionary } from "../../../dictionary";
import Title from '../components/Title';
import Footer from '../components/Footer';
import AboutText2 from '../components/AboutText2';


export default async function AboutUs({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <div className="bg-gray-800">
      <NavBar
        hotel={lang.hotel}
        resto={lang.resto}
        activite={lang.activite}
        about={lang.about}
        contact={lang.contact}
        faune={lang.faune}
        bookNow={lang.bookNow}
      />
      <div className='text-gray-800'
        style={{

          textAlign: 'center',
        }}
      >
        <div className=' pt-16'>

          <div className='w-full flex items-center justify-center'>
            <Image
              src="/LogoSB.svg"
              alt="SVG Image"
              width={300}
              height={300}
            />

          </div>


        </div>
      </div>

      <div className="items-center text-gray-200  p-12">
        <div className='mb-8'>
          <Title className='mb-8' text={lang.conditions} />
        </div>
        <div className="space-y-8  w-full lg:w-3/4 m-auto">
  
          <AboutText2 text={lang.conditionsText1}/>
          <AboutText2 text={lang.conditionsText2}/>
          <AboutText2 text={lang.conditionsText3}/>
          <AboutText2 text={lang.conditionsText4}/>
                    <AboutText2 text={lang.conditionsText5}/>
          <AboutText2 text={lang.conditionsText6}/>
          <AboutText2 text={lang.conditionsText7}/>
          <AboutText2 text={lang.conditionsText8}/>
                    <AboutText2 text={lang.conditionsText9}/>
          <AboutText2 text={lang.conditionsText10}/>
          <AboutText2 text={lang.conditionsText11}/>
          <AboutText2 text={lang.conditionsText12}/>
                    <AboutText2 text={lang.conditionsText13}/>
          <AboutText2 text={lang.conditionsText14}/>
          <AboutText2 text={lang.conditionsText15}/>
          <AboutText2 text={lang.conditionsText16}/>
          
         
        </div>
      </div>
      <div className="">
        <img
          src="/img/ext7.jpeg"
          alt="Sonia and Sebastien Brunet"
          className='w-screen'
        />
      </div>
      <Footer
             email={lang.email}
              adress={lang.adress} 
              phone={lang.phone} 
              contact={lang.contact}
              conditions={lang.conditions}
              />
    </div>
  );
};


