<script>

import newsRoom from '/src/assets/news.json';
import heliosUrl from '/src/assets/ms-helios-proefvaart-53.jpg';

//const heliosBackground = computed(() => ({ background: `url(${heliosUrl})`}))

export default {
  data() {
    return {
      newsRoom,
      article: {}
    }
  },
  components: {
  },
  watch: {
  },
  props: {
    lang: {
      type: String,
      required: true
    },
    year: {
      type: String, 
      required: true
    },
    month: {
      type: String, 
      required: true
    },
    title: {
      type: String, 
      required: true
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted() { 
    this.article = this.newsRoom.find( i => { return i.url == this.title })
  }
}


</script>

<template>  


  <header class="header-newsroom">

   <Navbar :backgroundColor="'rgb(17,36, 77)'"/>

  </header>

  <section class="" style="background-color: #FAF0E6">
  <article class="article">
    <div class="article-header">
      <div class="category component">
        <div class="component-content">
            <div class="category-eyebrow">
                <h3 class="subtitle category_release">{{ article.type }}</h3>
                <span class="category-eyebrow__date">{{ article.date }}</span>
            </div>
        </div>
      </div>

      <div class="pagetitle">
        <div class="component-content">
          <h1 class="">{{ article.title }}</h1>
        </div>
      </div>

      <div class="tertiarynav component">
          <div class="component-content">
            <hr>
          </div>
      </div>

    </div>


    <div class="summary text">
      <div class="component-content">
        <div class="summary-copy">
          {{ article.intro }}
        </div>
      </div>
    </div>

    

    <div class="pagebody text component">
      <div class="component-content" v-for="(p, i) in article.body ">

        <div class="pagebody-copy">{{p}}</div>          
      
      </div>
    </div>

   

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
  padding-top: 40px;
  padding-bottom: 40px;
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
  font-weight: bold;
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

