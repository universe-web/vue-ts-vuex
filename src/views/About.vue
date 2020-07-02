<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="eui">
      <el-button type="primary" @click='handleClickButton'>打印DATA</el-button><br /><br />
      <i class="el-icon-delete" /><br /><br />

      <CheckBox-R :list='checkBoxList' :value='input.cbSelected' name='cbSelected' @handleInput='handleInput' />
      <Radio-R :list='radioList' :value='input.radioSelected' name='radioSelected' @handleInput='handleInput' />

      <br /><br />
      <el-date-picker
        v-model="input.time"
        type="datetime"
        value-format='timestamp'
        @change='hendleTimeChange'
        placeholder="选择时间">
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CheckBoxR from '@/ui/CheckBoxR.vue';
import RadioR from '@/ui/RadioR.vue'
import { formatTimestamp } from '../utils'

@Component({
  components: { 'CheckBox-R' : CheckBoxR, 'Radio-R': RadioR }
})
export default class About extends Vue {
  checkBoxList = [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]
  radioList = [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }]
  input = {
    cbSelected: [],
    radioSelected: '',
    time: ''
  }

  handleClickButton(): void {
    console.log(this.input)
  }

  handleInput(evt: { name: string; value: never[] | string }): void {
    const { name, value } = evt

    this.input = { ...this.input, [name]: value }
  }

  hendleTimeChange(evt: never): void {
    console.log(evt)
    console.log(formatTimestamp(evt))
  }
}
</script>
