import { ref, watch, computed, getCurrentInstance } from 'vue'
export const onConut = () => {
  // 声明组件上下文
  const { ctx } = getCurrentInstance()
  // 定义个对象
  const testObj = ref({ name: 1 })
  // 定义个数字
  const count = ref(0)
  // 计数增加方法 并且改变定义的对象 提交vuex
  const add = () => {
    count.value++
    const b = { tt: 221 }
    testObj.value = Object.assign({}, testObj, b)
    ctx.$store.commit('user/SET_TEST', 'aaaa')
  }
  const restVuex = () => {
    ctx.$store.commit('user/RESET_STATE')
  }
  // 计算双倍数字
  const doubleCount = computed(() => count.value * 2)
  // 监听
  watch(() => count.value, (val, old) => {
    console.log(`计数到了${val}老数据${old}`)
  })
  // 计算VUEX
  const test = computed(() => ctx.$store.state.user.test)
  return {
    count,
    add,
    doubleCount,
    test,
    restVuex
  }
}
