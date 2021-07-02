<template>
  <div class="secondary-content-wrapper">
    <BaseSecondaryContentItem v-for="item in $content.secondaryContent" :key="JSON.stringify(item)">
      <template #title>
        {{ item.title }}
      </template>
      <template #content>
        {{ item.description }}
      </template>
    </BaseSecondaryContentItem>
  </div>
</template>

<script>
import BaseSecondaryContentItem from './BaseSecondaryContentItem';
export default {
  name: 'SecondaryContent',
  components: {
    BaseSecondaryContentItem,
  }
}
</script>

<style lang="scss" scoped>
.secondary-content-wrapper {
  width: 1000px;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
