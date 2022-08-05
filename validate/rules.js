//* 匯入語系
import tw from './i18n/zh-TW.json'
import en from './i18n/en-US.json'
import ja from './i18n/ja-JP.json'
const language = {
  'zh-TW': tw,
  'en-US': en,
  'ja-JP': ja
}
//* 取得使用語言
const lang = localStorage.getItem('lang') || navigator.language

//* 電話驗證
export function isPhone (value) {
  const phoneNumber = /^(09)[0-9]{8}$/
  const feedback = language[lang].messages.isPhone
  return phoneNumber.test(value) ? true : feedback
}
//* 型別驗證
export function isImage (value) {
  const img = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'psd', 'thm', 'yuv', 'ai', 'drw', 'eps', 'ps', 'svg', '3dm', 'max', 'heic']
  const type = value.name.split('.').pop()
  return img.includes(type) ? true : '請上傳正確的圖片格式!!'
}
