<template>
  <h2>{{ $t('page1.title') }}</h2>
  <Form  v-slot="{ errors }" @submit="onSubmit" ref="form">
    <!-- 姓名 -->
    <section class="my-3">
      <label for="name" class="form-label">{{ $t('page1.form.name') }}</label>
      <Field type="text" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('page1.form.name')] }" id="name" :name="$t('page1.form.name')" :placeholder="$t('page1.form.namePlaceholder')" rules="required" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model.trim="form.name"></Field>
      <ErrorMessage :name="$t('page1.form.name')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 電話 -->
    <section class="my-3">
      <label for="tel" class="form-label">{{ $t('page1.form.tel') }}</label>
      <Field type="tel" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('page1.form.tel')] }" id="tel" :name="$t('page1.form.tel')" :placeholder="$t('page1.form.telPlaceholder')" rules="isPhone|required" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="form.tel"></Field>
      <ErrorMessage :name="$t('page1.form.tel')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 信箱 -->
    <section class="my-3">
      <label for="email" class="form-label">{{ $t('page1.form.email') }}</label>
      <Field type="email" class="form-control form-control-sm" :class="{ 'is-invalid': errors[$t('page1.form.email')] }" id="email" :name="$t('page1.form.email')" :placeholder="$t('page1.form.emailPlaceholder')" rules="required|email" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="form.email"></Field>
      <ErrorMessage :name="$t('page1.form.email')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼 -->
    <section class="my-3">
      <label for="file" class="form-label">{{ $t('page1.form.upload1') }} </label>(150kb)
      <small class="ms-3">{{ $t('page1.form.upload1Samll') }}
        <span class="text-danger">{{ $t('page1.form.upload1Span') }}</span>
      </small>
      <Field type="file" class="form-control form-control-sm position-relative" :class="{ 'is-invalid': errors[$t('page1.form.upload1')] }" id="file1" :name="$t('page1.form.upload1')" :rules="{required: true, mimes:['image/*'], size:150}" @change="upload1" :data-selectFileLang1="$t('page1.form.selectFile1')" :data-neverSelectLang1="$t('page1.form.neverSelect1')"></Field>
      <ErrorMessage :name="$t('page1.form.upload1')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 上傳大頭貼(自訂驗證檔案類型，可上傳 Heic 檔) -->
    <section class="my-3">
      <label for="file2" class="form-label">{{ $t('page1.form.upload2') }} </label>(150kb)
      <small class="ms-3">{{ $t('page1.form.upload2Samll') }}
        <span class="text-success">{{ $t('page1.form.upload2Span') }}</span>
      </small>
      <Field type="file" class="form-control form-control-sm position-relative" :class="{ 'is-invalid': errors[$t('page1.form.upload2')] }" id="file2" :name="$t('page1.form.upload2')" :rules="{required: true, isImage: true, size:150}" @change="upload2" :data-selectFileLang2="$t('page1.form.selectFile2')" :data-neverSelectLang2="$t('page1.form.neverSelect2')"></Field>
      <ErrorMessage :name="$t('page1.form.upload2')" class="invalid-feedback"></ErrorMessage>
    </section>

    <footer class="text-center my-2">
      <button type="submit" class="btn btn-primary btn-sm">{{ $t('page1.form.btn') }}</button>
    </footer>
  </Form>
</template>

<script>

export default {
  data () {
    return {
      lang: localStorage.getItem('lang') || navigator.language,
      form: {}
    }
  },
  methods: {
    upload1 (e) {
      this.showUploadFile(e, 1)
      this.form.upload1 = e.target.files[0]
    },
    upload2 (e) {
      this.showUploadFile(e, 2)
      this.form.upload2 = e.target.files[0]
    },
    showUploadFile (e, num) {
      if (e.target.files[0]?.name) {
        //* 若上傳檔案，將未選擇任何檔案改為上傳的檔案名稱
        document.getElementById(`file${num}`).setAttribute(`data-neverSelectLang${num}`, e.target.files[0].name)
      }
    },
    onSubmit (values) {
      console.log(values)
      console.log(this.form)
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

<style lang="scss" scoped>
@mixin coverSelectFileWord ($num) {
  content: attr(data-selectFileLang#{$num}) "";
  position: absolute;
  top: 0;
  left: 2px;
  z-index: 2;
  background-color: #E9ECEF;
  padding: 4px 10px;
}
@mixin coverNeverSelectFileWord ($num) {
  content: attr(data-neverSelectLang#{$num}) "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #ffffff;
  padding: 4px 500px;
}

//* 覆蓋檔案上傳 "選擇檔案" 字樣
[data-selectFileLang1]::before {
  @include coverSelectFileWord(1);
}
//* 覆蓋檔案上傳 "未選擇任何檔案" 字樣
[data-neverSelectLang1]::after {
  @include coverNeverSelectFileWord(1);
}

//* 覆蓋檔案上傳 "選擇檔案" 字樣 2
[data-selectFileLang2]::before {
  @include coverSelectFileWord(2);
}
//* 覆蓋檔案上傳 "未選擇任何檔案" 字樣 2
[data-neverSelectLang2]::after {
  @include coverNeverSelectFileWord(2);
}
</style>
