<template>
  <Landing></Landing>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  components: {
    Landing
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bona+Nova:wght@400;700&display=swap');

  .primary-button {
    width: 250px;
    height: 70px;
    background-color: #E05C2B;
    border-radius: 12px;
    border: none;
    font-family: Bona Nova;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }

  .secondary-button {
    width: 250px;
    height: 70px;
    border-radius: 12px;
    background: none;
    border: 2px solid #1C1C1C;
    font-family: Bona Nova;
    font-size: 20px;
    font-weight: 700;
    color: #1C1C1C;
  }

</style>
