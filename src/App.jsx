import React, {Component} from 'react';
import './App.css';

// Image
import image1 from './images/1.webp';
import image2 from './images/2.webp';
import image3 from './images/3.webp';
import image4 from './images/4.webp';


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
                  <img src="img/1 (6).jpg" alt="" />
              </div>
              <div class="imagen">
                  <img src="img/1 (7).jpg" alt="" />
              </div>
              <div class="imagen">
                  <img src="img/1 (8).jpg" alt="" />
              </div>
              <div class="imagen">
                  <img src="img/1 (9).jpg" alt="" />
              </div>
              <div class="imagen">
                  <img src="img/1 (10).jpg" alt="" />
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
