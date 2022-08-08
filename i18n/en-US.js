const en = {
  nav: {
    page1: 'data login',
    page2: 'Question system'
  },
  page1: {
    title: 'Teacher profile login',
    form: {
      name: 'name',
      namePlaceholder: 'Please type in your name',
      tel: 'tel',
      telPlaceholder: 'Please enter your phone',
      email: 'email',
      emailPlaceholder: 'Please enter email',
      selectFile1: 'Select file', //* 覆蓋選擇檔案字樣
      neverSelect1: 'No file typeface selected', //* 覆蓋未選擇任何檔案字樣
      upload1: 'upload photo',
      upload1Samll: 'Use official validation rules',
      upload1Span: 'Image cannot be verified Heic',
      selectFile2: 'Select file', //* 覆蓋選擇檔案字樣
      neverSelect2: 'No file typeface selected', //* 覆蓋未選擇任何檔案字樣
      upload2: 'upload2 photo',
      upload2Samll: 'Custom Authentication File Type',
      upload2Span: 'Heic files can be uploaded',
      btn: 'submit'
    }
  },
  page2: {
    title: 'teacher question system',
    form: {
      examType: 'Exam Type',
      subject: 'subject',
      selectTitle: 'Please select exam difficulty',
      selectErrFeedback: 'Please select difficulty',
      textareaTitle: 'words to students',
      btn: 'submit'
    },
    radioList: {
      哲學: 'philosophy',
      數學: 'math',
      統計學: 'statistics',
      藝術: 'Art',
      化學: 'Chemical',
      物理學: 'physics'
    },
    checkboxList: {
      克漏字: 'gram',
      選擇題: 'single choice',
      是非題: 'true & false topic',
      複選題: 'multiple choice',
      填空題: 'fill in the blank',
      寫作: 'writing'
    },
    selectList: {
      困難: 'hard',
      普通: 'normal',
      簡單: 'Simple'
    }
  }

}

export default en
