import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Tours from "./Components/Tours/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

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
  return (
    <>
      <Navbar />
      <Hero />
      <Tours tours={tours} />
    </>
  );
}

export default App;
