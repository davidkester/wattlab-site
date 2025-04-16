<script setup>

import elTeide from '/src/assets/images/inland/ms-el-teide-top-view.jpeg';
import kenyroBasel from '/src/assets/images/inland/ms-kenyro-near-basel.jpg';
import kenryoSailing from '/src/assets/images/inland/ms-kenyro-sailing.jpg';

</script>

<template>

<div class="container-fluid wattlab-container-white">
    <div class="container">

      <div class="row mx-auto">

        <div class="col-lg-6 pe-0 pe-lg-5 mb-5 my-lg-auto">
          <h2 class=""><span style="font-weight: 100;">The</span> autonomous energy source <span style="font-weight: 100;">for your electricity grid</span></h2>
          <div class="my-3">
            By installing Solar Hatches, you can generate your own energy and reduce your expenses on shore power and gas oil. When used with a battery system, Solar Hatches can also reduce the operating hours of your generator, resulting in savings on maintenance and replacement costs. Additionally, by relying on solar panels, you can decrease your dependence on fluctuating fuel and shore power prices, as solar energy is free and abundant from the sun. Furthermore, there are significant tax benefits and subsidy opportunities available for both the aluminium hatches and the battery system as part of your purchase.
          </div>
          <div class="my-3">
            Our systems work with highly efficient, thin, dirt-repellent, and low-maintenance solar panels. It includes a complete solar panel system, including micro-inverters. The system can be easily connected by your electrician.
          </div class="my-3">
          <div>
            For Dutch shippers: Acquire Solar Hatches and receive up to 40% discount with the Energy Investment Allowance (EIA) and Small-scale Investment Allowance (KIA)!
          </div>
        </div>

        <div class="col-lg-6 my-auto">
          <div class="gallery-1-2" >
            <div class="gallery-1-2-1"><img :src="elTeide" alt="" class="gallery-images"></div>
            <div class="gallery-1-2-2"><img :src="kenyroBasel" alt="" class="gallery-images"></div>
            <div class="gallery-1-2-3"><img :src="kenryoSailing" alt="" class="gallery-images"></div>
          </div>
        </div>


      </div>
    </div> <!-- End container -->
  </div> <!-- End container-fluid -->


</template>



<style scoped>

  .gallery-1-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .gallery-1-2-1 { grid-area: 1 / 1 / 4 / 2; }
  .gallery-1-2-2 { grid-area: 1 / 2 / 3 / 3; }
  .gallery-1-2-3 { grid-area: 3 / 2 / 4 / 3; }

  .gallery-images {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

</style>
