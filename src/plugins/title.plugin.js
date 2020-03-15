export default {
  install(Vue) {
    Vue.prototype.$title = function (title) {
      return `${process.env.VUE_APP_TITLE} | ${title}`
    }
  }
}
