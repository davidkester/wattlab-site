<script setup>
import { ref, computed, onMounted } from 'vue'

import euLogo from '/src/assets/logos/normal-reproduction-low-resolution.jpg';
import EN_Co_fundedbythe  from '/src/assets/logos/co-funded_EN/horizontal/RGB/PNG/EN_Co-fundedbytheEU_RGB_NEG.png';
import JTFLogo  from '/src/assets/logos/JTF-Logo_RGB_EN_wit.png';
import imoLogo from '/src/assets/images/solardeck/imo-logo.png';
import vertomLogo from '/src/assets/logos/idhxzOXU4x_1745398279432.svg';

import Intro from '/src/components/inland/Intro.vue';
import BeforeAndAfter from '/src/components/inland/BeforeAndAfter.vue';
import AutonomousEnergy from '/src/components/inland/AutonomousEnergy.vue';
import Results from '/src/components/inland/Results.vue';

import ContactForm from '/src/components/ContactForm.vue';
import Cards from '/src/components/Cards.vue';
import SimpleTwoComponent from '/src/components/SimpleTwoComponent.vue';
import SimpleOneComponent from '/src/components/SimpleOneComponent.vue';

import CalendlyComponent from '/src/components/CalendlyComponent.vue';

import anetteUrl from '/src/assets/ms-vertom-annette-impression-full-scale.jpeg';
import solardeckRender from '/src/assets/images/solardeck/solardeck.jpeg';
import solardeckCloseUp from '/src/assets/images/solardeck/closeup.jpg';
import solardeckPilot2MsAnette from '/src/assets/images/solardeck/solardeck-pilot-2-ms-anette.jpeg';

import increaseIcon from '/src/assets/images/solardeck/increaseDayrate.svg';
import regulationsIcon from '/src/assets/images/solardeck/regulations.svg';
import sustainableIcon from '/src/assets/images/solardeck/sustainable.svg';


const headerBackground = computed(() => ({
  backgroundImage: `url(${solardeckRender})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}))

import shortSeaVessel from '/src/assets/images/solardeck/short-sea-vessel.jpg';
const shortSeaBackground = computed(() => ({
  backgroundImage: `url(${shortSeaVessel})`
}))

import vesselRed from '/src/assets/images/solardeck/vessel-red.png';
const vesselRedBackground = computed(() => ({
  backgroundImage: `url(${vesselRed})`
}))

import handySize from '/src/assets/images/solardeck/handy-size-bulk-carrier.png';
const handySizeBackground = computed(() => ({
  backgroundImage: `url(${handySize})`
}))

</script>

<template>  

  <header class="homepage-header" :style="headerBackground">
  
   
    <Navbar :backgroundColor="''"/>

    <div class="overlay"></div> 
    

    <div class="container" style="padding-top: 10%; padding-bottom: 10%;">
      <div class="">

        <div class="header-text">
          <h1 class="text-white mb-5">Solar Flatrack by Wattlab</h1>
          <div class="text-white my-5" style="line-height: 175%; font-weight: 500; font-size: 1.25rem;">

            A cost-effective solar energy system for bulk carriers of all sizes. 
            <span class="d-none d-lg-inline">Cut fuel use, meet regulations, and improve your bottom line—with a return on investment in as little as 2 years.</span><br>
            
          </div>
          <a href="#contact" class="wattlab-btn py-3" role="button" aria-pressed="true" style="max-width: 300px;">Get a quote</a> 


        </div>
      </div>
    </div>


  </header>

  <SimpleTwoComponent>
    <template #header>
    </template>

    <template #col1>
      <h2>Powering the Future of Bulk Dry Cargo</h2>
    </template>

    <template #col2>
      <p style="font-weight: bold;">Solar Flatrack is a proven solar energy solution, now optimized for bulk carriers of all sizes. It offers a sustainable and cost-effective alternative to traditional power sources—enhancing operational efficiency, reducing fuel consumption, and delivering a strong financial return. Now available for both newbuild as well as existing vessels.</p>

      <p>With a return on investment in just 2–5 years, a Solar Flatrack system enables shipowners and operators to meet environmental regulations while improving profitability—without compromising on reliability or performance.</p>
      <a href="#contact" class="wattlab-btn py-3" role="button" aria-pressed="true" style="max-width: 300px;">Contact us</a> 
    </template>
  </SimpleTwoComponent>

  
  


  <Cards>
    <template #header>
      <h2 class="mb-4">Key Benefits</h2>
    </template>

    <template  #col1>
      <h3 class="mb-3 title-col mt-1">Increase Day-Rate</h3>
      <div class="content-col">
        <img href="#" :src="increaseIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
      </div>
    </template>

    <template  #col2>
      <h3 class="mb-3 title-col mt-1">Comply with Regulations</h3>
      <div class="content-col">
        <img href="#" :src="regulationsIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
      </div>
    </template>

    <template  #col3>
      <h3 class="mb-3 title-col mt-1">Excellent Return on Investment</h3>
      <div class="content-col">
        <img href="#" :src="sustainableIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
      </div>
    </template>

  </Cards>




  <SimpleTwoComponent>
    <template #header>
      
    </template>

    <template  #col1>
      <div>
        <h2 class="mb-4">How does it work?</h2>
        <p style="font-weight: bold;">A plug-and-play solar system designed for maritime conditions</p>

        <p>Solar Flatracks deliver clean, reliable energy directly on deck—reducing reliance on auxiliary engines. Built with robust marine-grade materials, the system is designed for fast installation and minimal maintenance.</p>

        <ul>
          <li>Easily implemented on both newbuild and existing vessels</li>
          <li>Installed within 8 hours</li>
          <li>Stackable solution</li>
        </ul>
      </div>

    </template>

    <template #col2>
      <img :src="solardeckPilot2MsAnette" style="width: 100%">
    </template>
  </SimpleTwoComponent>


  



  <div class="container-fluid wattlab-container-white py-5" style="background: rgb(240, 240, 240)">
    <div class="container">

      <div style="text-align:center;">
        <h2 class="pb-4">An All-Round Solution for Dry-Cargo Bulk Carriers</h2>
        <h4 class="pb-4">Carefully designed to fit your vessel and hatches</h4>
      </div>

      <div class="row pt-2">

        <div class="col-lg-4 ">
          <div class="">
            <div class="card-image-container" :style="shortSeaBackground"></div>
            <div class="card-bottom-title">
              <h3 class="m-2">Short-Sea Vessels</h3>
            </div>
          </div>
          
        </div>

        <div class="col-lg-4 ">
          <div class="">
            <div class="card-image-container" :style="handySizeBackground"></div>
            <div class="card-bottom-title">
              <h3 class="m-2">Handy Size Bulk Carriers</h3>
            </div>
          </div>
          
        </div>

        <div class="col-lg-4 ">
          <div class="">
            <div class="card-image-container" :style="vesselRedBackground"></div>
            <div class="card-bottom-title">
              <h3 class="m-2">Deep Sea Vessels</h3>
            </div>
          </div>
          
        </div>

      </div>

<div class="row pt-5">
  <div class="">
      <table>
        <tr>
          <th></th>
          <th class="highlight">Coaster</th>
          <th class="highlight">Handy size</th>
          <th class="highlight">Cape size</th>
        </tr>
        <tr>
          <th>DWAT</th>
          <td class="highlight">7.280 MT</td>
          <td class="highlight">37.000 MT</td>
          <td class="highlight">180.000 MT</td>
        </tr>
        <tr>
          <th>Solar Energy Yield (per year)</th>
          <td class="highlight">76 MWh</td>
          <td class="highlight">344 MWh</td>
          <td class="highlight">791 MWh</td>
        </tr>
        <tr>
          <th>Fuel Savings (per year)</th>
          <td class="highlight">20 MT</td>
          <td class="highlight">20 MT</td>
          <td class="highlight">20 MT</td>
        </tr>
        <tr>
          <th>CO2 Reduction (per Year)</th>
          <td class="highlight">64 MT</td>
          <td class="highlight">308 MT</td>
          <td class="highlight">714 MT</td>
        </tr>
      </table>
      </div>
      </div>

    </div> 
  </div> 

  <SimpleOneComponent v-if="false"> 
    <template #header>
      <h2 class="pb-2 mb-3 mx-auto">Effect on Regulations</h2>
    </template>

    <template #col1>
      <table style="text-align: center;">
          <tbody>
            <tr>
              <td style="font-weight: bold;">
                IMO
              </td>
              <td class="highlight">
                <span class="">⬆️ EEXI Label </span>
              </td>
              <td class="highlight">
                <span class="">⬆️ CII Label</span><br>
              </td>
            </tr>
            <tr>
              <td style="font-weight: bold;">
                 EU
              </td>
              <td class="highlight">
                <span class="">⬇️ Fuel EU Maritime Cost </span>
              </td>
              <td class="highlight">
                <span class="">⬇️ EU ETS Cost </span>
              </td>
            </tr>
          </tbody>
        </table>

    </template>
  </SimpleOneComponent>


  <SimpleOneComponent>
    <template #header>
      <h2 class="pb-2 mb-3 mx-auto">Effect on Regulations</h2>
    </template>

    <template  #col1>
      <div class="mx-auto" style="max-width: 750px;">
        <h3>IMO Regulations</h3>

        <ul>
          <li><span style="font-weight: bold;">Improves EEXI rating: </span> SolarDeck reduces overall fuel consumption, which leads to a better <a href="https://www.imo.org/en/MediaCentre/HotTopics/Pages/EEXI-CII-FAQ.aspx" target="_blank" rel="noopener noreferrer">Energy Efficiency Existing Ship Index (EEXI)</a> score.</li>
          <li><span style="font-weight: bold;">Improves CII rating: </span> By enabling ships to operate with lower emissions, the <a href="https://www.imo.org/en/MediaCentre/HotTopics/Pages/EEXI-CII-FAQ.aspx" target="_blank" rel="noopener noreferrer">Carbon Intensity Indicator (CII)</a> rating improves over time.</li>
        </ul>

         <h3>EU Regulations</h3>

         <ul>
        <li><span style="font-weight: bold;">Reduces FuelEU Maritime compliance costs: </span> By using solar power, the dependency on fossil fuels decreases, helping to meet the renewable energy targets under the <a href="https://transport.ec.europa.eu/transport-modes/maritime/decarbonising-maritime-transport-fueleu-maritime_en" target="_blank" rel="noopener noreferrer">FuelEU Maritime</a> regulation and reducing penalties.</li>
        <li><span style="font-weight: bold;">Lowers EU ETS costs: </span> Less fuel use equals fewer CO₂ emissions, which directly reduces the number of allowances required under the <a href="https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en" target="_blank" rel="noopener noreferrer">EU Emissions Trading System</a>.</li>
        </ul>
      </div>

    </template>

    <template #col2>
     
    </template>
  </SimpleOneComponent>

  <ContactForm :source="'solardeck'" :language="'en'"/>


    <div class="container-fluid wattlab-container" id="voordelen" style="background-color: rgb(17,36, 77); color: rgb(17,36, 77);">
      <div class="container" style="max-width: 700px;">
        <div style="text-align:center;">
          <h3 class="pb-2 mb-3 mx-auto text-white"></h3>
        </div>

        <div class="row">
          <div class="col align-self-center">
            <img :src="EN_Co_fundedbythe" alt="Co-funded by the European Union" style="width: 100%;">
          </div>
          <div class="col align-self-center">
            <img :src="JTFLogo" alt="JTF - Just Transition Fund" style="width: 100%;">
          </div>

        </div>

        <div class="row">
          <div style="text-align: center; color: white; font-weight: lighter;">
          The project ‘PV Systems for Seagoing Vessels’ focuses on the development and demonstration of an innovative Solar Deck solution. This project is co-funded by the European Union through the Just Transition Fund (JTF)
          </div>
        </div>

      </div> <!-- End container -->
    </div> <!-- End container-fluid -->

 

  <Footer />

</template>

<style scoped>

  .card-bottom-title {
    background-color: white;
    text-align: center;
    margin-left: 25px;
    margin-bottom: 10px;
    margin-right: 25px;
    border-radius: 0 0 25px 25px;
    padding: 10px;
  }



  .arrow-up, .arrow-down {
    font-size: 1.4em;
  }

  .arrow-up::after {
    content: " \2191"; /* Unicode up arrow */
    font-size: 2em;
  }
  .arrow-down::after {
    content: " \2193"; /* Unicode up arrow */
    font-size: 2em;
  }

  table {
    min-width:50%;
    font-size: 20px;
    margin: 0 auto;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

    th, td {
      padding: 15px 18px;
      text-align: left;
      border-bottom: 1px solid rgba(121, 153, 173, 1);
    }

    th {
      background-color: #f2f2f2;
      color: #333;
    }

    tr:hover {
      background-color: #f9f9f9;
    }

    td {
      color: #555;
    }

    .highlight {
      font-weight: bold;
    }

    tr:last-child td, tr:last-child th   {
      border-bottom: none;
    }


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

