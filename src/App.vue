<template>
  <div class="container py-5">
    <nav class="my-4">
        <router-link to="/">資料登錄</router-link> |
        <router-link to="/about">出題系統</router-link>
    </nav>
    <div class="my-3">
      <button type="button" class="btn btn-primary btn-sm mx-1" @click="changeLang('zh-TW')">中文</button>
      <button type="button" class="btn btn-primary btn-sm mx-1" @click="changeLang('en-US')">EN</button>
      <button type="button" class="btn btn-primary btn-sm mx-1" @click="changeLang('ja-JP')">にほんご</button>
      {{ lang }}
    </div>
    <router-view />
  </div>
</template>

<script>
import { setLocale } from '@vee-validate/i18n'

export default {
  computed: {
  },

  watch: {
    lang () {
    }
  },

  data () {
    return {
      lang: '',
      langList: {
        'zh-TW': '中文',
        'en-US': '英文',
        'ja-JP': '日文'
      }
    }
  },
  methods: {
    changeLang (lang) {
      this.lang = this.langList[lang]
      localStorage.setItem('lang', lang)
      setLocale(lang)
    }
  },
  mounted () {
    const lang = localStorage.getItem('lang') || this.langListnavigator.language
    this.lang = this.langList[lang]
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
