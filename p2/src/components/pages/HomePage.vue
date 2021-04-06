<template>
  <div id="home-page">
      <p>A collection of foods and bakes by Kim.</p>
  <show-favorites></show-favorites>
  </div>
</template>

<script>
import ShowFavorites from '@/components/ShowFavorites.vue';

export default {
components: {
    "show-favorites": ShowFavorites,
  },
}
</script>

<style>

</style>