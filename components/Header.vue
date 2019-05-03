<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark header-color">
      <router-link class="navbar-brand brand" to="/">
        Project SoMA
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/articles">
              Articles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              Contact
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style>
.header-color {
  background-image: linear-gradient(-90deg, #3D1141, #474100);
}
</style>
