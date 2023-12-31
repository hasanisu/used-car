import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Advertisement = ({ allCars }) => {



  return (
    <div>
      <h2 className='text-center underline uppercase font-bold mb-2 text-red-800'>Advertisement</h2>
      {
      allCars.length > 0 && 
      <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
    >
      
      
      {
        allCars.map(car => 
          
            <div data-src={car.productStatus === 'add-in-house' && car.carImage}/>
          
      
          )
      }
    </AutoplaySlider>
    }
    </div>
  );
};

export default Advertisement;