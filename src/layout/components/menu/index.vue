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
    padding: 8px 6px 12px;
    &:not(.el-menu--collapse) {
      width: var(--sideBarWidth);
    }
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      height: 40px;
      line-height: 40px;
      border-radius: 6px;
      margin-bottom: 4px;
      transition: all 0.2s ease;
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
  }

  :global(html.dark) .menus :deep(.el-menu-item.is-active) {
    background: rgba(140, 176, 255, 0.3);
  }
</style>
<style>
</style>
