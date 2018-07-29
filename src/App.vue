<template lang="html">
  <section class="hero is-medium is-primary is-fullheight is-bold" id="app">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="./assets/icons/spiderman.png" alt="Logo">
              <h1 style="margin-left: 10px;">Ultimine</h1>
            </a>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item">
                Sign in
              </a>
              <router-link to="cinema_halls" class="navbar-item">
                Заливать залов
              </router-link>
              <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <img src="./assets/icons/github-logo.png" width="25" height="25"/>
                </span>
                <span>Github</span>
              </a>
            </span>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <router-view></router-view>
    </div>

    <div class="hero-foot">
      <div class="has-text-centered blink_me">
        <i class="arrow-down"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  @font-face {
    font-family: comfortaa;
    src: url('./assets/fonts/Comfortaa-Regular.ttf');
  }
  @font-face {
    font-family: comfortaaBold;
    src: url('./assets/fonts/Comfortaa-Bold.ttf');
  }
  *{
    font-family: comfortaa;
  }
  .title{
    font-family: comfortaaBold;
  }
  .mainLeft {
    width: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .leftSide{
    width: 40%;
    height: 100%;
    background-color: #181719;
  }
  .rightSide{
    width: 60%;
    height: 100%;
    background-color: #46d8ce;
  }
  .blink_me {
    cursor: pointer;
    color: white;
    animation: blinker 2s linear infinite;
    margin-bottom: 10px;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 7px;
  }
  .arrow-down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .button.is-loading::after, .select.is-loading::after, .control.is-loading::after, .loader{
    border: 2px solid #4cc8a4;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }

</style>
