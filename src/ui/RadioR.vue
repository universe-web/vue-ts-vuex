<template>
  <el-radio-group v-model='radioValue' @change='handleClick'>
    <el-radio v-for='(item, key) in list' :key='key' :label='item.value'>{{item.label}}</el-radio>
  </el-radio-group>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RadioR extends Vue {
  @Prop() private list!: object[];
  @Prop() private value!: string;
  @Prop() private name!: string;

  radioValue = this.value

  get getValue(): string {
    return this.radioValue
  }

  handleClick(evt: string): void {
    this.$emit('handleInput', { name: this.name, value: evt })
  } 
}
</script>