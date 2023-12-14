<script setup>
</script>

<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/1">1</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>
