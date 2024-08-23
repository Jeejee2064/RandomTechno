import Image from 'next/image';
import NavBar from '../components/NavBar';
import { getDictionary } from "../../../dictionary";
import Title from '../components/Title';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';



export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "Contact Hotel S Bocas del Toro, Bluff Beach, Panama",
description: "Contact page for Hotel S Bocas del Toro, Bluff Beach, Panama.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/ext4.jpeg"
    },
    es: {
      title: "Contacto Hotel S Bocas del Toro, Bluff Beach, Panama",
description: "Pàgina de contacto del Hotel S Bocas del Toro, Bluff Beach, Panama.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/ext4.jpeg"
    },
    fr: {
      title: "Contact Hotel S Bocas del Toro, Bluff Beach, Panama",
description: "Page de contact de l'Hotel S Bocas del Toro, Bluff Beach, Panama.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/ext4.jpeg"
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



export default async function Contact({ params }) {
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

  const DynamicMapComponent = dynamic(
    () => import('../components/FootMap'),
    { ssr: false }
  );

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
                    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
    <div className="bg-gray-800 w-screen m-auto justify-center align-center">
      <NavBar
        hotel={lang.hotel}
        resto={lang.resto}
        activite={lang.activite}
        about={lang.about}
        contact={lang.contact}
        faune={lang.faune}
        bookNow={lang.bookNow}
      />
      <div className="text-gray-800" style={{ textAlign: 'center' }}>
        <div className="pt-16">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/LogoSB.svg"
              alt="SVG Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Title text={lang.contact} className="mb-8 sm:w-3/4" />
      <div className="w-screen text-gray-200 py-16 md:px-12 px-4 m-auto align-center justify-center flex flex-col items-center">
        <Link className="flex items-center mb-4" href="mailto:sosebbocas@gmail.com">
          <img
            src="/email.png"
            alt="mail icon"
            width={30}
            height={30}
            className="mr-2"
          />
          sosebbocas@gmail.com
        </Link>
        <Link className="flex items-center mb-4" href="https://wa.me/50768031299">
          <img
            src="/whatsapp.png"
            alt="whatsapp icon"
            width={30}
            height={30}
            className="mr-2"
          />
          +50768031299 (WhatsApp)
        </Link>
        <Link className="flex items-center mb-8" href="https://www.google.com/maps/place/9%C2%B024'21.7%22N+82%C2%B015'02.8%22W/@9.4058516,-82.2526802,17z/">
          <img
            src="/location.png"
            alt="location icon"
            width={30}
            height={30}
            className="mr-2"
          />
          Bluff Beach, Isla Colón, Bocas del Toro, Panamá
        </Link>

        <DynamicMapComponent />
      </div>
    </div>
    </>
  );
}
