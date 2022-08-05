
import { createI18n } from 'vue-i18n'

// 自定义国际化文件
import tw from './zh-TW'
import en from './en-US'
import ja from './ja-JP'

const i18n = createI18n({
  legacy: false, // Composition API 模式
  globalInjection: true, // 全局注册 $t方法
  //* 查看有無儲存語言 > 使用瀏覽器語言 > 預設中文
  locale: localStorage.getItem('lang') || navigator.language || 'zh-TW',
  // 语言库
  messages: {
    'zh-TW': tw,
    'en-US': en,
    'ja-JP': ja
  }
})

// 将i18n暴露出去，在main.js中引入挂载
export default i18n
