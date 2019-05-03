<template>
  <div>
    <common-header />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src = 'js/bootstrap.min.js'></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
    <div class="container-fluid text-center" id="banner">
      最新の医療AI論文
    </div>
    <div class="container-fluid">
      <div class="card-columns">
        <article-card
          v-for="article in articles"
          :id="article.sys.id"
          :key="article.sys.id"
          :title="article.fields.titleJa"
          :date="article.sys.createdAt"
          :publishedDate="article.fields.publishedDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Header from '~/components/Header'
import contentful from '~/plugins/contentful'

const client = contentful.createClient()

export default {
  components: {
    'article-card': Card,
    'common-header': Header
  },
  asyncData({ env }) {
    return client.getEntries({
      'content-type': env.CTF_BLOG_TYPE_ID,
      order: '-sys.createdAt'
    })
      .then((articles) => {
        return {
          articles: articles.items
        }
      })
  }
}

</script>

<style>
  #banner {
    padding: 40px
  }
  .card-columns {
    margin-top: 40px,
  }
</style>
