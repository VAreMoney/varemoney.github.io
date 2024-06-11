<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/images/v-logo.svg"
          alt="Lightweight UI components for Vue.js based on Bulma"
          style="min-height: 128px"
        />
      </b-navbar-item>
    </template>
    <template #start> </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a href="https://x.com/varemoney"
            ><font-awesome-icon :icon="['fab', 'x-twitter']" style="min-height: 32px"
          /></a>
          <font-awesome-icon :icon="['fab', 'telegram']" style="min-height: 32px" />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
