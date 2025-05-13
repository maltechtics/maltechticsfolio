
import React, { useEffect, useRef } from 'react';

const MapLocation: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This would normally use a real map service like Google Maps or Mapbox
    // For this demo, we'll create a static map-like display
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      
      // Set base styling
      mapContainer.style.backgroundImage = "url('https://maps.googleapis.com/maps/api/staticmap?center=Beverly+Hills,CA&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7CChapel+Dr,+Beverly+Hills,+CA&key=YOUR_PLACEHOLDER_KEY')";
      mapContainer.style.backgroundSize = "cover";
      mapContainer.style.backgroundPosition = "center";
      
      // Create location marker
      const marker = document.createElement('div');
      marker.className = 'absolute w-6 h-6 rounded-full bg-wf-red border-2 border-white shadow-lg';
      marker.style.top = '45%';
      marker.style.left = '50%';
      marker.style.transform = 'translate(-50%, -50%)';
      
      // Create pulse effect
      const pulse = document.createElement('div');
      pulse.className = 'absolute w-12 h-12 rounded-full bg-red-400 opacity-40 animate-ping';
      pulse.style.top = '45%';
      pulse.style.left = '50%';
      pulse.style.transform = 'translate(-50%, -50%)';
      
      // Create label
      const label = document.createElement('div');
      label.className = 'absolute bg-white px-2 py-1 rounded shadow text-xs';
      label.textContent = 'Jonathan Roumie';
      label.style.top = '40%';
      label.style.left = '50%';
      label.style.transform = 'translate(-50%, -150%)';
      
      mapContainer.appendChild(pulse);
      mapContainer.appendChild(marker);
      mapContainer.appendChild(label);
    }
  }, []);
  
  return (
    <div className="wf-card space-y-3">
      <h3 className="font-semibold text-wf-navy">Current Location</h3>
      <div 
        ref={mapRef} 
        className="relative w-full h-64 bg-wf-gray rounded overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-wf-gray">
          <div className="text-center">
            <div className="text-sm text-gray-500">Map of Los Angeles area</div>
            <div className="font-medium mt-1">Jonathan Roumie's Location</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Last updated: May 12, 2025 at 10:23 AM
      </div>
    </div>
  );
};

export default MapLocation;
