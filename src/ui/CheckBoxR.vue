<template>
  <el-checkbox-group v-model='checkBoxValue' @change='handleClick'>
    <el-checkbox v-for='(item, key) in list' :key='key' :label='item.label' />
  </el-checkbox-group>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CheckBoxR extends Vue {
  @Prop() private list!: object[];
  @Prop() private value!: string[];
  @Prop() private name!: string;

  checkBoxValue = this.value

  get getValue(): string[] {
    return this.checkBoxValue
  }

  handleClick(evt: string[]): void {
    this.$emit('handleInput', { name: this.name, value: evt.map(item => item) })
  } 
}
</script>