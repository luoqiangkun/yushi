// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/theme/index.css'
import { Container,Header,Main,Footer,PageHeader,Menu,Submenu,MenuItem,Card,Image,Checkbox,CheckboxGroup,Button,Alert,Steps,
  Step,Input,Radio,RadioGroup,Select,Option,OptionGroup,Form,FormItem,Divider,Cascader,Upload,Collapse,CollapseItem,Icon,Dialog,
  MessageBox,Message,Row,Col,Table,TableColumn } from 'element-ui'
import 'normalize.css/normalize.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Vuex)

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
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import './perm' // permission control

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
