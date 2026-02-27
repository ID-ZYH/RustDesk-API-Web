<template>
  <el-config-provider :locale="appStore.setting.locale.value">
    <el-container class="app-shell" :style="{'--sideBarWidth': sideBarWidth}">
      <el-aside :width="leftWidth" class="app-left">
        <g-aside></g-aside>
      </el-aside>
      <el-container class="app-container">
        <el-header class="app-header">
          <g-header></g-header>
        </el-header>
        <div class="header-tags">
          <tags></tags>
        </div>

        <el-main class="app-main">
          <div class="page-panel">
            <router-view v-slot="{ Component }">
              <transition mode="out-in" name="el-fade-in-linear">
                <keep-alive :include="cachedTags">
                  <component :is="Component"/>
                </keep-alive>
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup>
  import { useAppStore } from '@/store/app'
  import { useTagsStore } from '@/store/tags'
  import { ref, computed } from 'vue'
  import Tags from '@/layout/components/tags/index.vue'
  import GAside from '@/layout/components/aside.vue'
  import GHeader from '@/layout/components/header.vue'

  const appStore = useAppStore()
  const tagStore = useTagsStore()
  const sideBarWidth = computed(() => appStore.setting.locale.sideBarWidth)
  const leftWidth = computed(() => appStore.setting.sideIsCollapse ? '64px' : 'var(--sideBarWidth)')

  const cachedTags = ref([])

  cachedTags.value = tagStore.cached
</script>

<style lang="scss" scoped>
.app-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 8%, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0) 42%),
    radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 45%),
    linear-gradient(180deg, #f4f8ff 0%, #f2f6fd 100%);
}

.app-header {
  background: transparent;
  display: flex;
  height: 62px;
  padding: 8px 16px 0;
}

.header-tags {
  height: 44px;
  display: flex;
  align-items: center;
  margin: 0 16px;
  padding: 0 10px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  background: rgba(255, 255, 255, 0.86);
  border-radius: 10px;
}

.app-left {
  transition: width 0.24s ease;
  padding: 10px 0 10px 10px;
}

.app-container {
  min-height: 100vh;
  overflow: hidden;
}

.app-main {
  padding: 0 16px 16px;
}

.page-panel {
  height: 100%;
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e7edf7;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(4px);
}
</style>
