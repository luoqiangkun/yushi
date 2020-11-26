// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Container,Header,Main,Footer,PageHeader,Menu,Submenu,MenuItem,Card,Image,Checkbox,CheckboxGroup,Button,Row,Alert,Steps,
  Step,Input,Radio,RadioGroup,Select,Option,OptionGroup,Form,FormItem,Divider,Cascader,Upload} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(PageHeader)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Image)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Button)
Vue.use(Row)
Vue.use(Alert)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Divider)
Vue.use(Cascader)
Vue.use(Upload)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
