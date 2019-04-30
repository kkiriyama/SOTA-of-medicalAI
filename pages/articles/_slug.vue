<template>
  <section class="slug">
    <h1 class="slug_title">
      {{ article.fields.title }}
    </h1>
    <p class="slug-date">
      {{ article.sys.updatedAt }}
    </p>
    <div>
      {{ article.fields.abstractEn }}
    </div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  transition: 'slide-right',
  asyncData({ env, params }) {
    return client
      .getEntries(params.sys)
      .then((entry) => {
        return {
          article: entry
        }
      })
      .catch()
  }
}
</script>
