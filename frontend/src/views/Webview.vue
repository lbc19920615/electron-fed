<template>
  <div class="page-webview" style="height: 100%;">
    <div class="etabs-tabgroup">
      <div class="etabs-tabs"></div>
      <div class="etabs-buttons"></div>
    </div>
    <div class="etabs-views"></div>
  </div>
</template>

<script>
import { TabGroup } from "../lib/tabs";

export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log('mounted')
    let tabGroup = new TabGroup({
      newTab: {
        title: "New Tab",
      },
    });

    tabGroup.addTab({
      title: "Google",
      src: "http://google.com",
    });

    tabGroup.addTab({
      title: "Electron",
      src: "http://electron.atom.io",
      visible: true,
      active: true,
    });
  }
}
</script>

<style lang="less">
@tabs_group_height: 32px;
@tabs_content_height: calc(100% - @tabs_group_height);

.etabs-tabgroup {
  width: 100%;
  height: @tabs_group_height;
  background-color: #ccc;
  cursor: default;
  font: caption;
  font-size: 14px;
  -webkit-user-select: none;
  user-select: none;
  display: none;
}

.etabs-tabgroup.visible {
  display: block;
}

.etabs-tabs {
  float: left;
  height: 100%;
}

.etabs-tab {
  display: none;
  position: relative;
  color: #333;
  height: 100%;
  padding: 6px 8px 4px;
  border: 1px solid #aaa;
  border-bottom: none;
  border-left: none;
  background: linear-gradient(to bottom, rgba(234,234,234,1) 0%,rgba(204,204,204,1) 100%);
  font: caption;
  font-size: 14px;
  background-color: #ccc;
  cursor: default;
}

/* Dragula */
.etabs-tab.gu-mirror {
  padding-bottom: 0;
}

.etabs-tab:first-child {
  border-left: none;
}

.etabs-tab.visible {
  display: inline-block;
  float: left;
}

.etabs-tab.active {
  background: #fff;
}

.etabs-tab.flash {
  background: linear-gradient(to bottom, rgba(255,243,170,1) 0%,rgba(255,227,37,1) 100%);
}

.etabs-buttons {
  float: left;
}

.etabs-buttons button {
  float: left;
  color: #333;
  background: none;
  border: none;
  font-size: 12px;
  margin-top: 6px;
  border-radius: 2px;
  margin-left: 4px;
  width: 20px;
  text-align: center;
  padding: 4px 0;
}

.etabs-buttons button:hover {
  color: #eee;
  background-color: #aaa;
}

.etabs-tab-badge {
  position: absolute;
  right: 0;
  top: -7px;
  background: red;
  border-radius: 100%;
  text-align: center;
  font-size: 10px;
  padding: 0 5px;
}

.etabs-tab-badge.hidden {
  display: none;
}

.etabs-tab-icon {
  display: inline-block;
  height: 16px;
}

.etabs-tab-icon img {
  max-width: 16px;
  max-height: 16px;
}

.etabs-tab-title {
  display: inline-block;
  margin-left: 10px;
}

.etabs-tab-buttons {
  display: inline-block;
  margin-left: 10px;
}

.etabs-tab-buttons button {
  display: inline-block;
  color: #333;
  background: none;
  border: none;
  width: 20px;
  text-align: center;
  border-radius: 2px;
}

.etabs-tab-buttons button:hover {
  color: #eee;
  background-color: #aaa;
}

.etabs-views {
  position: relative;
  border-top: 1px solid #aaa;
  height: @tabs_content_height;
}

.etab-view {
  position: relative;
}

.etabs-views webview {
  left: 0;
  top: 0;
}

</style>