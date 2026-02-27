<template>
  <el-menu
          class="menus"
          :collapse="isCollapse"
          :default-active="activeIndex"
          background-color="transparent"
          text-color="#d9e3f0"
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
    min-height: calc(100vh - 20px);
    border-right: none;
    padding: 10px 8px 12px;
    &:not(.el-menu--collapse) {
      width: var(--sideBarWidth);
    }
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      height: 42px;
      line-height: 42px;
      border-radius: 9px;
      margin-bottom: 6px;
      transition: all 0.2s ease;
    }
    :deep(.el-menu-item:hover),
    :deep(.el-sub-menu__title:hover) {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
    :deep(.el-menu-item.is-active) {
      background: linear-gradient(90deg, #3d7eff 0%, #598dff 100%);
      box-shadow: 0 6px 18px rgba(61, 126, 255, 0.45);
    }
    :deep(.el-sub-menu .el-menu) {
      background: transparent;
    }
  }
</style>
<style>
</style>
