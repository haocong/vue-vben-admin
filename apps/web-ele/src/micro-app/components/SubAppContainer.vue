<script lang="ts" setup>
import type { LoadableApp, MicroApp } from 'qiankun';

import { onMounted, onUnmounted, ref } from 'vue';

import { loadMicroApp } from 'qiankun';

defineOptions({
  name: 'SubAppContainer',
});

const containerRef = ref<HTMLElement | null>(null);

// 子应用实例引用
let microAppInstance: MicroApp | null = null;

// 子应用配置
const microAppConfig: LoadableApp<Record<string, any>> = {
  name: 'sub-app-7105',
  entry: '//localhost:7105',
  container: '#subapp-container',
  props: {
    message: 'Hello from main app',
  },
};

onMounted(() => {
  // 确保容器元素存在
  const subappContainer = document.querySelector('#subapp-container');

  if (subappContainer) {
    microAppInstance = loadMicroApp(microAppConfig, {
      sandbox: {
        strictStyleIsolation: true,
      },
    });
  }
});

onUnmounted(() => {
  // 手动卸载子应用
  if (microAppInstance) {
    microAppInstance.unmount();
    microAppInstance = null;
  }
});
</script>

<template>
  <div class="subapp-container-wrapper" ref="containerRef">
    <div id="subapp-container" class="subapp-container"></div>
  </div>
</template>

<style scoped>
.subapp-container-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.subapp-container {
  position: relative;
  z-index: 101;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
}
</style>
