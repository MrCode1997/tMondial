<template>
  <p class="home-page-main-content">
    <span class="title" @click.prevent="onClickHandler">
      <slot name="title" />
    </span>
    <slot name="description" />
  </p>
</template>

<script>
export default {
  name: 'BaseMainContent.vue',
  methods: {
    onClickHandler() {
      this.$router.push('/contact');
    }
  },
}
</script>

<style lang="scss" scoped>
p.home-page-main-content {
  display: block;
  font-size: 20px;
  margin: 60px auto 0 auto;
  width: 1000px;
  font-weight: bold;
  backdrop-filter: blur(20px);
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: white;

  > span {
    display: block;
  }

  .title {
    color: brown;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
  }

  @supports not (backdrop-filter: blur()) {
    background-color: rgba(0,0,0,0.5);
    color: white;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
}
</style>
