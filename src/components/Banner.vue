<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, RouterView } from 'vue-router';

const hovering = ref(false);

import heliosUrl from '/src/assets/ms-helios-proefvaart-53.jpg';
import anetteUrl from '/src/assets/ms-vertom-annette-impression-full-scale.jpeg';
import wattlabUrl from '/src/assets/logo-white.svg';
import GWR from '/src/assets/logos/GWR_RecordHolder-Ribbon-SingleColour_White-TM-RGB.png';
import MIA from '/src/assets/logos/maritime_award_logo_white.png';

const heliosBackground = computed(() => ({
  background: `url(${heliosUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%'
}))

const anetteBackground = computed(() => ({
  backgroundImage: `url(${anetteUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%'
}))

const logoHomepage = computed(() => ({
  backgroundImage: `url(${wattlabUrl})`,
  backgroundSize: ' 100% 100%',
  display: 'block',
  position: 'cover',
  height: '21px',
  width: '145px',
  backgroundRepeat: 'no-repeat',
}))



onMounted(() => {
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');

  const content1 = document.querySelector('.content1');
  const content2 = document.querySelector('.content2');

  box2.addEventListener('mouseenter', () => content1.style.visibility = 'hidden');
  box2.addEventListener('mouseleave', () => content1.style.visibility = '');

  box1.addEventListener('mouseenter', () => content2.style.visibility = 'hidden');
  box1.addEventListener('mouseleave', () => content2.style.visibility = '');
})

</script>

<template>

 

<div class="container-fluid p-0" style="position: relative;">
  
 <Navbar/>

  <div class="container-test" style="height: calc(100vh - 62px); overflow-y: auto; ">
   


      <router-link class="navbar-brand abs box box1" to="/en/solarhatch" :style="heliosBackground">

        <div class="content-transparent content1">

            <h1 style="">SolarHatch</h1>
            <div class="subtitle" style="color: white !important">for inland shipping</div>

            <div class="body-content" >
              <span style="font-style: itaslic;">Learn more</span> &#8594;
            </div>

        </div>

      </router-link>


    <router-link class="navbar-brand abs box box2" :style="anetteBackground" to="/en/solardeck">

      <div class="content-transparent content2" style="">
        <h1>SolarDeck</h1>
        <div class="subtitle" style="color: white !important">for Seagoing vessels</div>

        <div class="body-content" >
          <span style="font-style: italic;">Learn more</span> &#8594;
        </div>

      </div>

    </router-link>


  </div>
</div>


<Footer />

</template>



<style scoped>


.container-test {
  display: flex;
  /* Optional: set a height so the effect is easier to see */
  overflow: hidden;

}

.subtitle{
  text-transform: uppercase;
  color: rgb(10, 24, 51) !important;
  font-size: 12px !important;
  font-weight: bold;
  letter-spacing: 3px !important;
}

.box {
  flex: 1;
  transition: all 0.5s ease;
  /* Optional: add some basic styling for visibility */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  position: relative;
  overflow: hidden;
}


/* When the container is hovered, if a box is not hovered, it stays at flex: 1 */
.container:hover .box:not(:hover) {
  flex: 1;
}

/* The hovered box expands to flex: 9 */
.box:hover {
  flex: 2;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  /* box-shadow: none; */
}

/* Transition effect for inner content */
.inner {
  transition: all 0.5s ease;
}

/* Fade out inner content on hover */
.box:hover .inner {
  opacity: 0;
}

/* Transition effect for inner content */
.content-white {
  background-color: grey;
  color: rgb(17, 36, 77);
  text-align: center;
  border-radius: 5px;
  padding: 25px;
  transition: all 0.5s ease;
  opacity: ;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgb(17, 36, 77);
  box-shadow: 2px 2px 5px 1px #000c;
}

.content-transparent {
  color: white !important; 
  text-align: center;
}

/* Fade out inner content on hover */
.box:hover .content {
  opacity: 1;
}

.body-content {
  font-size: 14px;
  font-family: 'ProductSans';
  letter-spacing: 3px;
  margin: 20px;
}

</style>
