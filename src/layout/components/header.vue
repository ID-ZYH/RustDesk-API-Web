<template>
  <div class="header-wrap">
    <el-icon class="ex-icon" @click="expandOrFoldSlider">
      <el-icon-expand v-if="setting.sideIsCollapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </el-icon>
    <div class="header-logo">
      <img :src="setting.logo" alt="" class="logo">
      <div class="title">{{setting.title}}</div>
    </div>
    <Setting></Setting>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import Setting from '@/layout/components/setting/index.vue'
  import { useAppStore } from '@/store/app'

  export default defineComponent({
    name: 'LayerHeader',
    created () {
    },
    components: { Setting },
    watch: {},
    setup (props) {
      const appStore = useAppStore()
      const setting = computed(() => appStore.setting)
      const expandOrFoldSlider = () => {
        appStore.sideCollapse()
      }
      return {
        setting,
        expandOrFoldSlider,
      }
    },

  })
</script>

<style scoped lang="scss">
  .header-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.85);
  }

  .ex-icon {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #334155;
    transition: all 0.2s ease;

    &:hover {
      background: #edf2ff;
      color: #1d4ed8;
    }
  }

  .header-logo {
    display: flex;
    height: 100%;
    align-items: center;
    color: #0f172a;

    .title {
      display: block;
      margin-left: 10px;
      font-size: 15px;
      font-weight: 600;
    }

    .logo {
      display: block;
      width: 28px;
      height: 28px;
      border-radius: 8px;
    }
  }


</style>
