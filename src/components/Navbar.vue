<script>
// background-color: rgb(0, 4, 51);
  //rgb(17,36, 77)
  //rgb(7, 17, 28)

export default {
  data() {
    return {
    }
  },
  components: {
  },
  watch: {
  },
  props: {
    backgroundColor: {
      type: String,
      default: "rgb(7, 17, 28)"  
    }
  },
  computed: {
    navBarStyle: function(){
      return {'z-index': 3, backgroundColor: this.backgroundColor};
    }
  },
  watch: {
  },
  methods: {
  },
  mounted() { 
  }
}
</script>

<template>

  <div class="navbar px-4 py-1" style="background-color: rgb(7, 17, 28, 0.7); z-index: 2;" v-if="false">
    <div class="container" style="color: white;">
      <div>Chat with us on <a href="https://api.whatsapp.com/send/?phone=31850043275&amp;text&amp;app_absent=0">WhatsApp</a>!
      </div>
    </div>
  </div>

   <nav class="navbar text-white p-3 navbar-expand-lg" :style="navBarStyle">
    <div class="container">
      <router-link class="navbar-brand abs" to="/">

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

      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto my-auto mb-lg-0">
          <li class="nav-item mx-2" v-if="false">
            <a class="nav-link" href="/en/newsroom">News & Updates</a>
          </li>
          <li class="nav-item mx-2" v-if="false">
            <a class="nav-link" href="/en/contact">Contact</a>
          </li>
          
        </ul>
      </div>

    </div>
  </nav>

</template>



<style scoped>


.nav-link {
  color: #F0F0F0 !important; 
  text-transform: uppercase !important; 
  font-family: 'AirbnbCereal', sans-serif !important;
  font-size: 12px !important;
  font-weight: bold !important;
  letter-spacing: 3px !important;
  position: relative;
  display: inline-block;      /* needed for pseudo-element positioning */
  transition: transform 0.3s ease; /* smooth text move */
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;               /* thickness of underline */
  background-color: white;
  transition: width 0.3s ease; /* smooth underline grow */
}

.nav-link:hover {
  transform: translateY(-2px); /* move text up 2px */
}

.nav-link:hover::after {
  width: 100%;               /* expand underline */
}
</style>
