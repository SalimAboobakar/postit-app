import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "at_BgPFMRAHR1bJ7CyE8VxyMOPIqDsNF"; // Your API key

const Location = () => {
  const [ip, setIp] = useState(null); // State to hold the IP address
  const [geoData, setGeoData] = useState(null); // State to hold geolocation data

  // Fetch the IP address
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
    }
  };

  // Fetch geolocation data based on the IP
  const getGeoLocationData = async () => {
    if (!ip) return;

    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
      );
      setGeoData(response.data);
      console.log("GeoLocation Data:", response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, []);

  useEffect(() => {
    if (ip) {
      getGeoLocationData();
    }
  }, [ip]);

  return (
    <div className="location">
      <h2>Location Information</h2>

      {ip ? (
        <p>
          <strong>IP Address:</strong> {ip}
        </p>
      ) : (
        <p>Loading IP address...</p>
      )}

      {geoData ? (
        <div>
          <p>
            <strong>Country:</strong> {geoData.location.country}
          </p>
          <p>
            <strong>Region:</strong> {geoData.location.region}
          </p>
          <p>
            <strong>City:</strong> {geoData.location.city}
          </p>
          <p>
            <strong>Timezone:</strong> {geoData.location.timezone}
          </p>
          <p>
            <strong>ISP:</strong> {geoData.isp}
          </p>
        </div>
      ) : (
        <p>Loading Geolocation Data...</p>
      )}
    </div>
  );
};

export default Location;
