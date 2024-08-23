// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { styleScript, poppins, allura } from "../fonts";
import Image from 'next/image';



const dinerData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];

const dejeunerData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];
const barData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];
const ptidejData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];
// Get the current path
const currentPath = window.location.pathname;

// Extract the language code from the path
const lang = currentPath.split('/')[1];

// Now, 'lang' should contain the language code ('en', 'fr', 'es', etc.)
console.log('Current Language:', lang);

const displayMenu = (menuData) => {
  const categoryOrder = ['tapas', 'entree', 'plat', 'dessert'];

  const groupedMenu = groupByCategory(menuData);

  const sortedCategories = categoryOrder.filter(category => groupedMenu[category]);

  return sortedCategories.map(category => (
    <div key={category} className="w-full justify-center text-center rounded-lg">
      <div className={styleScript.className}>
        <h2 className="text-8xl text-gray-200 align-text-center mt-24 mb-12">{category}</h2>
      </div>
      {groupedMenu[category].map((item) => (
        <div key={item.id} className={poppins.className}>
          <p className="text-2xl ph-8 font-bold text-gray-200 align-text-center">
            {lang === 'fr' && item.nom_fr}
            {lang === 'es' && item.nom_es}
            {lang === 'en' && item.nom_en}
          </p>
          <p className="text-l text-gray-200 pl-8 pr-8 lg:text-xl align-text-center">
            {lang === 'fr' && item.description_fr}
            {lang === 'es' && item.description_es}
            {lang === 'en' && item.description_en}
          </p>
          <p className="text-2xl text-gray-200 align-text-center pb-12">
            ${item.prix}
          </p>
        </div>
      ))}
      <div className='w-1/5 h-2 rounded-full bg-gray-400 m-auto'>
      </div>
    </div>
  ));
};

const groupByCategory = (menuData) => {
  return menuData.reduce((grouped, item) => {
    const category = item.categorie;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(item);
    return grouped;
  }, {});
};

function CollapsibleMenu({ title, menuData }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' relative justify-center bg-gray-600 bg-opacity-20 w-3/4 mx-auto items-center'>
      <div className='justify-self-center items-center rounded-lg'>
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={`/img/image2.png`}
            alt={`cha`}
            fill
            style={{ objectFit: "cover", opacity: 0.7, zIndex: -1 }}
          />
          <div className={styleScript.className}>
            <h2 className="text-6xl  text-gray-200 text-center mt-24 p-12 mb-12 z-20">{title}</h2>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full justify-center text-center pb-8"
            >
              <div className={styleScript.className}>
                {displayMenu(menuData)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DinerMenu({titleBar,titleBreakfast,titleDiner,titleLunch}) {






  return (
    <div>
            <CollapsibleMenu title={titleBar} menuData={barData} />
            <CollapsibleMenu title={titleLunch} menuData={dejeunerData} />
      <CollapsibleMenu title={titleDiner} menuData={dinerData} />
      <CollapsibleMenu title={titleBreakfast} menuData={ptidejData} />
    </div>
  );
}
