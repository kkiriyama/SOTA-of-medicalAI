<template>
  <div>
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
          <li class="nav-item" :class="{ active:articlesisActive }">
            <router-link class="nav-link" to="/articles">
              Articles
            </router-link>
          </li>
          <li class="nav-item" :class="{ active:aboutisActive }">
            <router-link class="nav-link" to="/about">
              About
            </router-link>
          </li>
          <li class="nav-item" :class="{ active:contactisActive }">
            <router-link class="nav-link" to="/contact">
              Contact
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous" />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous" />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    'articlesisActive': String,
    // eslint-disable-next-line
    'contactisActive': String,
    // eslint-disable-next-line
    'aboutisActive': String
  }
}
</script>

<style>
.header-color {
  background-image: linear-gradient(-90deg, #3D1141, #474100);
}
</style>
