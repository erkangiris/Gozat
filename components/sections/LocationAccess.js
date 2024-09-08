"use client"
import React from 'react'
import Box from '../ui/Box'
import Title from '../ui/Title'
import Image from 'next/image'
import StandartButton from '../ui/StandartButton'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  TileLayer
});

const locations = [
  { lat: 40.73061, lng: -73.935242, name: "Fişekhane Grandpera", logo: '/images/delete/tilogo1.webp', image: "/r1.png", link: "https://example.com/chicago", rating: "4.9" },
  { lat: 34.052235, lng: -118.243683, name: "Küçük Çiftlikpark", logo: '/images/delete/tilogo2.webp', image: "/r2.png", link: "https://example.com/chicago", rating: "4.9" },
  { lat: 41.878113, lng: -87.629799, name: "MOI Sahne", logo: "/images/delete/tilogo3.webp", image: '/l3.png', link: "https://example.com/chicago", rating: "4.9" },
];


export default function LocationAccess({ title, subtitle }) {

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);



  return (
    <Box className="justify-center items-center text-center">
      <Title title={title} subtitle={subtitle} />
      {/* <Image src="/images/static/location_access.svg" alt="Konuma İzin Ver" width={300} height={190} /> */}
      {/* <StandartButton title='Konuma İzin Ver' className="mt-5" /> */}
      <div className='w-full relative'>
        <MapContainer center={[40.73061, -73.935242]} zoom={4} style={{ height: "400px", borderRadius:'12px', width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, idx) => (
            <Marker key={idx} position={[location.lat, location.lng]}
              icon={L.icon({
                iconUrl: location.logo,
                iconSize: [40, 40],
                iconAnchor: [40, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })}
            >
              <Popup style={{ minWidth: '400px' }}>
                <div>
                  <h2>{location.name}</h2>
                  <p>Rating: {location.rating}</p>
                  <img src={location.image} alt={location.title} style={{ minWidth: '355px', height: '155px' }} />
                  <p><a href={location.link} target="_blank" rel="noopener noreferrer">Mekana Git</a></p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Box>
  )
}
