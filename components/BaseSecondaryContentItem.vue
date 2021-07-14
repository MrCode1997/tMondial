<template>
  <p class="base-secondary-content-item">
    <span class="title" @click="onClickHandler">
      <slot name="title" />
    </span>
    <span class="content">
      <slot name="content" />
    </span>
  </p>
</template>

<script>
export default {
  name: 'BaseSecondaryContentItem',
  methods: {
    onClickHandler() {
      this.$router.push('/contact');
    }
  },
}
</script>

<style lang="scss" scoped>
.base-secondary-content-item {
  width: 30%;
  height: 200px;
  padding: 10px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  margin: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @supports not (backdrop-filter: blur()) {
    background-color: rgba(0,0,0,0.5);
    color: white;
  }

  > span {
    display: block;
    font-weight: bold;
    font-size: 20px;
  }

  .title {
    color: darkorange;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .content {
    color: white;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 5px 0 5px 0;
  }
}
</style>
