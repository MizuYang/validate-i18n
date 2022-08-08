<template>
  <h2>{{ $t('page2.title') }}</h2>
  <Form v-slot="{ errors }" @submit="onSubmit" ref="form">
     <!-- 考試科目 -->
    <section class="my-3">
      <h3>{{ $t('page2.form.subject') }}</h3>
      <template v-for="(langRadio, twRadio, index) in $tm('page2.radioList')" :key="`radio${index+1}`">
        <Field type="radio" :class="{ 'is-invalid': errors[$t('page2.form.subject')] }" :id="`radio${index+1}`" :name="$t('page2.form.subject')" rules="required" :value="twRadio" v-model="form.subject"></Field>
        <label :for="`radio${index+1}`" class="form-label me-2">{{ langRadio }}</label>
      </template>
      <ErrorMessage :name="$t('page2.form.subject')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 考試類型 -->
    <section class="my-3">
      <h3>{{ $t('page2.form.examType') }}</h3>
      <template v-for="(langCheckbox,twCheckbox, index) in $tm('page2.checkboxList')" :key="`checkbox${index+1}`">
        <Field type="checkbox" :class="{ 'is-invalid': errors[$t('page2.form.examType')] }" :id="`checkbox${index+1}`" :name="$t('page2.form.examType')" rules="required" :value="twCheckbox" v-model="form.examType"></Field>
        <label :for="`checkbox${index+1}`" class="form-label me-2">{{ langCheckbox }}</label>
      </template>
      <ErrorMessage :name="$t('page2.form.examType')" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 難易度 -->
    <Field class="form-control form-control-sm" :class="{ 'is-invalid': errors['select'] }" name="select2" as="select" rules="required" v-model="form.degree">
      <option value="" selected disabled>{{ $t('page2.form.selectTitle') }}</option>
      <option :value="twSelect" v-for="(langSelect, twSelect, index) in $tm('page2.selectList')" :key="`select${index+1}`" name="select">{{ langSelect }}</option>
    </Field>
    <small class="d-none text-danger d-inline-block my-2" ref="selectErrFeedback">{{ $t('page2.form.selectErrFeedback') }}</small>

    <footer class="text-center my-3">
      <button type="submit" class="btn btn-primary btn-sm" @click="validateSelect">{{ $t('page2.form.btn') }}</button>
    </footer>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        examType: [], //* 考試類型
        subject: '', //* 科目
        degree: '' //* 難度
      }
    }
  },
  methods: {
    validateSelect () {
      const validate = !!this.form.degree
      if (!validate) {
        this.$refs.selectErrFeedback.classList.remove('d-none')
      } else {
        this.$refs.selectErrFeedback.classList.add('d-none')
      }
    },
    onSubmit () {
      console.log(this.useIsSubmitting)
      console.log(this.form)
    }
  },
  mounted () {
  }
}
</script>
