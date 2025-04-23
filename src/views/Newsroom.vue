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

   <Navbar :backgroundColor="'rgb(17,36, 77)'"/>

    <div class="container">
      <div class="px-4">
        <div class="header-text">
          <h1 class="text-white pt-5">Newsroom</h1>
          <div class="text-white py-5" style="line-height: 150%; font-weight: 500; font-size: 1.25rem; ">
            A collection of the most recent news, press mentions, and media items.<br>
          </div>
        </div>
      </div>
    </div>


  </header>


  <div class="container-fluid py-5" id="product-groups" style="background-color: rgb(240, 240, 240); border-top: 1px solid rgba(52, 66, 104, 0.07); border-bottom: 1px solid rgba(52, 66, 104, 0.07);">
      <div class="container my-5">

        <h2 style="text-align: center;" class="mb-5">Latest news</h2>

          <div class="row" >
            <template v-for="(item, index) in newsRoom">

            <div class="col-md card-image my-3 mx-md-3">
              <a style="text-decoration: none;" :href="`/en/newsroom/${item.year}/${item.month}/${item.url}`">
              <div class="card-image-container" v-if="false" style="background-image: url('/src/assets/ms-helios-proefvaart-53.jpg');"></div>
              <div class="card-text-container">
                <h3 class="subtitle category_release">{{ item.type }}</h3>
                <div class="category-eyebrow__date">{{ item.date }}</div>
                <div class="card-title mb-2">{{ item.title }}</div>
                <div class="content-col">{{ item.intro }}</div>
              </div>
              </a>
            </div>
          </template>

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

