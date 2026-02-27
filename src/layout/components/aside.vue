<template>
  <div class="side-shell">
    <div class="side-brand">
      <img :src="setting.logo" class="brand-logo" alt="logo">
      <div class="brand-text" v-if="!setting.sideIsCollapse">{{ setting.title }}</div>
    </div>
    <el-scrollbar class="scroll-sidebar" height="100vh">
      <menus></menus>
    </el-scrollbar>
  </div>
</template>
<script>
  import Menus from '@/layout/components/menu/index.vue'
  import { defineComponent, computed } from 'vue'
  import { useAppStore } from '@/store/app'

  export default defineComponent({
    name: 'GAside',
    components: { Menus },
    setup () {
      const appStore = useAppStore()
      const setting = computed(() => appStore.setting)
      return { setting }
    },
  })
</script>

<style scoped lang="scss">
.side-shell {
  height: calc(100vh - 20px);
  border-radius: 14px;
  background: linear-gradient(180deg, #162033 0%, #1d2b45 100%);
  box-shadow: 0 10px 26px rgba(22, 32, 51, 0.35);
  overflow: hidden;
}
.side-brand {
  height: 58px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.brand-logo {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}
.brand-text {
  color: #f8fbff;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.scroll-sidebar {
  height: calc(100vh - 78px);
}
</style>
