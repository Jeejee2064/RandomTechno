import React from 'react';

const LanguageSwitcher = () => {
  // Get the current path
  const currentPath = window.location.pathname;

  // Extract the language code from the path
  const currentLang = currentPath.split('/')[1];

  const languageOptions = [
    { value: 'fr', label: 'Fr' },
    { value: 'es', label: 'Es' },
    { value: 'en', label: 'En' },
  ];

  const handleLanguageChange = (lang) => {
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    window.location.href = newPath;
  };

  return (
    <div style={{ display: 'flex' }}>
      {languageOptions.map(option => (
        <button
          key={option.value}
          onClick={() => handleLanguageChange(option.value)}
          style={{
            color: option.value === currentLang ? '#fff' : 'grey',
        
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
