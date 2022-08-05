// //* 匯入語系
import tw from './i18n/zh-TW.json'
import en from './i18n/en-US.json'
import ja from './i18n/ja-JP.json'
const language = {
  'zh-TW': tw,
  'en-US': en,
  'ja-JP': ja
}
// //* 取得使用語言
let lang = localStorage.getItem('lang') || navigator.language

window.addEventListener('storage', () => {
  console.log('local 變化')
})

//! 目前先這樣寫，連續去抓目前使用的語言
//! 若有辦法能夠監聽 localStorage 或在切換語言時執行這支 JS 檔，來讓 lang 變數從 localStorage 抓到目前選擇的語言
setInterval(() => {
  lang = localStorage.getItem('lang') || navigator.language
}, 500)

//* 電話驗證
export function isPhone (value) {
  const phoneNumber = /^(09)[0-9]{8}$/
  const feedback = language[lang].messages.isPhone
  return phoneNumber.test(value) ? true : feedback
}
//* 檔案類型驗證
export function isImage (value) {
  const img = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'psd', 'thm', 'yuv', 'ai', 'drw', 'eps', 'ps', 'svg', '3dm', 'max', 'heic']
  const type = value.name.split('.').pop()
  const feedback = language[lang].messages.isImage
  return img.includes(type) ? true : feedback
}
