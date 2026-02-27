<template>
  <el-scrollbar class="scroll-sidebar" height="100vh">
    <menus></menus>
  </el-scrollbar>
</template>
<script>
  import Menus from '@/layout/components/menu/index.vue'
  import { defineComponent, ref, onMounted } from 'vue'

  export default defineComponent({
    name: 'GAside',
    components: { Menus },
  })
</script>

<style scoped lang="scss">
.scroll-sidebar {
  height: calc(100vh - 20px);
  border-radius: 14px;
  background: linear-gradient(180deg, #162033 0%, #1d2b45 100%);
  box-shadow: 0 10px 26px rgba(22, 32, 51, 0.35);
}
</style>
