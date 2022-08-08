<template>
  <div class="container py-5">
    <nav class="my-4">
        <router-link to="/">{{ $t('nav.page1') }}</router-link> |
        <router-link to="/questionSystem">{{ $t('nav.page2') }}</router-link>
    </nav>
    <div class="my-3">
      <button type="button" class="btn btn-primary btn-sm mx-1" :class="{currentLang: lang === '中文'}" @click="changeLang('zh-TW')">中文</button>
      <button type="button" class="btn btn-primary btn-sm mx-1" :class="{currentLang: lang === '英文'}" @click="changeLang('en-US')">EN</button>
      <button type="button" class="btn btn-primary btn-sm mx-1" :class="{currentLang: lang === '日文'}" @click="changeLang('ja-JP')">にほんご</button>
      {{ lang }}
    </div>
    <router-view />
  </div>
</template>

<script>
import { setLocale } from '@vee-validate/i18n' //* 設定表單驗證語系
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
      setLocale(lang) //* 設定表單驗證語系
      this.$i18n.locale = lang //* 設定i18n 語系
    }
  },
  mounted () {
    const lang = localStorage.getItem('lang') || this.langListnavigator.language
    this.lang = this.langList[lang]
    setLocale(lang) //* 設定表單驗證語系
    this.$i18n.locale = lang //* 設定i18n 語系
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
.currentLang, .currentLang:focus {
  background: red;
  color: #fff;
}
.currentLang:hover {
  background: rgba(255, 0, 0, 0.813);
  color: #fff;
}
</style>
