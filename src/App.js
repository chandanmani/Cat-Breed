import React, { useState} from "react";
import CatDetail from "./Components/CatDetail";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Inputbar from "./Components/Inputbar";
import Navbar from "./Components/Navbar";

function App() {
  const api_key = process.env.REACT_APP_API_KEY
  const [data, setData] = useState([]); // Initialize as an empty array
  const [value, setValue] = useState(""); // Input value

  // Fetch data based on the current 'value' state
  const handleFetchData = async () => {
   
 // Prevent empty queries
    const api_url = `https://api.api-ninjas.com/v1/cats?name=${value}`;
    
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "X-Api-Key": api_key,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result); // Set the response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data whenever 'value' changes
 

  return (
    <div>
      <Navbar />
      <Header />
      <Inputbar value={value} setValue={setValue} click={handleFetchData} /> {/* Pass value and setValue as props */}
      <div>
        {data.map((cat, index) => (
          <CatDetail
            key={index}
            name={cat.name}
            image={cat.image_link}
            origin={cat.origin}
            max_life_expectancy={cat.max_life_expectancy}
            weight={cat.max_weight}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
