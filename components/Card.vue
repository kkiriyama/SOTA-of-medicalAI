<template>
  <div class="card">
    <div class="card-header">
      published：{{ publishedDate.substr(0,10) }}
    </div>
    <div class="card-body">
      <h5 class="abst">
        {{ title }}
      </h5>
      <div class="detail-btn text-center">
        <nuxt-link
          class="btn btn-success"
          role="button"
          :to="{name: 'articles-slug', params: {slug: id}}"
        >
          詳細
        </nuxt-link>
      </div>
    </div>
    <div class="card-footer text-muted">
      <small class="text-muted">
        投稿：{{ date.substr(0,10) }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    publishedDate: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.abst {
  letter-spacing: 0.5px
}
.card {
  margin: 0px;
}
.detail-btn {
  margin: 15px 0px 0px 0px;
}
</style>
