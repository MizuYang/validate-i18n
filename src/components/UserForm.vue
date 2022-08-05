<template>
  <h2>{{ $t('title') }}</h2>
  <Form  v-slot="{ errors }" @submit="onSubmit">
    <!-- 姓名 -->
    <section class="my-3">
      <label for="name" class="form-label">{{ $t('form.name') }}</label>
      <Field type="text" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('form.name')] }" id="name" :name="$t('form.name')" :placeholder="$t('form.namePlaceholder')" rules="required" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model.trim="user.name"></Field>
      <ErrorMessage :name="$t('form.name')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 電話 -->
    <section class="my-3">
      <label for="tel" class="form-label">{{ $t('form.tel') }}</label>
      <Field type="tel" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('form.tel')] }" id="tel" :name="$t('form.tel')" :placeholder="$t('form.telPlaceholder')" rules="isPhone|required" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="user.tel"></Field>
      <ErrorMessage :name="$t('form.tel')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 信箱 -->
    <section class="my-3">
      <label for="email" class="form-label">{{ $t('form.email') }}</label>
      <Field type="email" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('form.email')] }" id="email" :name="$t('form.email')" :placeholder="$t('form.emailPlaceholder')" rules="required|email" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="user.email"></Field>
      <ErrorMessage :name="$t('form.email')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼 -->
    <section class="my-3">
      <label for="file" class="form-label">{{ $t('form.upload1') }} </label>(150kb)
      <small class="ms-3">{{ $t('form.upload1Samll') }}
        <span class="text-danger">{{ $t('form.upload1Span') }}</span>
      </small>
      <Field type="file" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('form.upload2')] }" id="file" :name="$t('form.upload2')" :rules="{required: true, mimes:['image/*'], size:150}"></Field>
      <ErrorMessage :name="$t('form.upload2')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼(自訂驗證檔案類型，可上傳 Heic 檔) -->
    <section class="my-3">
      <label for="file2" class="form-label">{{ $t('form.upload2') }} </label>(150kb)
      <small class="ms-3">{{ $t('form.upload2Samll') }}
        <span class="text-success">{{ $t('form.upload2Span') }}</span>
      </small>
      <Field type="file" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('form.upload2')] }" id="file2" :name="$t('form.upload2')" :rules="{required: true, isImage: true, size:150}"></Field>
      <ErrorMessage :name="$t('form.upload2')" class="invalid-feedback"></ErrorMessage>
    </section>

    <footer class="text-center my-2">
      <button type="submit" class="btn btn-primary btn-sm">{{ $t('form.btn') }}</button>
    </footer>
  </Form>
</template>

<script>

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
  }
}
</script>
