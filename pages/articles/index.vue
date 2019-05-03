<template>
  <div>
    <common-header />
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
          :date="article.sys.createdAt.substr(0, 10)"
          :publishedDate="article.fields.publishedDate.substr(0, 10)"
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
