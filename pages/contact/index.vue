<template>
  <div>
    <common-header />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous" />
    <script src="js/bootstrap.min.js" />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous" />
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
