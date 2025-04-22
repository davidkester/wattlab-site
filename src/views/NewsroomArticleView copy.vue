<script setup>

import { ref, computed } from 'vue'
import { useRouter, RouterView } from 'vue-router';

import heliosUrl from '/src/assets/ms-helios-proefvaart-53.jpg';
import anetteUrl from '/src/assets/ms-vertom-annette-impression-full-scale.jpeg';
import wattlabUrl from '/src/assets/logo-white.svg';
import GWR from '/src/assets/logos/GWR_RecordHolder-Ribbon-SingleColour_White-TM-RGB.png';
import MIA from '/src/assets/logos/maritime_award_logo_white.png';

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


  </header>

  <section>
  <article class="article">
    <div class="article-header">
      <div class="category component">
        <div class="component-content">
            <div class="category-eyebrow">
                <h3 class="subtitle category_release">Persbericht</h3>
                <span class="category-eyebrow__date">24 juni 2021</span>
            </div>
        </div>
      </div>

      <div class="pagetitle component">
        <div class="component-content">
          <h1 class="mb-4">Nieuwe stap in verduurzaming binnenvaart</h1>
        </div>
      </div>
      <div class="tertiarynav component">
          <div class="component-content">
            <hr>
          </div>
      </div>

    </div>


    <div class="summary text component">
      <div class="component-content">
        <div class="summary-copy">
          Eind vorig jaar presenteerden Scheepsbouwconcern Damen Shipyards, luikenbouwer Blommaert Aluminium en zonne-energie specialist Wattlab hun eerste luiken met zonnepanelen voor binnenvaartschepen. Deze maand gaat een tweede proefopstelling het water op. Na de zomer verwachten de partijen klaar te zijn voor de markt. Met <a href="https://shipping.wattlab.nl/nl">Solarluiken</a> wil het consortium de transitie naar een duurzame binnenvaart versnellen.
        </div>
      </div>
    </div>

    <div class="image component image-wide body-copy-wide image-fullbleed">
      <div class="component-content">
          <picture class="picture">                            
            <img class="picture-image" style="width: 100%;" :src="heliosUrl" alt="Solar luiken aan boord">
          </picture>
      </div>
    </div>


    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Solarluiken in cijfers</strong></h2>
          <div class="pagebody-copy">“We hebben afgelopen week al piekvermogens van 6000 Watt gemeten!” vertelt Kasper Keizer, ingenieur bij Wattlab enthousiast. “Maar de kracht van de zon is natuurlijk niet altijd op z’n sterkst en er zit ook wel eens een wolkje voor de zon.” Een betere indicatie is daarom dat per luik rond de 2900 kilowattuur per jaar aan zonne-energie opgewekt kan worden, wat genoeg is om een gemiddeld Nederlands huishouden een jaar lang van stroom te voorzien.
          </div>          
      
          <div class="pagebody-copy">Op een binnenvaartschip betekent de komst van zonne-energie een directe besparing op het brandstofgebruik en onderhoudskosten van de dieselgenerator. Bij voldoende luiken kan de generator op zonnige dagen helemaal uit en met voldoende accucapaciteit kunnen schippers & bemanning meerdere dagen & nachten zonder de generator. Een schip van 110m volledig uitgerust met 22 zonneluiken kan zo tot wel 30.000 liter brandstof per jaar besparen. “Omdat de exacte systemen en aantal zonnepanelen per schip verschillen, verschilt ook de opbrengst & besparing per schip.” Aldus Keizer.
          </div>

           <div class="pagebody-copy">De terugverdientijd van de luiken ligt tussen de 5 en 8 jaar afhankelijk van het verbruik, het vaargebied en het aantal luiken. Na deze periode produceren de zonnepanelen daadwerkelijk kosteloos energie. “Vanaf dat moment zijn de luiken niet alleen goed voor het milieu, maar ook erg goed voor de portemonnee!”
           </div>
      </div>
    </div>

   

    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Klaar voor de markt</strong></h2>
          <div class="pagebody-copy">Eind vorig jaar startte het consortium een eerste test met luiken met zonnepanelen op het schip Ms Oleander. Na een half jaar analyseren en evalueren is het nu tijd voor een nieuw ontwerp geschikt voor stapelbare luiken. Met deze test worden de theoretische modellen gevalideerd. Dit is de volgende stap naar het op de markt brengen van dit product. “Vooralsnog zijn we niet tegen onoplosbare problemen aangelopen”, aldus Jeroen Ooijen van Blommaert. “We verwachten dan ook dat de eerste Solarluiken deze herfst leverbaar zijn. Vanaf dat moment is het kijken in welk tempo we alle geïnteresseerden kunnen bedienen, want de aanmeldingen van geïnteresseerde schippers en rederijen stromen binnen.”
          </div>          
      </div>
    </div>

     <div class="image component image-big image-fullbleed body-copy-wide">
      <div class="component-content">
        <picture class="picture">
          <img class="picture-image" style="width: 100%;" :src="heliosUrl" alt="Installatie van solar luiken op een schip">
        </picture>
      </div>
    </div>

    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Groener alternatief</strong></h2>
          <div class="pagebody-copy">Het klimaatakkoord vraagt om een verduurzaming van de transportsector. Ook in de binnenvaartsector kan nog winst behaald worden als het gaat om uitstoot van schadelijke stoffen als CO2, stikstof en fijnstof. Dankzij de Solarluiken kunnen schepen direct duurzamer varen en hun uitstoot aan schadelijke stoffen reduceren.
          </div>
      </div>
    </div>

    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Op meer ligplaatsen welkom</strong></h2>
          <div class="pagebody-copy">Met de komst van de Solarluiken hebben schipper weer meer weer meer vrijheid in het kiezen van ligplaatsen. De zonne-energie maakt ze minder afhankelijk van hun dieselgenerator, vaak verboden in binnensteden, en van walstroom aansluitpunten. Aan de kade is walstroom een goed bestaand alternatief. “Maar”, zo stelt Ooijen, “ligplaatsen met walstroom zijn er maar beperkt, en bovendien is de stroom relatief duur voor schippers.” Door stroom op te wekken met zonnepanelen blijft de lokale lucht schoon en zal ook geluidsoverlast tot het verleden behoren.
          </div>
      </div>
    </div>


    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Techniek</strong></h2>
          <div class="pagebody-copy">“De zonnepanelen die we gebruiken zijn veel lichter en dunner dan de zonnepanelen die op huizen liggen.” vertelt Keizer. “Minder dan 2kg/m2 en 1,5mm dik, en toch robuust. Hierdoor hebben we de luiken uitwisselbaar met de bestaande generatie scheepsluiken kunnen maken.” De Solarluiken kunnen dus zonder problemen als de normale stapel luiken (Friese kap luiken in jargon) gestapeld worden. Het is ook mogelijk om slechts een aantal luiken met zonnepanelen te nemen of zonnepanelen op bestaande luiken te integreren.
          </div>          
      
          <div class="pagebody-copy">Het systeem is met minimale aanpassingen aan te sluiten op het boordnet van het schip. Na installatie worden de zonnepanelen 24 uur per dag individueel gemonitord. Via de bijbehorende App worden de opbrengst & besparing van het systeem inzichtelijk gemaakt voor de schipper.
          </div>
      </div>
    </div>

     <div class="image component image-big image-fullbleed body-copy-wide">
      <div class="component-content">
        <picture class="picture">
          <img class="picture-image" style="width: 100%;" :src="heliosUrl" alt="Installatie van solar luiken op een schip">
        </picture>
      </div>
    </div>

    <div class="pagebody text component">
      <div class="component-content">
        <h2 class="pagebody-header"><strong>Samenwerkingspartners</strong></h2>
          <div class="pagebody-copy">Initiatiefnemer Wattlab heeft zich in korte tijd ontwikkeld tot expert in het maken van maatwerk zonne-energiesystemen en deed onder andere projecten voor Airbus & Picnic. Vanuit Rotterdam ontwikkelt Wattlab maatwerk zonnepaneel systemen voor toepassingen in onder andere binnenvaart, pleziervaart en stedelijke mobiliteit. Blommaert is marktleider op het gebied van het ontwerpen en produceren van aluminium scheepsluiken. Met 40 jaar ervaring heeft deze partij kennis van de markt en klanten over de hele wereld. Scheepsbouwconcern Damen Shipyachts is een bekende speler in de maritieme techniek en adviseert de partijen bij deze innovatie.
          </div>          
      
          <div class="pagebody-copy">In dit project is intensief samengewerkt met Asto Shipyard, zij hebben de voorziening in het casco uitgewerkt en gerealiseerd voor het aansluiten van de zonnepanelen, Werkina scheepselektro verantwoordelijk voor het elektrisch systeem en de kapitein-eigenaren van MS Kenyro die hun schip beschikbaar hebben gesteld.
          </div>
      </div>
    </div>

    <div class="image component image-big image-fullbleed body-copy-wide">
      <div class="component-content">
        <picture class="picture">
          <img class="picture-image" style="width: 100%;" :src="heliosUrl" alt="Installatie van solar luiken op een schip">
        </picture>
      </div>
    </div>



    <aside class="pagebody text component">
      <div class="component-content">
          <div class="pagebody-copy">Geïnteresseerd? Meer informatie op <a href="https://shipping.wattlab.nl/nl">www.solarluiken.nl</a>
          </div>
      </div>
    </aside>


  </article>
</section>


  <Footer />


</template>

<style scoped>

  .header-newsroom {
    background-color: rgb(17,36, 77);
  }

  .pagebody-header {
    font-family: 'ProductSans' !important;
    color: rgb(17, 36, 77);
    font-weight: bold;
    font-style: normal;
    font-size: 24px;
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
    font-weight: 600;
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

  /* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .component-content {
    width: 90%;
  }
 .component {
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

.summary-copy {
  font-family: 'AirbnbCereal';
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

.pagebody {
    font-family: 'AirbnbCereal' !important;
}


.page-article .desktop-notification {
    padding-top: 16px;
    padding-bottom: 48px;
}

.category_release {
    color: #DA0F47;
    border-color: #DA0F47;
}

.category-eyebrow__date {
    font-family: 'AirbnbCereal' !important;
}

.subtitle {
  text-transform: uppercase;
  font-family: 'ProductSans' !important;
  color: rgb(10, 24, 51) !important;
  font-size: 12px !important;
  letter-spacing: 3px !important;
}

</style>

