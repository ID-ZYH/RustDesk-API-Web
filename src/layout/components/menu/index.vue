<template>
  <el-menu
          class="menus"
          :collapse="isCollapse"
          :default-active="activeIndex"
          background-color="transparent"
          text-color="#dbe8ff"
          active-text-color="#ffffff"
          router
  >
    <menu-item v-for="(route,index) in routes" :key="route.name" :route="route"></menu-item>
  </el-menu>
</template>

<script>
  import { defineComponent, ref, onMounted, watch, computed } from 'vue'
  import { useRouteStore } from '@/store/router'
  import MenuItem from '@/layout/components/menu/item.vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/store/app'

  export default defineComponent({
    name: 'Menu',
    created () {
    },
    components: { MenuItem },
    setup () {
      const routes = ref([])
      const route = useRoute()
      const app = useAppStore()
      const isCollapse = computed(() => app.setting.sideIsCollapse)
      const activeIndex = computed(() => route.name)

      routes.value = useRouteStore().routes
      return {
        routes,
        activeIndex,
        isCollapse,
      }
    },

  })
</script>

<style lang="scss" scoped>
  .menus {
    min-height: calc(100vh - 56px);
    border-right: none;
    padding: 10px 8px 12px;
    &:not(.el-menu--collapse) {
      width: var(--sideBarWidth);
    }
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      height: 40px;
      line-height: 40px;
      border-radius: 6px;
      margin-bottom: 6px;
      transition: all 0.2s ease;
      font-weight: 500;
    }
    :deep(.el-menu-item:hover),
    :deep(.el-sub-menu__title:hover) {
      background: rgba(255, 255, 255, 0.16);
      color: #ffffff;
    }
    :deep(.el-menu-item.is-active) {
      background: rgba(255, 255, 255, 0.24);
      box-shadow: none;
    }
    :deep(.el-sub-menu .el-menu) {
      background: transparent;
    }
    :deep(.el-menu-item .el-icon),
    :deep(.el-sub-menu__title .el-icon) {
      font-size: 17px;
      color: #f2f6ff;
    }
    :deep(.el-menu-item span),
    :deep(.el-sub-menu__title span) {
      color: #f2f6ff;
      opacity: 1;
    }
    :deep(.el-menu--collapse .el-menu-item),
    :deep(.el-menu--collapse .el-sub-menu__title) {
      padding: 0 !important;
      justify-content: center;
    }
    :deep(.el-menu--collapse .el-menu-item .el-icon),
    :deep(.el-menu--collapse .el-sub-menu__title .el-icon) {
      margin: 0 !important;
    }
  }
</style>
<style>
</style>
