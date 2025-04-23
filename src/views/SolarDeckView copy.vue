<script setup>
import solardeckRender from '/src/assets/images/solardeck/solardeck.jpeg';
import solardeckCloseUp from '/src/assets/images/solardeck/closeup.jpg';
import solardeckPilot2MsAnette from '/src/assets/images/solardeck/solardeck-pilot-2-ms-anette.jpeg';

import euLogo from '/src/assets/images/solardeck/eu-logo.png';
import imoLogo from '/src/assets/images/solardeck/imo-logo.png';

import increaseIcon from '/src/assets/images/solardeck/increaseDayrate.svg';
import regulationsIcon from '/src/assets/images/solardeck/regulations.svg';
import sustainableIcon from '/src/assets/images/solardeck/sustainable.svg';

</script>

<template>  

  <Navbar/>

  <div class="main-container">

    <div class="container pt-5">

      <div class="row">
        <h1>Revolutionize Yout Fleet with SolarDeck</h1>
        <div >Utilize Solar Power for Cost-Efficient and Sustainable Short-Sea Shipping</div>
        
        <div class="p-4">
          <img href="#" :src="solardeckRender" style="width: 100%">
        </div>

        <small>SolarDeck on a Multi Purpose Cargo Vessel</small>
      </div>

      <hr>

      <div class="row py-5" >
        <h2>Key Benefits</h2>

        <div class="col-4" style="position: relative;">
          <img href="#" :src="increaseIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
          <div class="label-card">Increase Dayrate</div>
        </div>

        <div class="col-4">
          <img href="#" :src="regulationsIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
          <div class="label-card">Comply with Regulations</div>
        </div>

        <div class="col-4">
          <img href="#" :src="sustainableIcon" style="margin-right:auto; margin-left:auto; width:40%;display:block">
          <div class="label-card">Excellent RIO</div>
        </div>      
      </div>

      <div class="row">
       
        <div class="col-sm-6  p-4">
          <p>Introducing SolarDeck- a proven solution, now tailored for short-sea shipping.</p>

          <p>SolarDeck provides a sustainable, cost-effective alternative to traditional power sources, enhancing your operational efficiency while reducing environment impact and generating an attractive financial return.</p>
        </div>

        <div class="col-sm-6 p-4">
          <img href="#" :src="solardeckPilot2MsAnette" style="width: 100%">
        </div>
    
      </div>

      <hr>

      <div class="row py-5">
        <h2>Effect on Regulations</h2>  

        <table>
          <tbody>
            <tr>
              <td style="border-right: 2px solid #ccc;">
                <img :src="imoLogo" alt="IMO Logo" style="height: 50px;">
              </td>
              <td>
                <span class="arrow-up">EEXI Label</span>
              </td>
              <td>
                <span class="arrow-up">CII Label</span><br>
              </td>
            </tr>
            <tr>
              <td style="border-right: 2px solid #ccc;">
                 <img :src="euLogo" alt="EU Logo" style="height: 50px;">
              </td>
              <td>
                <span class="arrow-down">Fuel EU Maritime Cost</span>
              </td>
              <td>
                <span class="arrow-down">EU ETS Cost</span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <hr>

      <div class="row py-5">
        

        <div class="col-sm-5 p-4">

          <h2>SolarDeck Facts</h2>  

          <ul>
            <li>ROI 2-5 years</li>
            <li>IRR of 25%</li>
            <li>Installed in 8 hours</li>
            <li>Annual energy production of 106 MWH</li>
            <li>Yearly fuel reduction of 30 mt</li>
            <li>Yearly C02 reduction of 96 mt</li>
            <li>Easily implemented on both newbuild and existing vessels</li>
            <li>Simple to operate</li>
            <li>Live data insights</li>
          </ul>

          <small>Based on MS Vertom Anette</small>

        </div>

        <div class="col-sm-7 p-4">
          <img href="#" :src="solardeckCloseUp" style="width: 100%">
        </div>

        

      </div>

    </div>
  </div>



  <Footer />


</template>

<style scoped>

  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 8px 12px;
    text-align: center;
  }

  th {
    font-weight: bold;
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

  ul {
    list-style: none;
    font-size: 1.1em;
  }

  ul li:before {
    content: '✓ ';
  }

  .main-container {
    min-height: 100%;
    
    color: #ffffff;
  }

  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }


  h2 {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  .label-card {
    text-align: center;
    font-size: 1.5em;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  hr {
    opacity: 1;
  }

  p {
    font-size: 1.2em;
  }

</style>

