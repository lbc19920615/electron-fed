<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      v-model="collapsed"
      theme="light"
      class="layout-sider"
    >
      <div class="logo"><img class="pic-logo" src="~@/assets/logo.png"></div>
      <a-menu class="menu-item" theme="light" mode="inline" @click="menuHandle" :default-selected-keys="['menu_1']">
        <a-menu-item :key="index" v-for="(menuInfo, index) in menu" :title="menuInfo.title">
          <a-icon :type="menuInfo.icon" />
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <tool-bar></tool-bar>
      <a-layout-content>
        <a-layout :style="{height: '100%'}">
<!--          <a-layout-sider-->
<!--              theme="light"-->
<!--              class="sub-layout-sider"-->
<!--              v-if="!subMenu.hideSubMenu"-->
<!--          >-->
<!--            <a-menu class="sub-menu-item" theme="light" mode="inline" v-model="subMenuKey" :default-selected-keys="subMenuKey">-->
<!--              <a-menu-item :key="subIndex" v-for="(menuInfo, subIndex) in subMenu">-->
<!--                <router-link :to="{ name: menuInfo.pageName, params: menuInfo.params}">-->
<!--                  <span>{{ menuInfo.title }}</span>-->
<!--                </router-link>-->
<!--              </a-menu-item>-->
<!--            </a-menu>-->
<!--          </a-layout-sider>-->
          <a-layout-content :style="{height: '100%'}">
            <div class="app-content-container" :style="{ padding: '0', background: '#fff', height: '100%' }">
              <keep-alive>
<!--                <div v-if="$route.meta.keepAlive"> keepAlive: true</div>-->
                <router-view v-if="$route.meta.keepAlive"></router-view>
              </keep-alive>
              <router-view v-if="!$route.meta.keepAlive"></router-view>
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
          'subMenu_1' : {
            title: '通信',
            pageName: 'Ipc',
            params: {},
          },
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
          poup: true
        },
      },
      contentPage: ''
    };
  },
  mounted () {
    this.menuHandle({key: 'menu_1'})
  },
  methods: {
    menuHandle (item) {
      this.subMenu = this.subMenuList[item.key]
      if (!this.subMenu.poup) {
        this.hideBrowserView()
        this.subMenuKey = ['subMenu_1']
        const linkInfo = this.subMenu['subMenu_1']
        this.$router.push({ name: linkInfo.pageName, params: linkInfo.params})
      } else {
        this.showBrowserView()
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 嵌套
#components-layout-demo-responsive {
  height: 100%;
  .logo {
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
</style>
