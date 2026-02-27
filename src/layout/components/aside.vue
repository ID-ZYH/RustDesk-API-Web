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
  height: 100vh;
  border-radius: 0;
  background: #1f58d6;
  overflow: hidden;
}
.side-brand {
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.brand-logo {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: #fff;
}
.brand-text {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.scroll-sidebar {
  height: calc(100vh - 56px);
}

:global(html.dark) .side-shell {
  background: #12377f;
}
</style>
