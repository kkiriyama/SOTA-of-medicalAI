<template>
  <div>
    <common-header contactis-active="true" />
    <div id="banner" class="container-fluid text-center">
      <h5>SOTA of Medical-AI</h5>
      <h6>最新の医療AI論文を日本語で</h6>
    </div>
    <div class="container-fluid text-center">
      <h5>代表者twitterアカウント</h5>
      <a href="https://twitter.com/kazuokiriyama_">https://twitter.com/kazuokiriyama_</a>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    'common-header': Header
  }
}
</script>

<style>
#banner {
  padding: 40px
}
</style>
