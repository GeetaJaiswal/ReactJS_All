import React from 'react';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const carousel = {
  height:280,
}

const chevron = {
  fill: "black",
  width: 45,
  height: 60,
}
const Slider = () => {
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide position-sticky" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carousel1} class="d-block w-100" alt="carousel1" style={carousel}/>
            </div>
            <div class="carousel-item">
              <img src={carousel2} class="d-block w-100" alt="carousel2" style={carousel}/>
            </div>
            <div class="carousel-item">
              <img src={carousel3} class="d-block w-100" alt="carousel3" style={carousel}/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <ChevronRightIcon style={chevron}/>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <ChevronLeftIcon style={chevron}/>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </>
    );
}

export default Slider;