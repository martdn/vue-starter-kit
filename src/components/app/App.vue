<template>
  <div id="app" class="wrapper">
    <header class="header">
      <div class="header__container">
        <a href="/" class="header__logo"></a>
      </div>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "styles/index";
</style>