import React, {Component} from 'react';
import './App.css';

// Image
import image1 from './images/1.webp';
import image2 from './images/2.webp';
import image3 from './images/3.webp';
import image4 from './images/4.webp';

import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import icon5 from './images/icon5.svg'
import icon6 from './images/icon6.svg'


class App extends Component{
  render(){
    return (
      <div class="galeria">
          <h1>Galeria Efecto Overlay</h1>
          <div class="linea"></div>
          <div class="contenedor-imagenes">
              <div class="imagen">
                  <img src={image1} alt="" />
              </div>
              <div class="imagen">
                  <img src={image2} alt="" />
              </div>
              <div class="imagen">
                  <img src={image3} alt="" />
              </div>
              <div class="imagen">
                  <img src={image4} alt="" />
              </div>


              <div class="imagen">
                  <img src={icon1} alt="" />
              </div>

              <div class="imagen">
                  <img src={icon2} alt="" />
              </div>

              <div class="imagen">
                  <img src={icon3} alt="" />
              </div>

              <div class="imagen">
                  <img src={icon4} alt="" />
              </div>

              <div class="imagen">
                  <img src={icon5} alt="" />
              </div>


              <div class="imagen">
                  <img src={icon6} alt="" />
              </div>
              

              {/** 
                <div class="imagen">
                  <img src={image1} alt="" />
                  <div class="overlay">
                      <h2>Suscribete</h2>
                  </div>
              </div>
                **/}
          </div>
      </div>
    );
  }
}

export default App;
