<template>
  <div>
    <common-header />
    <div class="container-fluid container-slug">
      <div class="top-info row">
        <h1 class="slug-title">
          {{ titleJa }}
        </h1>
        <h4 class="slug-title text-muted">
          {{ titleEn }}
        </h4>
        <p class="slug-date">
          記事の作成日: {{ createdAt }}
        </p>
        <p class="slug-date">
          論文の投稿日: {{ publishedDate }}
        </p>
      </div>
      <div class="row">
        <a :href="articleURL">
          <button class="btn btn-outline-info">
            論文pdf
          </button>
        </a>
        <h6>
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="tag-style badge badge-primary"
          >
            {{ tag }}
          </span>
        </h6>
      </div>
      <div class="row">
        <div id="abstract-en" class="col-sm-6">
          <h4 class="text-center abstract-title">
            要旨(原文)
          </h4>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="abstractEn" />
        </div>
        <div id="abstract-ja" class="col-sm-6">
          <h4 class="text-center abstract-title">
            要旨(日本語訳)
          </h4>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="abstractJa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentful from '~/plugins/contentful'

const client = contentful.createClient()

export default {
  transition: 'slide-right',
  components: {
    'common-header': Header
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        'sys.id': params.slug
      })
      .then((entry) => {
        return {
          article: entry.items[0]
        }
      })
      .then(({ article }) => {
        return {
          article: article,
          titleJa: article.fields.titleJa,
          titleEn: article.fields.titleEn,
          createdAt: article.sys.createdAt,
          publishedDate: article.fields.publishedDate,
          abstractEn: documentToHtmlString(article.fields.abstractEn),
          abstractJa: documentToHtmlString(article.fields.abstractJa),
          tags: article.fields.tag,
          articleURL: article.fields.linkToArticle
        }
      })
      .catch()
  }
}
</script>

<style scoped>
.container-slug {
  padding: 0 5% 0 5%;
}

.slug-title {
  padding: 30px 30px 0px 30px;
}

.slug-subtitle {
  font-size: 16px;
}

.tag-style {
  margin: 5px;
}

.slug-date {
  margin: 10px;
}

.top-info {
  background-color:gainsboro;
}
</style>
