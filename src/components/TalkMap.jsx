import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon not showing correctly in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const TalkMap = ({ talks }) => {
  const defaultPosition = [20, 0]; // Centered on the world

  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
      <MapContainer center={defaultPosition} zoom={2} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {talks?.map((talk, idx) => (
          <Marker key={idx} position={[talk.lat, talk.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-[var(--text-h)]">{talk.title}</h3>
                <p className="text-sm text-[var(--text)]">{talk.location}</p>
                <p className="text-xs text-[var(--text)] mt-1">{talk.date}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TalkMap;
