// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
var app = new Vue({
  el: '#main',
  data: {
    showModal: false,
    message: 'Hello Vue!'
  }
})

