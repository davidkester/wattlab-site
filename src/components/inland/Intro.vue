<script setup>

import { ref, computed } from 'vue'

import mededinger from '/src/assets/images/inland/ms-mededinger-at-blommaert.jpeg';
import elTeide from '/src/assets/images/inland/ms-el-teide-maashaven.jpeg';
import schuifluikConnector from '/src/assets/images/inland/ms_mededinger_solarluik_connector.jpg';

const mededingerBackground = computed(() => ({
  backgroundImage: `url(${mededinger})`
}))

const elTeideBackground = computed(() => ({
  backgroundImage: `url(${elTeide})`
}))

const schuifluikConnectorBackground = computed(() => ({
  backgroundImage: `url(${schuifluikConnector})`
}))


</script>

<template>

  <div class="container-fluid wattlab-container" id="voordelen" style="background-color: rgb(240, 240, 240); color: rgb(17,36, 77);">
    <div class="container">

      <div class="row">

        <div class="col-lg p-2 py-lg-0 px-lg-3">
          <div class="wattlab-card-round p-4">
            <h3 class="mb-3 title-col mt-1">Say goodbye to heavy shore power cables and generator noise</h3>
            <div class="content-col">
              Forget the hassle of shore power cables or an idling generator. Enjoy quiet days without a generator while autonomously feeding your hotel load with energy from the sun.
            </div>
            
          </div>
          <div class="card-image-container" :style="mededingerBackground"></div>
        </div>

        <div class="col-lg p-2 py-lg-0 px-lg-3 mt-3 mt-lg-0">
          <div class="wattlab-card-round p-4">
            <h3 class="mb-3 title-col mt-1">Get used to generate power for now and later and at the same time save money</h3>
            <div class="content-col">
              Enjoy a return on investment with no hidden costs. Stop paying fluctuating fuel prices and benefit from the many subsidies available for purchasing Solar Hatches.
            </div>
            
          </div>
          <div class="card-image-container" :style="elTeideBackground"></div>
        </div>

        <div class="col-lg p-2 py-lg-0 px-lg-3 mt-3 mt-lg-0">
          <div class="wattlab-card-round p-4">
            <h3 class="mb-3 title-col">Get the most out of your aluminium hatches with solar modules</h3>
            <div class="content-col">
              Whether you have sliding hatch or Frisian-style hatch covers, we have a solution that fits. Solar Hatches are easy to install, cost-effective, and resistant to the elements.
            </div>
            
          </div>
          <div class="card-image-container" :style="schuifluikConnectorBackground"></div>
        </div>

      </div>

    </div> <!-- End container -->
  </div> <!-- End container-fluid -->

</template>



<style scoped>



</style>
