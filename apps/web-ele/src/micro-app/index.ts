import type { RegistrableApp } from 'qiankun';

import { registerMicroApps, start } from 'qiankun';

/**
 * 子应用配置
 */
export const microApps: RegistrableApp<Record<string, any>>[] = [
  {
    name: 'sub-app-7105',
    entry: '//localhost:7105',
    container: '#subapp-container',
    activeRule: '/demos/microapp/vue3',
    props: {
      // 可以传递给子应用的参数
      message: 'Hello from main app',
    },
  },
];

/**
 * 注意：
 * 1. 当添加实际子应用时，必须包含 activeRule 字段
 * 2. activeRule 可以是字符串路径或函数
 * 3. container 是子应用挂载的 DOM 容器选择器
 */

/**
 * 初始化微前端
 */
export function initMicroApps() {
  registerMicroApps(microApps, {
    // 子应用挂载前钩子
    beforeLoad: [
      () => {
        return Promise.resolve();
      },
    ],
    beforeMount: [
      () => {
        return Promise.resolve();
      },
    ],
    // 子应用挂载后钩子
    afterMount: [
      () => {
        return Promise.resolve();
      },
    ],
    // 子应用卸载前钩子
    beforeUnmount: [
      () => {
        return Promise.resolve();
      },
    ],
    // 子应用卸载后钩子
    afterUnmount: [
      () => {
        return Promise.resolve();
      },
    ],
  });
}

/**
 * 启动微前端
 */
let isQiankunStarted = false;
export function startMicroApps() {
  if (isQiankunStarted) {
    return;
  }

  isQiankunStarted = true;

  start();
}
