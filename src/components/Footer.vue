<script setup>

import wattlabLogo from '/src/assets/logos/wattlab-central.png';
import whatsappIcon from '/src/assets/icons/whatsapp.png';
import instagramIcon from '/src/assets/icons/instagram.png';
import linkedinIcon from '/src/assets/icons/linkedin.png';

</script>

<template>


<footer id="footer-main" class="font-regular py-5" style="margin-top: 0px;">

    <div class="container">
      <div class="row" style="text-align: center;">
          <div class="col-lg-2 my-auto" style="">
            <div style="width: 60%; margin: 20px auto;">
             <img alt="Wattlab" :src="wattlabLogo" style="position:relative; width:100%; margin-top: 10px; margin-bottom: 10px;">
            </div>
          </div>

          <div class="col-lg my-auto">
            <ul class="list-inline pull-right my-0" >
              <li>De Kroon</li>
              <li>Schiemond 20</li>
              <li>3024 EE, Rotterdam</li>
              <li>The Netherlands</li>
            </ul>
          </div>
           <div class="col-lg my-auto">
            <ul class="list-inline pull-right my-0" style="">
              <li>info@wattlab.nl</li>
              <li >+31 85 004 32 75</li>
              <li>Coc: <span class="copy-content">68536550</span></li>
              <li style="white-space: nowrap">Vat id: <span class="copy-content">NL 8574 88 077 B01</span></li>
            </ul>
          </div>
           <div class="col-lg my-auto">
            <ul class="list-inline pull-right my-0" style="">
              <li><a style="color: #9d9d9d" href="/terms-and-conditions">Terms & conditions</a></li>
              <li><a style="color: #9d9d9d" href="/en/newsroom">Newsroom</a></li>
              <li><a style="color: #9d9d9d" href="/en/solarhatch">Inland‑waterway vessels</a></li>
              <li><a style="color: #9d9d9d" href="/en/solardeck">Seagoing vessels</a></li>
            </ul>
          </div>
          <div class="col-lg-2 my-auto" style="">
            <ul class="list-horizontal my-0" style="text-align: center;">
               <li>
                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=31850043275&text&app_absent=0"><img :src="whatsappIcon" style="position:relative; height:25px; cursor: pointer;"></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wattlab_rotterdam/"><img :src="instagramIcon" style="position:relative; height:25px; cursor: pointer;"></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/wattlab"><img :src="linkedinIcon" style="position:relative; height:25px; cursor: pointer;"></a>
              </li>

            </ul>
          </div>

      </div>

      <hr>

      <div style="text-align: center;">
        &copy; 2025 Wattlab (KRSolar B.V.). All rights reserved.
      </div>

    </div>



  <div id="language-options"></div>

</footer>

</template>



<style scoped>

footer li { 
  text-align: center;
  

}

footer {
  color: grey;
  margin-top: 30px; 
  /* background-color: rgb(2,2,49); */
  background-color: rgb(4, 17, 29);
  padding-top: 60px; 
  padding-bottom: 40px;
}

.list-horizontal {
    list-style: none;
    padding: 0;
}

ul.list-horizontal  li {
    display: inline;
    padding: 0 5px !important;
    color: #9d9d9d;
    content: "";
}




</style>
