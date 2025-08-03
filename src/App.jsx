
import { useState } from "react";

function App(){
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState('');

  const getWeather = async ()=>{
    try{
      setError('');
      setWeather(null);

      const response = await fetch('http://localhost:5000/api/weather',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({city}),
      });
      
      const data = await response.json();

      if(data.error){
        setError(data.error);
      }
      else{
        setWeather(data.weather);
      }
    }catch(error){
      console.log(error)
      setError('Something went wrong in the server');
    }
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(city.trim()){
       getWeather();
    }
   
  }
  
  return (
    < div className="flex justify-center items-center text-center flex-col  h-screen bg-[url(/newyork.jpg)] bg-cover bg-no-repeat">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ring-4 ring-blue-500 p-20 bg-blue-400 rounded-md shadow-blue-xl/30">
        <h2 className="text-white text-2xl mb-2">The Ultimate Weather App</h2>
        <img src="/cloudy.png" alt="cloudy png" className="h-30" />
        <h3 className="text-white text-xl p-2">Enter your City</h3>
        <input type="text"
        onChange={(e)=>setCity(e.target.value)}
        value={city}
        className="border border-white shadow-2xs rounded-md text-white active:border-white"/>
        <button className="border border-white hover:cursor-pointer text-white p-2 m-2 rounded-md w-20 hover:bg-blue-700">Check</button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-amber-50 p-4 rounded shadow mt-4 text-center">
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
          <p>🕓 Time: {weather.time}</p>
        </div>
      )}
    </div>
  )
}

export default App