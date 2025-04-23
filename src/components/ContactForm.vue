<script>

export default {
  data() {
    return {
      sumbitSucces: false
    }
  },
  components: {
  },
  watch: {
  },
  props: {
    language: {
      type: String,
      default: "",
      required: true
    },
    source: {
      type: String, 
      required: true
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {

    async handleSubmit(event) {

      event.preventDefault();
      var status = document.getElementById("my-form-status");
      status.innerHTML = "One sec...";
      
      var form = document.getElementById("contact-form");
      this.$refs['contact-form'].classList.add("was-validated");

      if( this.$refs['contact-form'].checkValidity() ){

        var data = new FormData(event.target);

        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
            this.$refs['contact-form'].classList.remove("was-validated");
            this.sumbitSucces = true;
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form 😳"
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form 😳"
        });

      } else {
        status.innerHTML = "Oops! Please review your input";
      }

    },
  },
  mounted() { 
    //var form = document.getElementById("my-form");
    //form.addEventListener("submit", handleSubmit)
  }
}

</script>

<template>

 

<div class="container-fluid wattlab-container" id="contact">
    <div class="container py-5" >

      <div class="row">

        <div class="col-lg-6">
          <div class="left-align-container"> 
            <h3 class="my-3"><span style="font-weight: 100;">Eager to Know What Solar Energy </span> Could Mean to You?</h3>
            <div class="mb-3">
              How much solar energy can <span style="font-weight: 600;">you</span> generate? And how does this translate to your annual fuel economy?
            </div>
            <div class="mb-3">
              Enter your information here and receive a quote and yield indication without obligation, or call us directly.
            </div>
          </div>
        </div>

        <div class="col-lg-6 my-auto">
          <div class="success-container mt-2 mt-lg-0" style="text-align: center;" v-if="sumbitSucces">
            <div style="font-weight: bold;">Thank you for your message and interest!</div>
            <div>We will get back to you as soon as possible ☀️</div>
          </div>

          <form novalidate autocomplete="off" class="needs-validation form-container" action="https://formspree.io/f/mblojgzb" method="POST" id="contact-form" ref="contact-form" @submit.prevent="handleSubmit" v-if="!sumbitSucces">

              <fieldset id="contact-form-fieldset">

                <div class="row">
                  <div class="form-group col-lg mt-2 mt-lg-0">
                  <label class="mb-1" for="customer-name-input">Name</label>
                  <input type="text" pattern="[a-zA-Z0-9_\-\.\s]{2,32}" class="form-control" name="name" id="customer-name-input" placeholder="Russell" required>
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">Please fill in your name</div>
                </div>
                <div class="form-group col-lg mt-2 mt-lg-0"> 
                  <label class="mb-1" for="customer-surname-input">Surname</label>
                  <input type="text" class="form-control" name="surname" id="customer-surname-input" placeholder="Ohl" required>
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">Please fill in your surname</div>
                </div>
              </div>

              <div class="row mt-0 mt-lg-2">
                <div class="form-group col-lg mt-2 mt-lg-0"> 
                  <label class="mb-1" for="contact-email-address-input">Email</label>
                  <input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,12})$" class="form-control" name="email" id="contact-email-input" placeholder="info@wattlab.nl" required>
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">Please enter a valid email address</div>
                </div>

                  <div class="form-group col-lg mt-2 mt-lg-0">
                  <label class="mb-1" for="contact-phone-number-input">Phone number (optional)</label>
                  <input type="tel" pattern="[0-9_\-\.\s\(\)\+]{4,32}"  class="form-control" name="phone" id="contact-phone-input" placeholder="+31 85 004 32 75">
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">Please enter a valid phone number</div>
                </div>
                
              </div>


              <div class="form-group mt-2">
                <label class="mt-2 mb-1" for="customer-message">Additional information (optional)</label>
                <textarea class="form-control" placeholder="Like ship name, hatch type and other interesting information" id="customer-message" name="message" rows="3"></textarea>
              </div>

              <p id="my-form-status" class="my-2"></p>

              <button type="submit" id="submit-button" style="width: 100%" class="mt-2 wattlab-btn">Submit</button> 

              <div class="form-group mt-2 mb-1">
                <div class="disclainer-text">This site is protected by reCAPTCHA and the Google 
                  <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> en
                  <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
                  We'll never share your personal information and files with anyone else.
                </div>
              </div>

              <input type="hidden" id="language" name="language" :value="language" required>
              <input type="hidden" id="source" name="source" :value="source" required>

              <div id="g-recaptcha-contact" data-sitekey="6LfElb0UAAAAAFXkSNzDnScJ3pa6hvqnZGfzGD57" data-size="invisible"></div>
              

            
            </fieldset>
            <div class="mt-3" style="text-align: center; border: 2px solid; border-radius: 5px; padding-top: 2px; padding-right: 6px; padding-bottom: 3px; padding-left: 6px; ">
              <div class="mt-2 mb-1" for="customer-message">Would you rather speak to someone? Call&nbsp;+31&nbsp;85&nbsp;004&nbsp;32&nbsp;75</div>
            </div>
              

          </form>
        </div>


      </div>
    </div> <!-- End container -->
  </div> <!-- End container-fluid -->




</template>



<style scoped>


</style>
