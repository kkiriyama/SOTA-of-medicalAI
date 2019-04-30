<template>
  <div class="card">
    <h5 class="card-body">
      {{ title }}
    </h5>
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
    date: {
      type: String,
      default: ''
    }
  }
}
</script>
