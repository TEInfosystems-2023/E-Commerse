import "./LocationModal.css";
import { useState } from "react";
import { MapPin, Home, Navigation } from "lucide-react";

interface Props {
  onClose: () => void;
}

const LocationModal = ({ onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();

          const detectedCity =
            data.city || data.locality || data.principalSubdivision;

          localStorage.setItem("userCity", detectedCity || "Unknown");

          window.dispatchEvent(new Event("storage"));
          onClose();
        } catch {
          alert("Failed to fetch location");
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("Allow location access");
        setLoading(false);
      }
    );
  };

  const handleSave = () => {
    if (!city.trim()) {
      alert("City is required");
      return;
    }

    localStorage.setItem("userCity", city);
    localStorage.setItem("userAddress", address);

    window.dispatchEvent(new Event("storage"));
    onClose();
  };

  return (
    <div className="location-overlay">
      <div className="location-box">

        <h2>Select Delivery Location</h2>
        <p className="subtitle">
          Choose your location for faster delivery
        </p>

        {/* GPS */}
        <div className="gps-box" onClick={handleCurrentLocation}>
          <Navigation size={18} />
          <span>{loading ? "Detecting..." : "Use Current Location"}</span>
        </div>

        <div className="divider">
          <span>OR ENTER MANUALLY</span>
        </div>

        {/* FORM */}
        <div className="form-group">
          <label>
            <MapPin size={16} /> City
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <Home size={16} /> Full Address
          </label>
          <textarea
            placeholder="House no, street, landmark..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button className="save-btn" onClick={handleSave}>
            Save Address
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default LocationModal;