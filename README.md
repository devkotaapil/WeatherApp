# WeatherApp

WeatherApp is a full-stack web application that allows users to check real-time weather information for any city. It features a React frontend styled with Tailwind CSS and a Node.js/Express backend that fetches weather data from the Open-Meteo API.

## Features

- Search for weather by city name
- Displays temperature, wind speed, and time
- Responsive UI with background images and icons
- Error handling for invalid city names and server issues

## Project Structure

```
WeatherApp/
  ├── public/           # Static assets (images, icons)
  ├── server/           # Express backend
  │   └── index.js      # API server code
  ├── src/              # React frontend
  │   ├── App.jsx       # Main app component
  │   ├── main.jsx      # React entry point
  │   └── index.css     # Tailwind CSS import
  ├── package.json      # Frontend dependencies and scripts
  ├── vite.config.js    # Vite configuration
  └── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed

### Backend Setup

1. Navigate to the `WeatherApp/server` directory:
   ```sh
   cd WeatherApp/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node index.js
   ```
   The server runs on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `WeatherApp` directory:
   ```sh
   cd WeatherApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The app runs on `http://localhost:5173` by default.

## Usage

- Enter a city name in the input field and click "Check".
- Weather details will be displayed below the form.
- If the city is not found or there is a server error, an error message will appear.

## Technologies Used

- React
- Tailwind CSS
- Vite
- Express
- Axios

## License

This project is licensed under the MIT License.

---

**Note:**  
For development, ensure both the frontend and backend servers are running. The frontend communicates with the