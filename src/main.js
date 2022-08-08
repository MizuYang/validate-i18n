import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min, max, size, mimes } from '@vee-validate/rules'
import { isPhone, isImage } from '../validate/rules'

// 匯入多國語系的功能
import { localize } from '@vee-validate/i18n'
// import { localize, setLocale } from '@vee-validate/i18n'

// 匯入表單驗證語系
import tw from '../validate/i18n/zh-TW.json'
import en from '../validate/i18n/en-US.json'
import ja from '../validate/i18n/ja-JP.json'

import i18n from '../i18n/lang.js' //* 多國語系

import App from './App.vue'
import router from './router'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('size', size)
defineRule('mimes', mimes)
//* 自訂規則
defineRule('isPhone', isPhone)
defineRule('isImage', isImage)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize( // 載入語系
    {
      'zh-TW': tw,
      'en-US': en,
      'ja-JP': ja
    }),
  // validateOnInput: true // 當輸入任何內容直接進行驗證
  //* 按送出才驗證
  validateOnBlur: false,
  validateOnChange: false

})

const app = createApp(App)

app.component('Form', Form) // eslint-disable-line
app.component('Field', Field) // eslint-disable-line
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.use(i18n)
app.use(VueAxios, axios)
app.mount('#app')
