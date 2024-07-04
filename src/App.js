import React, { useState, useEffect } from "react";
import "../App.css";
import reviews from "../data";
import Testimonials from "../components/Testimonials";
import Spinner from "../components/Spinner";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },2000);
  },[]);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] p-6 max-h-fit justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-1 w-1/5 mt-1 mx-auto"></div>
        {loading ? <Spinner /> : <Testimonials reviews={reviews} />}
      </div>
    </div>
  );
}

export default App;
