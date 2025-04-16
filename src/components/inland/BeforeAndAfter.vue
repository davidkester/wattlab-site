<script setup>

import { ref, computed } from 'vue'

import kenyroUrl from '/src/assets/images/inland/ms_kenyro_topview.jpg';

const kenyroBackground = computed(() => ({
  backgroundImage: `url(${kenyroUrl})`,
  backgroundSize: ' 100% 100%',
  backgroundPosition: 'center',
}))

</script>

<template>

  <div class="container-fluid wattlab-container" :style="kenyroBackground">
    <div class="container">

        <div class="mb-4" style="text-align: center;">
          <h2 class="pb-2 text-white">Before and After</h2>
          <h3 class="mb-5 mt-1 text-white">Don't miss out!</h3>
        </div>


      <div class="row mx-auto" style="max-width: 850px; ">

        <div class="col-lg px-1 px-lg-2 py-1 py-lg-0 me-0 me-lg-3" style="border-radius: 25px; background-color: rgba(247, 247, 247, 0.95); color: rgb(17,36, 77);">
          <div class="p-3 p-lg-5">
            <h4>Before Solar hatches</h4>
            <div class="pt-3">
              “We find the noise and smell of generators annoying as well as dragging heavy shore power cables”
            </div>
            <div class="pt-3">
              “You depend heavily on fuel providers and faulty shore power points”
            </div>
            <div  class="pt-3">
              “It's a shame to waste fuel or pay shore power while the sun shines for free on our hatches”
            </div>
            <div class="pt-3">
              “We feel uncomfortable running the generator near residents on the land”
            </div>
          </div>
        </div>

        <div class="col-lg px-1 px-lg-2 py-1 py-lg-0 mt-5 mt-lg-0 ms-0 ms-lg-3" style="border-radius: 25px; background-color: rgba(18, 111, 195, 0.9); color: white;">
          <div class="p-3 p-lg-5">
            <h4 class="text-white">After Solar hatches</h4>
            <div class="pt-3">
              “The generator has not been running for weeks and we can easily go away for a weekend leaving the ship alone without worries”
            </div>
            <div  class="pt-3">
              “All appliances now work on the (battery) system, we even cook on solar energy!”
            </div>
            <div class="pt-3">
              “The tedious process of getting shore power to work is now part of the past” 
            </div>
            <div  class="pt-3">
              “The use of the generator has been reduced considerably and we have made considerable savings on maintenance” 
            </div>
          </div>
        </div>


      </div>
    </div> <!-- End container -->
  </div> <!-- End container-fluid -->

</template>


<style scoped>

</style>
