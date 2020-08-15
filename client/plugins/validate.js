import Vue from 'vue'

Vue.prototype.$validate = {
  required: (value) => !!value || '入力してください',
  maxLength: (value, maxLength) =>
    !value ||
    value.length <= maxLength ||
    maxLength + '文字以下で入力してください',
  minLength: (value, minLength) =>
    !value ||
    value.length >= minLength ||
    minLength + '文字以上で入力してください',
  isValidEmail: (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || '有効なメールアドレスではありません'
  },
  isInt: (value) =>
    Number.isInteger(Number(value)) || '整数値を入力してください',
  range: (value, minValue, maxValue) =>
    (value >= minValue && value <= maxValue) ||
    minValue + '以上' + maxValue + '以下の範囲で入力してください',
  imageSizeMax: (value, sizeMax) =>
    !value ||
    !value.size ||
    value.size <= sizeMax * 1000000 ||
    '画像は' + sizeMax + 'MB以下にしてください'
}
