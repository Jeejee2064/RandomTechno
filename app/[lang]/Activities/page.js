import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import ImaBeach from "../components/ImaBeach";
import ImaDroAct from "../components/ImaDroAct";
import ImaGauAct from "../components/ImaGauAct";
import ImaSnorkel from "../components/ImaSnorkel";
import ImaSurf from "../components/ImaSurf";
import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";
import dynamic from 'next/dynamic';
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";
import Head from 'next/head';

const markers = [

    {
        name: {
            en: 'Bocas Airport',
            es: 'Aeropuerto de Bocas',
            fr: 'Aéroport de Bocas',
        },
        description: {
            en: 'Small airport with flights from and to Panama City',
            es: 'Pequeño aeropuerto con vuelos desde y hacia la Ciudad de Panamá',
            fr: 'Petit aéroport avec des vols depuis et vers Panama City',
        },
        coordinates: { latitude: 9.340702, longitude: -82.243977 },
        category: 'Airport',
    },
    {
        name: {
            en: 'La Piscina',
            es: 'La Piscina',
            fr: 'La Piscina',
        },
        description: {
            en: 'Wonderful Beach surrounded by the Jungle',
            es: 'Maravillosa playa rodeada de la selva',
            fr: 'Magnifique plage entourée par la jungle',
        },
        coordinates: { latitude: 9.433054, longitude: -82.262511 },
        category: 'Beach',
    },
    {
        name: {
            en: 'MimiTimbi',
            es: 'MimiTimbi',
            fr: 'MimiTimbi',
        },
        description: {
            en: 'Secluded Beach with a high Cliff Island',
            es: 'Playa apartada con una isla de acantilados altos',
            fr: 'Plage isolée avec une île à falaises élevées',
        },
        coordinates: { latitude: 9.438565, longitude: -82.276569 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Carenero',
            es: 'Carenero',
            fr: 'Carenero',
        },
        description: {
            en: 'Beach with calm waters',
            es: 'Playa con aguas tranquilas',
            fr: 'Plage avec des eaux calmes',
        },
        coordinates: { latitude: 9.343729, longitude: -82.230186 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Wizard Beach',
            es: 'Wizard Beach',
            fr: 'Wizard Beach',
        },
        description: {
            en: 'Splendid Beach on the Ocean Side',
            es: 'Espléndida playa en el lado del océano',
            fr: 'Magnifique plage côté océan',
        },
        coordinates: { latitude: 9.352025, longitude: -82.19712 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Starfish Beach',
            es: 'Playa Estrella',
            fr: 'Playa Estrella',
        },
        description: {
            en: 'Splendid Beach on the Bay Side, lots of starfish in the water',
            es: 'Espléndida playa en el lado de la bahía, muchas estrellas de mar en el agua',
            fr: 'Magnifique plage côté baie, beaucoup d\'étoiles de mer dans l\'eau',
        },
        coordinates: { latitude: 9.404419, longitude: -82.325668 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Paunch Beach',
            es: 'Playa Paunch',
            fr: 'Plage de Paunch',
        },
        description: {
            en: 'Natural pool with low depth.',
            es: 'Piscina natural con poca profundidad.',
            fr: 'Piscine naturelle peu profonde.',
        },
        coordinates: { latitude: 9.383058, longitude: -82.235948 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Zapatilla',
            es: 'Zapatilla',
            fr: 'Zapatilla',
        },
        description: {
            en: 'Small Islands with wonderful beaches',
            es: 'Pequeñas islas con playas maravillosas',
            fr: 'Petites îles avec de magnifiques plages',
        },
        coordinates: { latitude: 9.264106, longitude: -82.055647 },
        category: 'Beach',
    },
    {
        name: {
            en: 'Carenero Quay',
            es: 'Muelle de Carenero',
            fr: 'Quai de Carenero',
        },
        description: {
            en: 'Splendid Beach on the Ocean Side',
            es: 'Espléndida playa en el lado del océano',
            fr: 'Magnifique plage côté océan',
        },
        coordinates: { latitude: 9.339879, longitude: -82.239609 },
        category: 'Boat',
    },
    {
        name: {
            en: 'Bastimientos Quay',
            es: 'Muelle de Bastimentos',
            fr: 'Quai de Bastimentos',
        },
        description: {
            en: 'Splendid Beach on the Ocean Side',
            es: 'Espléndida playa en el lado del océano',
            fr: 'Magnifique plage côté océan',
        },
        coordinates: { latitude: 9.337771, longitude: -82.240625 },
        category: 'Boat',
    },
    {
        name: {
            en: 'Ferry Quay',
            es: 'Muelle del Ferry',
            fr: 'Quai du Ferry',
        },
        description: {
            en: 'Splendid Beach on the Ocean Side',
            es: 'Espléndida playa en el lado del océano',
            fr: 'Magnifique plage côté océan',
        },
        coordinates: { latitude: 9.335402, longitude: -82.240936 },
        category: 'Boat',
    },
    {
        name: {
            en: 'Almirante Quay',
            es: 'Muelle de Almirante',
            fr: 'Quai d\'Almirante',
        },
        description: {
            en: 'Splendid Beach on the Ocean Side',
            es: 'Espléndida playa en el lado del océano',
            fr: 'Magnifique plage côté océan',
        },
        coordinates: { latitude: 9.339623, longitude: -82.239554 },
        category: 'Boat',
    },

    {
        name: {
            en: 'Blue Lagoon',
            es: 'Blue Lagoon',
            fr: 'Blue Lagoon',
        },
        description: {
            en: 'Rocky Lagoon surrounded by the Jungle',
            es: 'Laguna rocosa rodeada de la selva',
            fr: 'Lagon rocheux entouré par la jungle',
        },
        coordinates: { latitude: 9.435685, longitude: -82.266554 },
        category: 'Snorkel',
    },
    {
        name: {
            en: 'Cayo Coral',
            es: 'Cayo Coral',
            fr: 'Cayo Coral',
        },
        description: {
            en: 'Splendid Reefs',
            es: 'Espléndidos arrecifes',
            fr: 'Splendides récifs',
        },
        coordinates: { latitude: 9.252769, longitude: -82.126972 },
        category: 'Snorkel',
    },
    {
        name: {
            en: 'Ship Wreck',
            es: 'Naufragio',
            fr: 'Épave',
        },
        description: {
            en: 'A lot of fish around the wreck',
            es: 'Muchos peces alrededor del naufragio',
            fr: 'Beaucoup de poissons autour de l\'épave',
        },
        coordinates: { latitude: 9.331257, longitude: -82.249027 },
        category: 'Snorkel',
    },
    {
        name: {
            en: 'Saigon Reef',
            es: 'Arrecife Saigon',
            fr: 'Récif Saigon',
        },
        description: {
            en: 'Nice Corals and colorful fishes',
            es: 'Buenos corales y peces coloridos',
            fr: 'Beaux coraux et poissons colorés',
        },
        coordinates: { latitude: 9.346368, longitude: -82.257104 },
        category: 'Snorkel',
    },
    {
        name: {
            en: 'Bird Island',
            es: 'Isla de los Pájaros',
            fr: 'Île aux Oiseaux',
        },
        description: {
            en: 'Rocky caverns with colorful fishes and lots of birds',
            es: 'Cavernas rocosas con peces coloridos y muchos pájaros',
            fr: 'Grottes rocheuses avec des poissons colorés et beaucoup d\'oiseaux',
        },
        coordinates: { latitude: 9.453563, longitude: -82.299416 },
        category: 'Snorkel',
    },
    {
        name: {
            en: 'Bluff Beach',
            es: 'Playa Bluff',
            fr: 'Plage Bluff',
        },
        description: {
            en: 'Heavy ShoreBreak on a sandbar, for advanced riders',
            es: 'Fuerte rompiente en un banco de arena, para riders avanzados',
            fr: 'Rupture lourde sur un banc de sable, pour les riders expérimentés',
        },
        coordinates: { latitude: 9.402422, longitude: -82.246 },
        category: 'Surf',
    },
    {
        name: {
            en: 'Paunch',
            es: 'Paunch',
            fr: 'Paunch',
        },
        description: {
            en: 'Reef Break for advanced riders',
            es: 'Rompiente de arrecife para riders avanzados',
            fr: 'Rupture de récif pour les riders expérimentés',
        },
        coordinates: { latitude: 9.374664, longitude: -82.238113 },
        category: 'Surf',
    },
    {
        name: {
            en: 'Black Rock',
            es: 'Roca Negra',
            fr: 'Rocher Noir',
        },
        description: {
            en: 'Reef Break for advanced riders',
            es: 'Rompiente de arrecife para riders avanzados',
            fr: 'Rupture de récif pour les riders expérimentés',
        },
        coordinates: { latitude: 9.343839, longitude: -82.227898 },
        category: 'Surf',
    },
    {
        name: {
            en: 'Carenero',
            es: 'Carenero',
            fr: 'Carenero',
        },
        description: {
            en: 'Reef Break for advanced riders',
            es: 'Rompiente de arrecife para riders avanzados',
            fr: 'Rupture de récif pour les riders expérimentés',
        },
        coordinates: { latitude: 9.350891, longitude: -82.227131 },
        category: 'Surf',
    },
    {
        name: {
            en: 'Bluff Terminus',
            es: 'Terminal de Bluff',
            fr: 'Terminus de Bluff',
        },
        description: {
            en: 'Terminus for Bluff Beach',
            es: 'Terminal para la Playa Bluff',
            fr: 'Terminus pour la Plage Bluff',
        },
        coordinates: { latitude: 9.401801, longitude: -82.247062 },
        category: 'Bus',
    },
    {
        name: {
            en: 'Bocas Terminus',
            es: 'Terminal de Bocas',
            fr: 'Terminus de Bocas',
        },
        description: {
            en: 'Terminus for Bocas Town',
            es: 'Terminal para la Ciudad de Bocas',
            fr: 'Terminus pour la Ville de Bocas',
        },
        coordinates: { latitude: 9.33966, longitude: -82.24071 },
        category: 'Bus',
    },


];


export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "What to do in Bocas del Toro, Bluff Beach, Panama",
description: "Adventure calls you. Surf the majestic waves of the Atlantic, dive into the crystal-clear waters, or enjoy peaceful walks along the golden beaches. Experience the essence of the island.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/plage3.jpg"
    },
    es: {
      title: "Que hacer en Bocas del Toro, Bluff Beach, Panama",
description: "La aventura te llama. Surfea las majestuosas olas del Atlántico, sumérgete en las aguas cristalinas o disfruta de paseos tranquilos por las playas doradas. Vive la esencia de la isla.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/plage3.jpg"
    },
    fr: {
      title: "Activités à Bocas del Toro, Bluff Beach, Panama",
      description: "L'aventure vous appelle. Surfez sur les vagues majestueuses de l'Atlantique, plongez dans les eaux cristallines ou savourez des balades apaisantes le long des plages dorées. Vivez l'essence de l'île.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/plage3.jpg"
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

const structuredData= {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Bocas del Toro",
  "description": "Explore the top activities and attractions in Bocas del Toro, including surfing, snorkeling, and exploring the vibrant local culture.",
  "image": "https://www.hotel-s-bocas.com/fr/img/mimitimbi.JPG",
  "touristType": "Adventure, Relaxation, Culture",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.3405",
    "longitude": "-82.2490"
  },
  "containsPlace": [
    {
      "@type": "LandmarksOrHistoricalBuildings",
      "name": "Bluff Beach",
      "description": "A stunning beach known for its surfing and natural beauty.",
      "image": "https://www.hotel-s-bocas.com/fr/img/tortue.JPG",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.405",
        "longitude": "-82.252"
      }
    }
  ]
};



export default async function Activities({ params }) {
      const metadata = await generateMetadata({ params });
  const { title, description, url, image } = metadata;
    const imagesBeach = ['plage.jpg'];
    const imagesSurf = ['Surf.jpg'];
    const imagesSnorkel = [ 'LionFish.jpg'];
    const imagesHikes = [ 'paresseux.jpg','tortue.jpg'];

    const lang = await getDictionary(params.lang);


    const DynamicBocasMap = dynamic(
        () => import('../components/BocasMap').then((module) => module.default),
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
            <BGSlider title={lang.activite}
                images={['reef1.jpg', 'Toucan.jpg', 'Monkey.jpg']}
            />
            <div className='py-12'>
                <ImaGauAct
                    titre={lang.beach}
                    text={lang.beachText}
                    images={imagesBeach}
                />
                <Separator />
                <ImaDroAct
                    titre={lang.hikes}
                    text={lang.hikesText}
                    images={imagesHikes}
                />
                <ParallaxBanner image='./img/bluff.JPG' text='Isla Cólon' />

                <ImaGauAct
                    titre={lang.snorkel}
                    text={lang.snorkelText}
                    images={imagesSnorkel}
                />
                <Separator />
                <ImaDroAct
                    titre={lang.surf}
                    text={lang.surfText}
                    images={imagesSurf}
                />
                <SeparatorB />
                <Title text={lang.bocasMap} />
                <DynamicBocasMap markers={markers} />
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

