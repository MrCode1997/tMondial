<template>
  <div id="home-page" class="page">
    <h1 class="home-page-title">
      {{ $content.homePageWebSiteTitle }}
    </h1>

    <BaseMainContent>
      <template #title>
        {{ $content.internationalConsulting.title }}
      </template>
      <template #description>
        {{ $content.internationalConsulting.description }}
      </template>
    </BaseMainContent>

    <BaseMainContent>
      <template #title>
        {{ $content.lendersAndInvestors.title }}
      </template>
      <template #description>
        {{ $content.lendersAndInvestors.description }}
      </template>
    </BaseMainContent>

    <BaseSecondaryContent />

    <PrivacyContent />
  </div>
</template>

<script>
import BaseMainContent from '../components/BaseMainContent';
import BaseSecondaryContent from '../components/BaseSecondaryContent';
import PrivacyContent from '../components/PrivacyContent';
export default {
  name: 'HomePage',
  components: {
    BaseMainContent,
    BaseSecondaryContent,
    PrivacyContent,
  },
}
</script>

<style lang="scss" scoped>
#home-page {
  background-image: url('/images/homepage-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  h1.home-page-title {
    color: white;
    text-decoration: underline;
    font-size: 60px;
    text-align: center;
    padding-top: 20px;
  }

}
</style>
