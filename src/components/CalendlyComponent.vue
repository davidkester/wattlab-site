<template>
  <div class="calendly-inline-widget" ref="calendly"
       data-url="https://calendly.com/bo-wattlab/introduction-meeting?hide_gdpr_banner=1" 
       style="min-width:320px;height:700px;">
  </div>
</template>

<script>
export default {
  name: 'CalendlyEmbed',
  mounted() {

    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.onload = this.initCalendly;
      document.head.appendChild(script);
    } else {
      this.initCalendly();
    }

  },
  beforeUnmount() {
    // Clean up widget DOM content
    const calendlyContainer = this.$refs.calendly;
    if (calendlyContainer) {
      calendlyContainer.innerHTML = "";
    }
  },
  methods: {
    initCalendly(retries = 10) {
      const check = () => {
        if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
          window.Calendly.initInlineWidgets();
        } else if (retries > 0) {
          setTimeout(() => this.initCalendly(retries - 1), 3000);
        } else {
          console.warn("Calendly failed to initialize.");
        }
      };
      check();
    }
  }
}
</script>