<script setup>

</script>

<template>

<div class="container-fluid wattlab-container-white py-5">
  <div class="container">

    <div style="text-align:center;">
      <slot name="header">
      </slot>
    </div>

    <div class="row pt-2">

      <div class="col-lg-12 ">
        <slot name="col1"></slot>
      </div>

    </div>
  </div> 
</div> 

</template>



<style>
</style>
