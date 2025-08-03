const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.post('/api/weather', async(req,res)=>{
  const {city} = req.body;

  if(!city){
    return res.status(400).json({error: 'City is required'});
  }
  try{
    const geoResponse = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = geoResponse.data;

    if(!geoData.results || geoData.results.length === 0) {
      return res.status(404).json({error:"city not found"});
    }

    const {latitude, longitude} = geoData.results[0];

    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )

    const weatherData = weatherResponse.data.current_weather;

    res.json({weather : weatherData});

  }
  catch(error){
    console.log(error)
    res.status(500).json({error:`Something went wrong on the server`});
  }
})