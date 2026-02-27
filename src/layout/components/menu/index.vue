<template>
  <el-menu
          class="menus"
          :collapse="isCollapse"
          :default-active="activeIndex"
          popper-class="rd-menu-popper"
          :popper-offset="10"
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
    :deep(.el-menu--collapse) {
      width: 100%;
    }
    :deep(.el-menu--collapse > .el-menu-item),
    :deep(.el-menu--collapse > .el-sub-menu > .el-sub-menu__title) {
      position: relative;
      width: 100%;
      height: 46px;
      line-height: 46px;
      margin: 0 0 8px;
      padding: 0 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      background: transparent !important;
    }
    :deep(.el-menu--collapse > .el-menu-item::before),
    :deep(.el-menu--collapse > .el-sub-menu > .el-sub-menu__title::before) {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      transform: translate(-50%, -50%);
      background: transparent;
      transition: background 0.2s ease;
    }
    :deep(.el-menu--collapse > .el-menu-item .el-icon),
    :deep(.el-menu--collapse > .el-sub-menu > .el-sub-menu__title .el-icon) {
      margin: 0 !important;
      position: relative;
      z-index: 1;
    }
    :deep(.el-menu--collapse > .el-sub-menu > .el-sub-menu__title .el-tooltip__trigger) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 !important;
      border-radius: inherit;
      background: transparent;
    }
    :deep(.el-menu--collapse > .el-menu-item:hover::before),
    :deep(.el-menu--collapse > .el-sub-menu > .el-sub-menu__title:hover::before),
    :deep(.el-menu--collapse > .el-menu-item.is-active::before),
    :deep(.el-menu--collapse > .el-sub-menu.is-active > .el-sub-menu__title::before) {
      background: rgba(255, 255, 255, 0.2);
    }
  }
</style>
<style>
</style>
