<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="hero is-fullheight">
    <header class="header" style="background-color: black">
      <div class="container">
        <NavBar />
        <HeaderComponent />
      </div>
    </header>
    <main class="main" style="background-color: black">
      <div class="container">
        <RouterView />
      </div>
    </main>
    <footer
      class="footer is-fixed-bottom is-flex is-flex-direction-column"
      style="background-color: black"
    >
      <div class="container mt-0 pt-0">
        <FooterComponent />
      </div>
    </footer>
  </div>
</template>
