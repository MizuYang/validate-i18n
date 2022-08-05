<template>
  <h2>教師資料登錄</h2>
  <Form  v-slot="{ errors }" @submit="onSubmit">
    <!-- 姓名 -->
    <section class="my-3">
      <label for="name" class="form-label">姓名</label>
      <Field type="text" class="form-control form-control-sm" :class="{ 'is-invalid': errors['姓名'] }" id="name" name="姓名" placeholder="請輸入姓名" rules="required" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model.trim="user.name"></Field>
      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 電話 -->
    <section class="my-3">
      <label for="tel" class="form-label">手機</label>
      <Field type="tel" class="form-control form-control-sm" :class="{ 'is-invalid': errors['手機'] }" id="tel" name="手機" placeholder="請輸入手機" rules="isPhone|required" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="user.tel"></Field>
      <ErrorMessage name="手機" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 信箱 -->
    <section class="my-3">
      <label for="email" class="form-label">信箱</label>
      <Field type="email" class="form-control form-control-sm" :class="{ 'is-invalid': errors['信箱'] }" id="email" name="信箱" placeholder="請輸入 Email" rules="required|email" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="user.email"></Field>
      <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼 -->
    <section class="my-3">
      <label for="file" class="form-label">上傳大頭貼 (150kb)</label>
      <small class="ms-3">使用官方驗證規則，
        <span class="text-danger">圖片無法驗證 Heic</span>
      </small>
      <Field type="file" class="form-control form-control-sm" :class="{ 'is-invalid': errors['上傳大頭貼'] }" id="file" name="上傳大頭貼" :rules="{required: true, mimes:['image/*'], size:150}"></Field>
      <ErrorMessage name="上傳大頭貼" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼(自訂驗證檔案類型，可上傳 Heic 檔) -->
    <section class="my-3">
      <label for="file2" class="form-label">上傳大頭貼 (150kb)</label>
      <small class="ms-3">自訂驗證檔案類型，
        <span class="text-success">可上傳 Heic 檔</span>
      </small>
      <Field type="file" class="form-control form-control-sm" :class="{ 'is-invalid': errors['上傳大頭貼2'] }" id="file2" name="上傳大頭貼2" :rules="{required: true, isImage: true, size:150}"></Field>
      <ErrorMessage name="上傳大頭貼2" class="invalid-feedback"></ErrorMessage>
    </section>

    <footer class="text-center my-2">
      <button type="submit" class="btn btn-primary btn-sm">送出</button>
    </footer>
  </Form>
</template>

<script>
import { setLocale } from '@vee-validate/i18n'

export default {
  data () {
    return {
      lang: localStorage.getItem('lang') || navigator.language,
      user: {
        email: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log(values)
      console.log(this.user)
    }
  },
  mounted () {
    //* 起初先判斷使用語系，判斷後直接用 setLocale 做設定，並將使用語言存在 localStorage
    //* 自訂規則需要製作不同語系
    //* 在自訂驗證的 js 檔匯入所有語系的 JSON
    //* 針對語系去讀取該語系的 feedback
    //* 一樣將日文、英文的 i18n 下載下來，將自己新增的規則名稱加上去

    setLocale(this.lang)
  }
}
</script>
