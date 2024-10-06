<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/mission">Our Mission</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  background-color: $primary-color;  // Referencing the palette color
  padding: 2%;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

li {
  font-size: 1.2em;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
}

a:hover {
  background-color: $hover-color;  // Referencing hover color
  border-radius: 5px;
}
</style>
