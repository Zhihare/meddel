import { getGeocode } from "use-places-autocomplete";

 const defoultCenter = {
  lat: 50.45,
  lng: 30.60
};

export const getBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude: lat, longitude: lng } = pos.coords;
                    resolve({ lat, lng });
                },
                () => {
                    reject(defoultCenter);
                });
        } else {
            reject(defoultCenter);
        }
    })
}

export async function fetchAddress({lat, lng}) {
      try {
        const results = await getGeocode({ location: { lat: lat, lng: lng } });
          const { formatted_address } = results[0]; 
          return formatted_address;
      } catch (error) {
        console.error('Помилка отримання адреси:', error);
      }
    }
