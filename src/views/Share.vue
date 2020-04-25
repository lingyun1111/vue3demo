<template>
  <div>
    计数增加到{{count}} 这里是share
    <button @click="add">按钮</button>
    <button @click="restVuex">重置vuex</button>
    VUEX={{test}}
  </div>
</template>

<script>
import { onConut } from './onCount'
import { onMounted } from 'vue'
export default {
  setup () {
    const { count, add, test, restVuex } = onConut()
    onMounted(() => {
      console.log('冲突测试')
      console.log('冲突测试')
    })
    return {
      count,
      add,
      test,
      restVuex
    }
  }
}
</script>
