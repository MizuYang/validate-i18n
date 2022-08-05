<template>
  <div class="container py-5">
    <nav class="my-4">
        <router-link to="/">資料登錄</router-link> |
        <router-link to="/about">出題系統</router-link>
    </nav>
    <div class="my-2">
      <button type="button" class="btn btn-primary btn-sm mx-1">中文</button>
      <button type="button" class="btn btn-primary btn-sm mx-1">EN</button>
      <button type="button" class="btn btn-primary btn-sm mx-1">にほんご</button>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
