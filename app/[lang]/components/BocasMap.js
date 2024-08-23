
'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Title from './Title';

const BocasMap = ({markers}) => {
// Get the current path
const currentPath = window.location.pathname;

// Extract the language code from the path
const lang = currentPath.split('/')[1];
console.log(lang)
 
  const categoryColors = {
    Airport: 'grey',
    Boat: 'red',
    Bus: 'green',

    Beach: 'yellow',
    Snorkel: 'blue',
    Surf: 'orange',

  };

  const getCategoryIcon = (category) => {
    return categoryColors[category] || 'gray';
  };

  return (
    <div style={{height:'75vh'}}className=" flex flex-col items-center justify-center">
      <div className="flex space-x-4 items-center flex-wrap justify-center text-white z-10">
        {Object.keys(categoryColors).map((category, index) => (
          <div key={index} className="flex  items-center justify-center ">
            <img
              src={`https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getCategoryIcon(category)}.png`}
              className="w-5 h-5 mr-2"
            />
            <p>{category}</p>
          </div>
        ))}
      </div>
      <div className="w-screen md:w-3/4 h-3/4">
        <MapContainer center={[9.35, -82.25]} zoom={12} style={{ width: '100%', height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={[marker.coordinates.latitude, marker.coordinates.longitude]}
              icon={L.icon({
                iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getCategoryIcon(marker.category)}.png`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })}
            >
              <Popup>
                <div>
                  <h3 className='font-bold text-lg'
                  >
                    {marker.name[lang]}
                    </h3>
                  <p className='text-lg'>{marker.description[lang]}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </div>

  );
};

export default BocasMap;