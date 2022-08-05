<template>
  <div class="container py-5">
    <nav class="my-4">
      <router-link to="/">資料登錄</router-link> |
      <router-link to="/about">出題系統</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
