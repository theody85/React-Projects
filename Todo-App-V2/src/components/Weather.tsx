import { useState, useEffect } from 'react';

const Weather = () => {
  const [lat, setLat] = useState<Number | []>([]);
  const [long, setLong] = useState<Number | []>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log('Latitude is:', lat);
    console.log('Longitude is:', long);
  }, [lat, long]);
};
export default Weather;
