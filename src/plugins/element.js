import Vue from 'vue'
import { Button, Select, Option, Message } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.prototype.$message = Message
