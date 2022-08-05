//* 電話驗證
export function isPhone (value) {
  const phoneNumber = /^(09)[0-9]{8}$/
  return phoneNumber.test(value) ? true : '請輸入 09 開頭的正確電話號碼'
}
//* 型別驗證
export function isImage (value) {
  const img = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'psd', 'thm', 'yuv', 'ai', 'drw', 'eps', 'ps', 'svg', '3dm', 'max', 'heic']
  const type = value.name.split('.').pop()
  return img.includes(type) ? true : '請上傳正確的圖片格式!!'
}
