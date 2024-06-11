<template>
  <section class="section p-0 m-0">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full-width has-text-centered mb-6 mt-6">
          <div class="title rubik-glitch-regular">v are money</div>
          <div class="is-size-2 has-text-yellow">
            Stand with us, be the spark,<br />
            In this revolution’s arc,<br />
            A new era is in sight,<br />
            Join the movement, claim your right.
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/v-www-img-02.png"
      alt="making bars"
      class="is-fullwidth m-0 p-0"
      style="width: 100%"
      width="100%"
    />
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full-width has-text-centered mb-3 mt-6 is-size-2 space-mono-bold">
          CA:
          <a
            href="https://basescan.org/token/0xfca463ffce3e9528253a545a3358bba848cabc48"
            target="_blank"
            class="has-text-yellow link-hover"
          >
            0xfca463ffce3e9528253a545a3358bba848cabc48
          </a>
          <font-awesome-icon
            :icon="['fas', 'copy']"
            class="copy-icon link-hover"
            :class="{ active: isActive }"
            @click="copyToClipboard"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
          />
          <span v-if="showTooltip" class="tooltip">Copied</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTelegram, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopy as faCopySolid } from '@fortawesome/free-solid-svg-icons'

const showTooltip = ref(false)
const isHovered = ref(false)
const isActive = ref(false)

const copyToClipboard = () => {
  const textToCopy = '0xfca463ffce3e9528253a545a3358bba848cabc48'
  navigator.clipboard.writeText(textToCopy).then(() => {
    showTooltip.value = true
    isActive.value = true
    setTimeout(() => {
      showTooltip.value = false
      isActive.value = false
    }, 2000)
  })
}
</script>

<style scoped>
.copy-icon {
  cursor: pointer;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.copy-icon.active {
  color: inherit; /* Reset to default color on click */
}

.tooltip {
  display: inline-block;
  margin-left: 10px;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.tooltip.fade-out {
  opacity: 0;
}
</style>
