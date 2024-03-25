import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [countries, setContries] = useState([]);
  const getCountries = async () => {
    try{
    const data = await fetch("https://restcountries.com/v3.1/all");
    const result = await data.json();
    setContries(result);
    
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  const imageStyle={
    width:"100%",
    height:"100px",
    borderRadius:"10px",
  }
  const containerStyle={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItem:"center",
    height:"100vh"
  }
  const cardStyle={
    width:"200px",
    border:"1px solid #ccc",
    borderRadius:"10px",
    margin:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItem:"center",
  }
  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={country.name.common}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App
