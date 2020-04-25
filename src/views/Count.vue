<template>
  <div class="home">
    计数增加到{{count}}
    <button @click="add">按钮</button>
  </div>
</template>

<script>
import { onConut } from './onCount'
export default {
  setup () {
    const { count, add, restVuex } = onConut()
    return {
      count,
      add,
      restVuex
    }
  }
}
</script>
