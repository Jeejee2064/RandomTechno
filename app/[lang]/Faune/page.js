import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";

import ImaDroAct from "../components/ImaDroAct";
import ImaGauAct from "../components/ImaGauAct";

import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";
import dynamic from 'next/dynamic';
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";

import Head from 'next/head';

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "Fauna and Flora of Bocas del Toro, Bluff Beach, Panama",
description: "At the heart of the biodiversity of Bocas del Toro, Isla Colón, the fauna offers a dazzling spectacle both on land and under the crystal-clear waters. In the lush canopy, howler monkeys resonate with their distinctive calls, while brightly colored toucans gracefully fly between branches. Underwater, eagle rays glide elegantly, accompanied by schools of shimmering tropical fish and corals with fantastic shapes, making every dive an unforgettable adventure.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/fr/img/Toucan.jpg"
    },
    es: {
      title: "Fauna y Flora de Bocas del Toro, Bluff Beach, Panama",
description: "En el corazón de la biodiversidad de Bocas del Toro, Isla Colón, la fauna ofrece un espectáculo deslumbrante tanto en tierra como bajo las aguas cristalinas. En la exuberante copa de los árboles, los monos aulladores resuenan con sus llamadas distintivas, mientras que los tucanes de colores brillantes vuelan graciosamente entre las ramas. Bajo el agua, las rayas águila se deslizan con elegancia, acompañadas de bancos de peces tropicales brillantes y corales con formas fantásticas, haciendo que cada buceo sea una aventura inolvidable.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/fr/img/Toucan.jpg"
    },
    fr: {
      title: "Faune and Flore de Bocas del Toro, Bluff Beach, Panama",
description: "La biodiversité de Bocas del Toro, Isla Colón, est exceptionnelle. Singes, toucans et poissons tropicaux côtoient palmiers, mangroves et orchidées. Une nature luxuriante à découvrir tant sur terre que sous l'eau.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/Toucan.jpg"
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



export default async function Faune({ params }) {
    const imagesFaune = [ 'Toucan2.jpg', 'paresseux.jpg'];
    const imagesFlore = ['hibiscus.jpg', 'lys.jpg', 'heliconia.jpg'];
    const imagesSnorkel = ['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg'];
    const imagesHikes = ['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg'];

    const lang = await getDictionary(params.lang);


      const metadata = await generateMetadata({ params });
  const { title, description, url, image } = metadata;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Fauna and Flora in Bocas del Toro",
  "description": "Discover the rich biodiversity of Bocas del Toro, from vibrant coral reefs to lush rainforests teeming with life.",
  "image": "https://www.hotel-s-bocas.com/fr/img/lys.jpg",
  "mainEntity": {
    "@type": "Place",
    "name": "Bocas del Toro",
    "description": "A tropical paradise known for its diverse wildlife and plant species.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.3405",
      "longitude": "-82.2490"
    },
    "containsPlace": [
      {
        "@type": "LandmarksOrHistoricalBuildings",
        "name": "Bluff Beach Rainforest",
        "description": "Home to a wide variety of tropical birds, reptiles, and plant species.",
        "image": "https://www.hotel-s-bocas.com/fr/img/Monkey.jpg",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.405",
          "longitude": "-82.252"
        }
      }
    ]
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
        <div className="bg-gray-800 w-screen">
            <NavBar
                hotel={lang.hotel}
                resto={lang.resto}
                activite={lang.activite}
                about={lang.about}
                contact={lang.contact}
                faune={lang.faune}
                bookNow={lang.bookNow}
            />
            <BGSlider title={lang.faune}
                images={[ 'LionFish.jpg']}
            />
            <div className='py-12'>
                <ImaGauAct
                    titre={lang.faune2}
                    text={lang.fauneText}
                    images={imagesFaune}
                />
                <Separator />
                <ImaDroAct
                    titre={lang.flore}
                    text={lang.floreText}
                    images={imagesFlore}
                />
                <ParallaxBanner image='./img/mimitimbi.JPG' text='Nature' />

               
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

