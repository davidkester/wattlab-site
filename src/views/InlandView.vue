<script setup>
import solardeckRender from '/src/assets/images/solardeck/solardeck.jpeg';
import bannerVideo from '/src/assets/videos/banner-lq.mp4';

import Intro from '/src/components/inland/Intro.vue';
import BeforeAndAfter from '/src/components/inland/BeforeAndAfter.vue';
import AutonomousEnergy from '/src/components/inland/AutonomousEnergy.vue';
import Results from '/src/components/inland/Results.vue';

import ContactForm from '/src/components/ContactForm.vue';


</script>

<template>  

  <header class="homepage-header" style="min-height: 100vh;">
    
   <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source :src="bannerVideo" type="video/mp4">
   </video>
   
    <Navbar :backgroundColor="''"/>

    <div class="overlay"></div> 
    

    <div class="container" style="padding-top: 10%; padding-bottom: 10%;">
      <div class="">

        <div class="header-text">
          <h1 class="text-white mb-5">Get independent energy production on board with Solar Hatches</h1>
          <div class="text-white my-5" style="line-height: 150%; font-weight: 500; font-size: 1.25rem;">

            Solar Hatches are Aluminium hatches with integrated solar modules that produce sustainable energy for your vessel. 
            <span class="d-none d-lg-inline">Become less dependant on your generator and oil price fluctuations while discovering the joy of turning off your generator.</span><br>
            
          </div>
          <a href="#contact" v-if="false" class="wattlab-btn py-3" role="button" aria-pressed="true" style="max-width: 300px;">Request now a free tailored price indication</a> 

        </div>
      </div>
    </div>


  </header>



  <Intro />
  <BeforeAndAfter />
  <AutonomousEnergy />
  <Results />
  <ContactForm :source="'solarhatch'" :language="'en'"/>

  <Footer />

</template>

<style scoped>

  header video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(102deg, rgba(8, 8, 10, 0.82) 7%, rgba(2, 7, 29, 0.88) 16%, rgba(12, 20, 37, 0.05));
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(102deg, rgba(8, 8, 10, 0.82) 7%, rgba(2, 7, 29, 0.88) 16%, rgba(12, 20, 37, 0.05));
    z-index: 1;
  }

  header .container {
    position: relative;
    z-index: 2;
  }

  p.paragraph { 
    color: rgb(86, 105, 126);
    font-size: 17px;
    line-height: 24px;
    font-weight: 300;
  }


  header {
    position: relative;
    width: 100%;
    overflow: hidden;
  }


  header .homepage-header {
    min-height: 100vh;
    background-color: black;
  }

  

  header .container {
    position: relative;
    z-index: 2;
  }

  /* xl */ 
  @media (min-width: 1200px) { 
    .left-align-container{
      max-width: 550px;
    }
    .title-col{
      min-height: 90px;
    }
    .header-text {
      width: 75%;
    }
    .card-text-container{
      min-height: 180px;
    }
    .card-image-text-image-bottom{
      min-height: 180px;
    }
    .content-col {
      min-height: 172px;
    }
    
  }



</style>

