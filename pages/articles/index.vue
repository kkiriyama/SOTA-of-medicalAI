<template>
  <div>
    <common-header />
    <div class="container">
      <div class="card-columns">
        <article-card
          v-for="article in articles"
          :id="article.sys.id"
          :key="article.sys.id"
          :title="article.fields.titleJa"
          :date="article.sys.createdAt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Header from '~/components/Header'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

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
