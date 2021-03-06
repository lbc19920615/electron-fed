/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/Dashboard')
    // children: [
    //   {
    //     path: 'fileOpenDir',
    //     name: 'FileOpenDir',
    //     component: () => import('@/views/example/OpenDir')
    //   },
    //   {
    //     path: 'uploadFile',
    //     name: 'UploadFile',
    //     component: () => import('@/views/example/UploadFile')
    //   },
    //   {
    //     path: 'systemInfo',
    //     name: 'SystemInfo',
    //     meta: {
    //       keepAlive: true
    //     },
    //     component: () => import('@/views/example/SystemInfo')
    //   },
    //   {
    //     path: 'md5-wasm',
    //     name: 'Md5Wasm',
    //     component: () => import('@/views/example/Md5Wasm')
    //   },
    //   {
    //     path: 'setting',
    //     name: 'Setting',
    //     component: () => import('@/views/Setting')
    //   },
    // ]
  },
  {
    path: '/ipc',
    name: 'Ipc',
    meta: {
      keepAlive: true,
      noFrame: true,
    },
    component: () => import('@/views/example/Ipc')
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      keepAlive: true,
      noFrame: true,
    },
    component: () => import('@/views/example/Test')
  },
]
