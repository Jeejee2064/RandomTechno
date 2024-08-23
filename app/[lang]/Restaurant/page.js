import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import DinerMenu from "../components/DinerMenu";
import ImaGauRes from "../components/ImaGauRes";
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "S Restaurante Bocas del Toro, Bluff Beach, Panama",
description: "Nestled in the lush nature of the island, our restaurant offers a unique gastronomic experience, showcasing local flavors in an idyllic setting, between the sound of waves and the song of tropical birds.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/fr/img/resto7.jpeg"
    },
    es: {
      title: "S Restaurant Bocas del Toro, Bluff Beach, Panama",
description: "Ubicado en la exuberante naturaleza de la isla, nuestro restaurante ofrece una experiencia gastronómica única, destacando sabores locales en un entorno idílico, entre el sonido de las olas y el canto de aves tropicales.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/fr/img/resto7.jpeg"
    },
    fr: {
      title: "S Restaurant Bocas del Toro, Bluff Beach, Panama",
description: "Niché dans la nature luxuriante de l'île, notre restaurant offre une expérience gastronomique unique, mettant en avant des saveurs locales dans un cadre idyllique, entre bruissement des vagues et chant des oiseaux tropicaux.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/resto7.jpeg"
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


export default async function Restaurant({ params }) {
    const imagesResto = ['resto1.png'];

    const lang = await getDictionary(params.lang);

    const metadata = await generateMetadata({ params });
  const { title, description, url, image } = metadata;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Restaurant S Bocas",
  "description": "Experience gourmet dining with stunning ocean views at Restaurant S Bocas, located on Bluff Beach in Bocas del Toro.",
  "image": "https://www.hotel-s-bocas.com/fr/img/resto7.jpeg",
 "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bluff Beach, Isla Colón",
      "addressLocality": "Bocas del Toro",
      "addressRegion": "PAN",
      "postalCode": "00000",
      "addressCountry": "PA"
    },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.405",
    "longitude": "-82.252"
  },
 "telephone": "+507-6798-7980",
    "email": "sosebbocas@gmail.com",
  "priceRange": "$-$$",
  "servesCuisine": "Caribbean, International",
  "menu": "https://www.hotel-s-bocas.com/Restaurant",
  "acceptsReservations": "True",
  "hasMenu": {
    "@type": "Menu",
    "url": "https://www.hotel-s-bocas.com/Restaurant"
  },
  "openingHours": [
    "Mo-Su 07:30-21:30"
  ],
  "containedInPlace": {
    "@type": "LandmarksOrHistoricalBuildings",
    "name": "Bluff Beach",
    "description": "A stunning beach known for its surfing and natural beauty.",
    "image": "https://www.hotel-s-bocas.com/fr/img/tortue.JPG",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.405",
      "longitude": "-82.252"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "128"
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

            

      </Head>
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
        <BGSlider title={lang.resto}
                images={['ext2.jpg', 'resto4.jpeg', 'resto5.jpeg']}
            />
            <ImaGauRes
                titre={lang.resto}
                text={lang.restoText}
                images={imagesResto}
                heureptidej={lang.heureptidej}
                heuredej={lang.heuredej}
                heuredin={lang.heuredin}
                horaire={lang.horaire}
            />
            <div className='py-12'>
            <ParallaxBanner image='./img/resto3.jpeg' text='Au Menu'/>
                <DinerMenu
                    titleBar={lang.bar}
                    titleBreakfast={lang.breakfast}
                    titleDiner={lang.diner}
                    titleLunch={lang.lunch}
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
        </>
    );
};

