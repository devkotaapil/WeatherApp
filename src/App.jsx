import { useState } from "react";

function App(){
  const [city,setCity] = useState('');

  const handleCityInput = (e) =>{
    const newCity = e.target.value;
    setCity(newCity);
  }
  
  return (
    <div className="flex justify-center items-center text-center flex-col  h-screen bg-[url(/newyork.jpg)] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center ring-4 ring-blue-500 p-20 bg-blue-400 rounded-md shadow-blue-xl/30">
        <h2 className="text-white text-2xl mb-2">The Ultimate Weather App</h2>
        <img src="/cloudy.png" alt="cloudy png" className="h-30" />
        <h3 className="text-white text-xl p-2">Enter your City</h3>
        <input type="text"
        value={city}
        onChange={handleCityInput} 
        className="border border-white shadow-2xs rounded-md text-white active:border-white"/>
        <button className="border border-white hover:cursor-pointer text-white p-2 m-2 rounded-md w-20 hover:bg-blue-700">Check</button>
      </div>
      <div className="mt-6 p-4  rounded shadow w-full max-w-md">
        <p className="text-white text-2xl"></p>
      </div>

    </div>
  )
}

export default App