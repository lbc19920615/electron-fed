/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: { template: '<div><router-view /></div>' },
    children: [
      {
        path: 'fileOpenDir',
        name: 'FileOpenDir',
        component: () => import('@/views/example/OpenDir')
      },
      {
        path: 'uploadFile',
        name: 'UploadFile',
        component: () => import('@/views/example/UploadFile')
      },
      {
        path: 'ipc',
        name: 'Ipc',
        component: () => import('@/views/example/Ipc')
      },
      {
        path: 'systemInfo',
        name: 'SystemInfo',
        component: () => import('@/views/example/SystemInfo')
      },
      {
        path: 'md5-wasm',
        name: 'Md5Wasm',
        component: () => import('@/views/example/Md5Wasm')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/Setting')
      },
    ]
  }
]
