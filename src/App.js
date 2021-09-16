import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Tours from "./Components/Tours/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <>
        <Navbar />
        <Hero />
        <main>
          <div className='title'>
            <h2>No Tours Left</h2>
            <button className='btn' onClick={fetchTours}>
              Refresh
            </button>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Tours tours={tours} {...tours} removeTour={removeTour} />
    </>
  );
}

export default App;
