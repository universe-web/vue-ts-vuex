import Vue from 'vue';
import { Button, Icon, Checkbox, CheckboxGroup, Radio, RadioGroup, DatePicker, TimePicker } from 'element-ui';

export default () => {
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(DatePicker)
  Vue.use(TimePicker)
}