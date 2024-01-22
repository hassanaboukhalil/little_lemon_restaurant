import { useEffect, useState } from "react";

const useFetchAPI = () => {
    const [bookings, setBookings] = useState(
    [
      {
        id: 13,
        date: "",
        time: "",
        table: 3,
        name: "Katherine Gray",
        contact: "katherine@example.com"
      }
    ]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/bookings.json');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setBookings(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    return bookings;
};

export const submitAPI = (formData) => {
  return true;
}

export const fetchAPI = useFetchAPI;

