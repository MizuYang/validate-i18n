<template>
  <h2>教師出題系統</h2>
  <Form v-slot="{ errors }" @submit="onSubmit">
     <!-- 考試科目 -->
    <section class="my-3">
      <h3>科目</h3>
      <template v-for="(radio, index) in radioList" :key="`radio${index+1}`">
        <Field type="radio" :class="{ 'is-invalid': errors['考試科目'] }" :id="`radio${index+1}`" name="考試科目" rules="required" :value="radio" v-model="form.subject"></Field>
        <label :for="`radio${index+1}`" class="form-label me-2">{{ radio }}</label>
      </template>
      <ErrorMessage name="考試科目" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- 考試類型 -->
    <section class="my-3">
      <h3>考試類型 (可複選)</h3>
      <template v-for="(checkbox, index) in checkboxList" :key="`checkbox${index+1}`">
        <Field type="checkbox" :class="{ 'is-invalid': errors['考試類型'] }" :id="`checkbox${index+1}`" name="考試類型" rules="required" :value="checkbox" v-model="form.examType"></Field>
        <label :for="`checkbox${index+1}`" class="form-label me-2">{{ checkbox }}</label>
      </template>
      <ErrorMessage name="考試類型" class="invalid-feedback"></ErrorMessage>
    </section>

    <footer class="text-center my-3">
      <button type="submit" class="btn btn-primary -btn-sm">送出</button>
    </footer>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        examType: [],
        subject: ''

      },
      radioList: ['哲學', ' 數學', '統計學', ' 藝術', ' 化學', ' 物理學'],
      checkboxList: ['克漏字', '選擇題', '是非題', '複選題', '填空題', '寫作']
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>
