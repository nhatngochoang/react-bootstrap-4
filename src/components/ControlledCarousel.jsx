
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const image1 = require('../assets/images/lee-1.jpg')
const image2 = require('../assets/images/lee-2.jpg')

export default function ControlledCarousel() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      // console.log(selectedIndex);
   };

   return (
      <div className="container">
         <div style={{ display: 'block', width: 700 }} >
            <a href="https://www.niemvuilaptrinh.com/article/Bootstrap-phan-3">Bootstrap-4</a>
            <h4>React-Bootstrap-5 Carousel Component</h4>
            <a href="https://react-bootstrap.github.io/components/carousel/">Bootstrap-5</a>
            <Carousel
               activeIndex={index} onSelect={handleSelect}
            // fade
            // variant="dark"
            >
               <Carousel.Item interval={1000}>
                  <img
                     className="d-block w-100"
                     src={image1}
                     alt="One"
                  />
                  <Carousel.Caption>
                     <h3>Label for slide 1</h3>
                     <p>Sample Text for Image 1</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={3000}>
                  <img
                     className="d-block w-100"
                     src={image2}
                     alt="Two"
                  />
                  <Carousel.Caption>
                     <h3>Label for slide 2</h3>
                     <p>Sample Text for Image 2</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </div>
      </div>
   );
}