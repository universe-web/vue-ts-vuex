<template>
  <span class="text">{{ text }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RedText extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped>
.text {
  font-size: 20px;
  color: #FF7F00;
}
</style>