<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      v-model="collapsed"
      theme="light"
      class="layout-sider"
    >
      <div class="ui-column-between" style="height: 100%;">
        <div>
          <div class="logo"><img class="pic-logo" src="~@/assets/logo.png"></div>
          <div @mousedown.stop="noopHandle">
            <a-menu
                ref="menu"
                class="menu-item" theme="light" mode="inline" @click="menuHandle"
                :default-selected-keys="['menu_1']">
              <a-menu-item
                  :key="index"
                  v-for="(menuInfo, index) in menu" :title="menuInfo.title">
                <a-icon :type="menuInfo.icon" />
              </a-menu-item>
            </a-menu>
          </div>
        </div>
        <div class="menu-bottom" @mousedown.stop="popupHandle"  style="height: 60px">
          <svg t="1639126522445" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="16" height="16"><path d="M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z" p-id="2327"></path><path d="M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z" p-id="2328"></path><path d="M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z" p-id="2329"></path></svg>
        </div>
      </div>
    </a-layout-sider>
    <a-layout>
<!--      <tool-bar></tool-bar>-->
      <a-layout-content>
        <a-layout :style="{height: '100%'}">
          <a-layout-content :style="{height: '100%'}">
            <div class="app-content-container" :style="{ padding: '0', background: '#fff', height: '100%' }">
            </div>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ToolBar from "../components/ToolBar";
import {BrowserViewMixin} from "../mixins/browserView";
export default {
  name: 'Layout',
  // eslint-disable-next-line vue/no-unused-components
  components: {ToolBar},
  mixins: [
    BrowserViewMixin('browserViewShowed')
  ],
  data() {
    return {
      collapsed: true,
      menu: {
        'menu_1' : {
          icon: 'home',
          title: ''
        },
        // 'menu_2' : {
        //   icon: 'setting',
        //   title: ''
        // },
        'menu_3' : {
          icon: 'appstore',
          title: ''
        },
      },
      menuKey: 'menu_1',
      subMenuKey: ['subMenu_1'],
      subMenu: {},
      subMenuList: {
        'menu_1' : {
          viewKey: 'ChatBrowserView',
          // 'subMenu_1' : {
          //   title: '上传文件到sm图床',
          //   pageName: 'UploadFile',
          //   params: {}
          // },
        //   'subMenu_2' : {
        //     title: '打开文件夹',
        //     pageName: 'FileOpenDir',
        //     params: {},
        //   },
        //   'subMenu_1' : {
        //     title: '通信',
        //     pageName: 'Ipc',
        //     params: {},
        //   },
        //   'subMenu_4' : {
        //     title: '获取系统信息',
        //     pageName: 'SystemInfo',
        //     params: {},
        //   },
        //   'subMenu_5' : {
        //     title: '加载wasm',
        //     pageName: 'Md5Wasm',
        //     params: {},
        //   }
        },
        'menu_2' : {
          'subMenu_1' : {
            title: '基础设置',
            pageName: 'Setting',
            params: {},
          }
        },
        'menu_3' : {
          viewKey: 'TabbedBrowserView'
        },
        'menu_4' : {
          popup: true,
          viewKey: 'MoreBrowserView'
        }
      },
      contentPage: ''
    };
  },
  mounted () {
    this.menuHandle({key: 'menu_1'})
  },
  methods: {
    noopHandle: function () {
    },
    popupHandle () {
      this.setTopBrowserView('MoreBrowserView').then(() => {
        this.$callMain('browerView.currentPopup', 'MoreBrowserView')
      })
    },
    menuHandle (item) {
      this.subMenu = this.subMenuList[item.key]
      this.setTopBrowserView(this.subMenu.viewKey).then(() => {
      })
      // if (!this.subMenu.poup) {
      //   // this.hideBrowserView()
      //   this.subMenuKey = ['subMenu_1']
      //   const linkInfo = this.subMenu['subMenu_1']
      //   this.$router.push({ name: linkInfo.pageName, params: linkInfo.params})
      // } else {
      //   this.setTopBrowserView()
      // }
    },
  },
};
</script>

<style lang="less" scoped>
// 嵌套
#components-layout-demo-responsive {
  -webkit-user-select: none;
  height: 100%;
  .logo {
    text-align: center;

    border-bottom: 1px solid #e8e8e8;
  }
  .pic-logo {
    height: 32px;
    //background: rgba(139, 137, 137, 0.2);
    margin: 10px;
  }
  .layout-sider {
    border-right: 1px solid #e8e8e8;
  }
  .menu-item {
    .ant-menu-item {
      background-color: #fff;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  .sub-layout-sider {
    background-color: #FAFAFA;
  }
  .sub-menu-item {
    .ant-menu-item {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .ant-menu-item::after {
      border-right: 3px solid #F2F2F2;
    }
    .ant-menu-item-selected {
      background-color:#F2F2F2;
      span {
        color: #111;
      }
    }
  }
  .sub-menu-item.ant-menu {
    background: #FAFAFA;
  }
  .sub-menu-item.ant-menu-inline {
    border-right: 0px solid #FAFAFA;
  }
}

.app-content-container {
  > div {
    height: 100%;
  }
}

.menu-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
