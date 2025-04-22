<script setup>

import { ref, computed } from 'vue'
import { useRouter, RouterView } from 'vue-router';

import heliosUrl from '/src/assets/ms-helios-proefvaart-53.jpg';
import anetteUrl from '/src/assets/ms-vertom-annette-impression-full-scale.jpeg';
import wattlabUrl from '/src/assets/logo-white.svg';
import GWR from '/src/assets/logos/GWR_RecordHolder-Ribbon-SingleColour_White-TM-RGB.png';
import MIA from '/src/assets/logos/maritime_award_logo_white.png';


import newsRoom from '/src/assets/news.json';

const heliosBackground = computed(() => ({
  background: `url(${heliosUrl})`
}))

</script>

<template>  


  <header class="header-newsroom">


   <nav class="navbar navbar-expand-lg navbar-light font-regular navbar-inverse">
      <div class="px-4 container">

      <a class="navbar-brand" id="nav-homepage" href="/">
        <div class="my-3 mx-1">
          <svg version="1.1" viewBox="0 0 331.42 64.75" height=30 xmlns="http://www.w3.org/2000/svg">
            <polygon transform="translate(-35.54,-34.11)" points="96.89 88.86 105.92 88.83 69.68 70.17 45.54 76.75 69.06 88.83 78.22 88.82 59.7 79.28 71.86 75.91" style="fill:#167dde"/>
            <polyline transform="translate(-35.54,-34.11)" points="96.63 58.02 78.14 65.91 78.24 88.79 69.06 88.83 68.99 59.83 105.92 44.11 105.92 88.83 96.85 88.84 96.63 57.97" style="fill:#fff"/>
            <path d="m84.93 22.47h6.4l5 18.71 0.72 3.45h0.36l0.94-3.45 4.61-14.41h5.64l4.65 14.41 0.9 3.4h0.31l0.68-3.4 4.65-18.71h6.4l-8.5 32.05h-5.82l-5-15.44-0.94-3.54h-0.36l-0.94 3.54-5 15.44h-5.82z" style="fill:#fff"/>
            <path d="m142.82 22.47h6.89l12 32.05h-6.67l-2.58-7.63h-12.37l-2.63 7.63h-6.67zm7.64 18.84-2.87-8-1.13-3.9h-0.36l-1.16 3.89-2.86 8z" style="fill:#fff"/>
            <path d="m173.74 54.52v-26.32h-8.95v-5.73h23.94v5.73h-9v26.32z" style="fill:#fff"/>
            <path d="m205.03 54.52v-26.32h-8.95v-5.73h23.94v5.73h-8.95v26.32z" style="fill:#fff"/>
            <path d="m231.08 22.47h6v26.32h13.56v5.73h-19.6z" style="fill:#fff"/>
            <path d="m270.31 22.47h6.89l12 32.05h-6.67l-2.6-7.63h-12.35l-2.64 7.66h-6.67zm7.65 18.84-2.86-8-1.17-3.89h-0.35l-1.12 3.88-2.86 8z" style="fill:#fff"/>
            <path d="m297.9 22.47h12.56a11.22 11.22 0 0 1 3.84 0.65 10.06 10.06 0 0 1 3.09 1.77 8.62 8.62 0 0 1 2.07 2.68 7.34 7.34 0 0 1 0.76 3.27 7.19 7.19 0 0 1-1.23 4.28 8 8 0 0 1-3.07 2.61v0.36a8.72 8.72 0 0 1 4 2.8 7.39 7.39 0 0 1 1.5 4.72 8.08 8.08 0 0 1-0.83 3.69 8.5 8.5 0 0 1-2.26 2.8 10.25 10.25 0 0 1-3.36 1.79 13 13 0 0 1-4.1 0.63h-13zm12.08 13.07a4.38 4.38 0 0 0 3.24-1.14 3.79 3.79 0 0 0 0-5.39 4.17 4.17 0 0 0-3.06-1.12h-6.22v7.65zm0.67 13.43a4.89 4.89 0 0 0 3.49-1.14 3.86 3.86 0 0 0 1.21-2.94 4 4 0 0 0-1.23-3 5.07 5.07 0 0 0-3.66-1.16h-6.53v8.24z" style="fill:#fff"/>
          </svg>
        </div>
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto my-3 mb-lg-0">
        </ul>
      </div>
      </div>
    </nav>

    <div class="container">
      <div class="px-4">
        <div class="header-text">
          <h1 class="text-white pt-5">Newsroom</h1>
          <div class="text-white py-5" style="line-height: 150%; font-weight: 500; font-size: 1.25rem; ">
            Een verzameling van het meest recente nieuws, persvermeldingen en media-items.<br>
          </div>
        </div>
      </div>
    </div>


  </header>



  <div class="container-fluid py-5" id="product-groups" style="background-color: rgb(240, 240, 240); border-top: 1px solid rgba(52, 66, 104, 0.07); border-bottom: 1px solid rgba(52, 66, 104, 0.07);">
      <div class="container my-5">

        <h2 style="text-align: center;" class="mb-5">Laatste nieuws</h2>

          <div class="row" v-for="(item, index) in newsRoom">


            <div class="col-md card-image my-3 mx-md-3">
              <a style="text-decoration: none;" href="/nl/newsroom/2021/06/nieuwe-stap-in-verduurzaming-binnenvaart">
              <div class="card-image-container" style="background-image: url('/src/assets/ms-helios-proefvaart-53.jpg');">
              </div>
              <div class="card-text-container">
                <h3 class="subtitle category_release">{{ item.type }}</h3>
                <div class="category-eyebrow__date">{{ item.date }}</div>
                <div class="card-title mb-2">{{ item.title }}</div>
                <div class="content-col">
                  {{ item.intro }}
                </div>
                
              </div>
              </a>
            </div>

          </div>

          <div class="row">

            <div class="col-md card-image my-3 mx-md-3">
              <a style="text-decoration: none;" href="/nl/newsroom/2021/06/nieuwe-stap-in-verduurzaming-binnenvaart">
              <div class="card-image-container" style="background-image: url('/src/assets/ms-helios-proefvaart-53.jpg');">
              </div>
              <div class="card-text-container">
                <h3 class="subtitle category_release">Persbericht</h3>
                <div class="category-eyebrow__date">24 juni 2021</div>
                <div class="card-title mb-2">Nieuwe stap in verduurzaming binnenvaart</div>
                
              </div>
              </a>
            </div>
            
            <div class="col-md card-image my-3 mx-md-3">
              <a style="text-decoration: none;" href="/nl/newsroom/2021/06/nieuwe-stap-in-verduurzaming-binnenvaart">
              <div class="card-image-container" style="background-image: url('/src/assets/ms-helios-proefvaart-53.jpg');">
              </div>
              <div class="card-text-container">
                <h3 class="subtitle category_release">Persbericht</h3>
                <div class="category-eyebrow__date">24 juni 2021</div>
                <div class="card-title mb-2">Nieuwe stap in verduurzaming binnenvaart</div>
                
              </div>
              </a>
            </div>

            <div class="col-md card-image my-3 mx-md-3">
              <a style="text-decoration: none;" href="/nl/newsroom/2020/11/zonnepanelen-voor-de-binnenvaart">
                <div style="">
                  <div class="card-image-container" style="background-image: url('/src/assets/ms-helios-proefvaart-53.jpg');">
                  </div>
                </div>
                <div class="card-text-container">
                  <h3 class="subtitle category_release">Persbericht</h3>
                  
                  <div class="card-title mb-2">Zonnepanelen voor de binnenvaart: van vrachtschepen tot varende zonneparken</div>
                  <div class="category-eyebrow__date">16 november 2020</div>
                  <div class="content-col">
                    Enjoy a return on investment with no hidden costs. Stop paying fluctuating fuel prices and benefit from the many subsidies available for purchasing Solar Hatches.
                  </div>
                  
                </div>
              </a>
            </div>
            
        

          </div>
    </div> <!-- End container -->
  </div>


  <Footer />


</template>

<style scoped>

  .header-newsroom {
    background-color: rgb(17,36, 77);
  }

  .title-col {
    color: rgb(17, 36, 77);
    font-size: 24px;
    line-height: 30px;
  }

  @media (min-width: 980px) {
    .image-big .component-content {
      width: 980px;
    }
  }

  @media (max-width: 980px) {
    .image-big .component-content {
      width: 100%;
    }
  }

  .component {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .pagetitle.component {
    margin-top: 0;
    margin-bottom: 0;
  }

  .pagebody-copy {
    margin-bottom: 1.47059em;
  }



  .component-content {
    margin-left: auto;
    margin-right: auto;
    width: 653px;
  }

  .component {
    margin-left: auto;
    margin-right: auto;
    width: 980px;
  }

  .image-wide .component-content {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .image.image-wide {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
  }

    /* On screens that are 992px wide or less, go from four columns to two columns */
  @media screen and (max-width: 992px) {
    .component-content {
      width: 90%;
    }
   .component {
      width: 100%;

    }
  }

  .category_release {
    color: #DA0F47;
    border-color: #DA0F47;
  }

 


  .header-newsroom {
    background-color: rgb(17,36, 77);
  }

  .article-img-holder {
    transition: transform .4s ease-in-out;
  }

  .article-img-holder:hover {
    transform: scale(1.05);
  }

  .image {
    position: relative;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .zoom-in::after,
  .zoom-out::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .zoom-in:focus::after, .zoom-in:hover::after {
    transform: scale(1.05);
  }

  .zoom-out::after {
    transform: scale(1.05);
  }
  .zoom-out:focus::after, .zoom-out:hover::after {
    transform: scale(1);
  }



  .wattlab-btn {
      height: 50px;
      padding: 14px 50px;
      border-radius: 25px;
      background-color: #ffbe00;
      -webkit-transition: background-color 300ms ease;
      transition: background-color 300ms ease;
      font-size: 16px;
      text-align: center;
      color: white;
      border: 0;
      line-height: inherit;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
  }

  .wattlab-btn:hover {
    color: white;
    background-color: #df9d0e;
    background-image: -webkit-gradient(linear, left top, left bottom, from(hsla(0, 0%, 100%, 0.15)), to(hsla(0, 0%, 100%, 0.15)));
    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.15), hsla(0, 0%, 100%, 0.15));
  }

  .card-image {
    padding: 0px !important;
    
      top: 0;
      left: 0;
      background-color: rgba(255,255,255,1) !important;
      -moz-box-shadow: 0 0 3px #ccc;
      -webkit-box-shadow: 0 0 3px #ccc;
      box-shadow: 1 1 3px #ccc;
      -webkit-transition: box-shadow 200ms ease;
      transition: box-shadow 200ms ease;
  }

  .card-image:hover {
    box-shadow: 2px 0 24px 1px rgb(0 0 0 / 18%);
  }



  .text-card-image {
      padding: 25px;
      /* margin-bottom: 45px; */
  }


  .card-image-container {
    display: inline-block;
    width: 100%;
    height: 300px;
    background-position: 50% 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transition: background 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
      transition: background 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
  }


  .card-title {
      color: rgb(41, 51, 78);
      font-size: 24px;
      line-height: 30px;
      text-align: left;
      font-family: 'ProductSans' !important;
      font-weight: bold;
  }

  .card-text {
    font-family: 'AirbnbCereal' !important;
    margin-top: 7px;
    padding-right: 35px;
    padding-bottom: 20px;
    padding-left: 35px;
    color: rgb(86, 105, 126);
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    font-weight: 300;
    text-align: left;
  }

  p.paragraph { 
    color: rgb(86, 105, 126);
      font-size: 17px;
      line-height: 24px;
      font-weight: 300;
  }

  label {
    font-family: 'ProductSans', sans-serif;
    color: rgb(17, 36, 77);
    font-size: 16px;
  }


  li {
    margin-left: 9px;
      font-weight: 300;
      text-align: left;
      color: rgb(49, 59, 83);
    }

    @media (min-width: 1080px) {
    .header-text {
      width: 75%;
    }
    .card-text-container{
      min-height: 180px;
    }
  } 

  .card-text-container{
    padding: 24px;
    color: #212529;
  }


  .subtitle {
    text-transform: uppercase;
    font-family: 'ProductSans' !important;
    font-weight: bold;
    color: rgb(10, 24, 51) !important;
    font-size: 12px !important;
    letter-spacing: 3px !important;
  }


  .category-eyebrow__date {
    font-family: 'AirbnbCereal' !important;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .category_release {
      color: #DA0F47;
      border-color: #DA0F47;
  }



</style>

