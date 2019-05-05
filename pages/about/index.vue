<template>
  <div>
    <common-header aboutis-active="true" />
    <div id="banner" class="container-fluid text-center">
      <h5>SOTA of Medical-AI</h5>
      <h6>最新の医療AI論文を日本語で</h6>
    </div>
    <div class="container-fluid text-center">
      <h4>数名の有志によって運営されています。</h4>
      <h4>今後ともよろしくお願いします。</h4>
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
