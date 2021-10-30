import React from 'react';
import './App.css';
import Card from './Components/card/card'
import carImage1 from './assets/images/icon-sedans.svg'
import carImage2 from './assets/images/icon-suvs.svg'
import carImage3 from './assets/images/icon-luxury.svg'


function App() {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", }}>
      <Card
        text="SEDANS"
        classes="card1"
        image={carImage1}
        pera="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city oron your next road trip." />
      <Card
        text="SUVS"
        classes="card2"
        image={carImage2}
        pera="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." />
      <Card 
      text="LUXURY" 
      classes="card3"
       image={carImage3}
       pera="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfor of a luxury rental and arrive in style." />
    </div>
  );
}

export default App;
