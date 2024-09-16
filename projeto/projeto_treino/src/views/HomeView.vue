<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <ol>
    <li> <RouterLink to="/user/1">User 1</RouterLink> </li>
    <li> <RouterLink to="/user/2">User 2</RouterLink> </li>
    <li> <RouterLink to="/user/3">User 3</RouterLink> </li>
    <li> <RouterLink to="/user/4">User 4</RouterLink> </li>
    <li> <RouterLink to="/user/5">User 5</RouterLink> </li>
  </ol>

  <main>
    <TheWelcome />
  </main>
</template>
