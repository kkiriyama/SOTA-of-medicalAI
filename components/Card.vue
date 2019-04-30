<template>
  <div class="card">
    <div class="card-body">
      <h5>
        {{ title }}
      </h5>
      <div class="detail-btn text-center">
        <nuxt-link
          class="btn btn-outline-info"
          role="button"
          :to="{name: 'articles-slug', params: {slug: id}}"
        >
          詳細
        </nuxt-link>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        {{ date }}
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
    }
  }
}
</script>

<style>
.detail-btn {
  margin: 15px 0px 0px 0px;
}
</style>
