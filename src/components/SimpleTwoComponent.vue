<script setup>

</script>

<template>

<div class="container-fluid wattlab-container py-5"  style="background-color: rgb(240, 240, 240); color: rgb(17,36, 77);">
    <div class="container">

      <div style="text-align:center;">
        <slot name="header">
        </slot>
      </div>

      <div class="row pt-2">

        <div class="col-lg-6">
          <slot name="col1"></slot>
        </div>

        <div class="col-lg-6">
          <slot name="col2"></slot>
        </div>


      </div>
    </div> 
  </div> 

</template>



<style>
</style>
