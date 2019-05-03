<template>
<div class="back">
  <section class="container">
    <transition name="fade">
      <div v-show="isVisible">
        <h1 class="title">
          SOTA of Medical-AI
        </h1>
        <h2 class="subtitle">
          最新の医療AI論文を日本語で紹介します
        </h2>
        <h3>
          <nuxt-link to="/articles">
          <button class="btn btn-success">
            論文一覧
          </button>
          </nuxt-link>
        </h3>
        <nuxt-link to="/about">
          <button class="btn btn-info">
            このサイトについて
          </button>
        </nuxt-link>
      </div>
    </transition>
  </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isVisible: false
    }
  },
  created() {
    setTimeout(() => {
      this.isVisible = true
    }, 500)
  }
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back {
  background-image: linear-gradient(-90deg, #3D1141, #474100);
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #EBEBEB;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #EBEBEB;
  word-spacing: 5px;
  padding-bottom: 15px;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
