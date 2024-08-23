
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { getDictionary } from "../../../dictionary";
import Title from '../components/Title';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';
import Head from 'next/head';


export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
description: "Welcome to our peaceful retreat nestled on the stunning Bluff Beach, on Colón Island in Bocas del Toro. Our ten-room boutique hotel invites you to an immersive experience in the heart of untouched nature, where relaxation, adventure, and discovery blend seamlessly.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/ext3.jpeg"
    },
    es: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
description: "Bienvenidos a nuestro refugio de paz, enclavado en la impresionante Playa Bluff, en la Isla Colón, Bocas del Toro. Nuestro hotel boutique de diez habitaciones le invita a una experiencia inmersiva en el corazón de la naturaleza virgen, donde la relajación, la aventura y el descubrimiento se entrelazan armoniosamente.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/ext3.jpeg"
    },
    fr: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
      description: "Bienvenue dans notre havre de paix niché sur la splendide plage de Bluff, sur l'île de Colón, à Bocas del Toro. Notre boutique-hôtel de dix chambres vous invite à une expérience immersive au cœur d'une nature préservée, où détente, aventure et découverte se conjuguent harmonieusement.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/ext3.jpeg"
    }
  };

  const { title, description, url, image } = meta[lang] || meta['en']; // Default to English if lang is not defined

  return {
    title,
    description,
    url,
    image,
   
  };
}


export default async function AboutUs({ params }) {
  const lang = await getDictionary(params.lang);
      const metadata = await generateMetadata({ params });
  const { title, description, url, image } = metadata;

 const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel S Bocas",
    "description": description,
    "url": url,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bluff Beach, Isla Colón",
      "addressLocality": "Bocas del Toro",
      "addressRegion": "PAN",
      "postalCode": "00000",
      "addressCountry": "PA"
    },
    "telephone": "+507-6798-7980",
    "email": "sosebbocas@gmail.com",
    "sameAs": "https://www.instagram.com/hotel_s_bocas/",
    "checkInTime": "15:00",
    "checkOutTime": "11:00",
    "numberOfRooms": 10,
    "priceRange":"$$",
    "amenityFeature": [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Safe",
      "Beach",
      "Air conditioning"
    ],
  
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.405",
      "longitude": "-82.252"
    },
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "56"  // You can adjust the number of reviews
  }
  };
  
  return (
     <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
            

      </Head>

        <body>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
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
          <Title className='mb-8' text={lang.about} />
        </div>
        <div className="space-y-4">
  
          <AboutText text={lang.aboutText1}/>
          <AboutText text={lang.aboutText2}/>
          <AboutText text={lang.aboutText3}/>
          <AboutText text={lang.aboutText4}/>
                    <AboutText text={lang.aboutText5}/>
                              <AboutText text={lang.aboutText6}/>
                                        <AboutText text={lang.aboutText7}/>
          
         
        </div>
      </div>
      <div className="">
        <img
          src="/img/ext4.jpeg"
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
    </body>
     </>
  );
};


