<template lang="pug">
  div.moment
    el-button(type="primary" @click='handleGetNowTime') 获取实时时间
    el-button(type="primary" @click='handleGetMonthTime') 获取月开始时间
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formatTimestamp, stringifyTimeToDate, stringifyTimeOfScope } from '@/utils'

@Component({})
export default class Moment extends Vue {
  handleGetNowTime(): void {
    const timestamp = stringifyTimeToDate(undefined);
    console.log(formatTimestamp(timestamp))
  }

  handleGetMonthTime(): void {
    const timestamp = stringifyTimeOfScope(undefined, 'month', 'startOf')
    console.log(formatTimestamp(timestamp))
  }
}
</script>

<style scoped>
</style>
