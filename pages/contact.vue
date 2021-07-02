<template>
  <div class="page" id="contact-page">
    <h1 class="home-page-title">
      {{ $content.contactPageTitle }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style lang="scss" scoped>
#contact-page {
  background-image: url('/images/contact-background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1.home-page-title {
    color: white;
    font-size: 50px;
    text-align: center;
  }
}
</style>
