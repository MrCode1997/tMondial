<template>
  <div class="privacy-content">
    {{ $content.privacy }}
  </div>
</template>

<script>
export default {
  name: 'PrivacyContent',
}
</script>

<style lang="scss">
.privacy-content {
  padding: 0 30px;
  margin: 10px 0;
  color: darkblue;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
}
</style>
