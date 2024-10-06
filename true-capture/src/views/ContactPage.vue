<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>
      For inquiries, feel free to reach out at 
      <a :href="mailtoLink">info@truecapture.com</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  computed: {
    mailtoLink() {
      return 'mailto:info@true-capture.com';
    },
  },
};
</script>

<style scoped>
.placeholder-image {
  max-width: 100%;
  height: auto;
}
a {
  color: #007BFF; /* Change this to your desired link color */
  text-decoration: none; /* Removes the underline */
}

a:hover {
  text-decoration: underline; /* Adds an underline on hover */
}
</style>
