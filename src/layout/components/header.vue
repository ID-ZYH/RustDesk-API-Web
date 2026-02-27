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
    padding: 0;
    border-radius: 0;
    background: #ffffff;
  }

  .ex-icon {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #334155;
    transition: all 0.2s ease;

    &:hover {
      background: #e9f0ff;
      color: #1f58d6;
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
      font-size: 16px;
      font-weight: 600;
    }

    .logo {
      display: block;
      width: 28px;
      height: 28px;
      border-radius: 6px;
    }
  }


:global(html.dark) .header-wrap {
  background: #111f36;
}

:global(html.dark) .header-logo {
  color: #d9e6ff;
}

:global(html.dark) .ex-icon {
  color: #d9e6ff;
}

:global(html.dark) .ex-icon:hover {
  background: #1a2f53;
  color: #8cb0ff;
}

</style>
