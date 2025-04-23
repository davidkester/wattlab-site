<script setup>

import { ref, computed } from 'vue'


</script>

<template>

  <div class="container-fluid wattlab-container" id="voordelen" style="background-color: rgb(240, 240, 240); color: rgb(17,36, 77);">
    <div class="container">
      <div style="text-align:center;">
        <slot name="header">
        </slot>
      </div>

      <div class="row">

        <div class="col-lg p-2 py-lg-0 px-lg-3">
          <div class="wattlab-card-round p-4">
            <slot name="col1"></slot>
          </div>
        </div>

        <div class="col-lg p-2 py-lg-0 px-lg-3 mt-3 mt-lg-0">
          <div class="wattlab-card-round p-4">
            <slot name="col2"></slot>
            
          </div>
        </div>

        <div class="col-lg p-2 py-lg-0 px-lg-3 mt-3 mt-lg-0">
          <div class="wattlab-card-round p-4">
            <slot name="col3"></slot>
          </div>
        </div>

      </div>

    </div> <!-- End container -->
  </div> <!-- End container-fluid -->

</template>



<style scoped>



</style>
