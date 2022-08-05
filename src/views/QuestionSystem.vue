<template>
  <h2>教師出題系統</h2>
  <Form>
    <section class="my-3">
      <label for="type1" class="form-label"></label>
      <Field type="radio" class="form-control form-control-sm" :class="{ 'is-invalid': errors['考試類型'] }" id="type1" name="考試類型" rules="required" v-model="type"></Field>
      <ErrorMessage name="考試類型" class="invalid-feedback"></ErrorMessage>
    </section>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: []
      }
    }
  }
}
</script>
