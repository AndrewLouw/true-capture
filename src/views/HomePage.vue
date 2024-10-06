<template>
    <div class="home">
      <h1>Why aren’t you using biochar?</h1>
      <p>Biochar is a natural, carbon-negative material with hundreds of applications.</p>
      <p>Switching to biochar could save you money and save the planet.</p>
      <p>True Capture helps you access the right biochar for you</p>
      <img src="@/assets/images/home-image.jpg" alt="Home Page Image" class="placeholder-image">
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped lang="scss">
  .home {
    background-color: $background-color;  // Referencing background color
    color: $primary-color;  // Text color
  }
  
  .placeholder-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  