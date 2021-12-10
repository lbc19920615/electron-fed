<template>
<!--  <div>-->
<!--    <div>-->
<!--      <button @click="openFile">openFile</button>-->
<!--      <button @click="saveFile">saveFile</button>-->
<!--&lt;!&ndash;      <h3 :style="{ marginBottom: '16px' }">&ndash;&gt;-->
<!--&lt;!&ndash;        demo3 渲染进程与主进程IPC通信&ndash;&gt;-->
<!--&lt;!&ndash;      </h3>&ndash;&gt;-->
<!--&lt;!&ndash;      <a-list bordered>&ndash;&gt;-->
<!--&lt;!&ndash;        &lt;!&ndash; <a-button @click="helloHandle">打招呼</a-button> &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <a-input-search v-model="content" @search="helloHandle">&ndash;&gt;-->
<!--&lt;!&ndash;          <a-button slot="enterButton">&ndash;&gt;-->
<!--&lt;!&ndash;            send&ndash;&gt;-->
<!--&lt;!&ndash;          </a-button>&ndash;&gt;-->
<!--&lt;!&ndash;        </a-input-search>&ndash;&gt;-->
<!--&lt;!&ndash;      </a-list>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div style="margin-top: 20px;">&ndash;&gt;-->
<!--&lt;!&ndash;      <h3 :style="{ marginBottom: '16px' }">&ndash;&gt;-->
<!--&lt;!&ndash;        demo4 主进程API执行网页函数&ndash;&gt;-->
<!--&lt;!&ndash;      </h3>&ndash;&gt;-->
<!--&lt;!&ndash;      <a-list bordered>&ndash;&gt;-->
<!--&lt;!&ndash;        <a-input-search v-model="content2" @search="executeJSHandle">&ndash;&gt;-->
<!--&lt;!&ndash;          <a-button slot="enterButton">&ndash;&gt;-->
<!--&lt;!&ndash;            send&ndash;&gt;-->
<!--&lt;!&ndash;          </a-button>&ndash;&gt;-->
<!--&lt;!&ndash;        </a-input-search>&ndash;&gt;-->
<!--&lt;!&ndash;      </a-list>&ndash;&gt;-->


<!--      <iframe-import  src="http://192.168.1.67:3000/form2?storeName=name-page-store3"></iframe-import>-->
<!--&lt;!&ndash;      <webview-import&ndash;&gt;-->
<!--&lt;!&ndash;          src="http://192.168.1.67:3000/form2?storeName=name-page-store3"&ndash;&gt;-->
<!--&lt;!&ndash;      ></webview-import>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
  <div style="height: 100%">
    <iframe-import  src="http://192.168.1.67:3000/form2?storeName=name-page-store3"></iframe-import>
  </div>
</template>
<script>
import { executeJS } from '@/api/main';
import IframeImport from "../../components/iframeImport";

function electronOpen() {
  return new Promise(resolve => {
    const fs = global.require('fs');
    const remote = global.require('electron').remote;
    remote.dialog.showOpenDialog({
      properties: [ 'openFile' ],
    })
        .then(result => {
          // console.log(result.canceled);
          // console.log(result.filePaths);
          if (!result.canceled) {
            if (result.filePaths && result.filePaths[0]) {
              let buffer = fs.readFileSync(result.filePaths[0]);
              // console.log(buffer)
              resolve(new Blob([buffer]))
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
  });
}

export default {
  components: {IframeImport},
  data() {
    return {
      content: 'hello',
      content2: 'hello world',
      reply: ''
    }
  },
  mounted() {

  },

  methods: {
    openFile() {
      electronOpen().then(async (blob) => {
        let text = await blob.text();
        console.log(text)
      })
    },
    saveFile() {
      let fs = global.require2('fs');
      console.log(fs)
      global.electronRemote.dialog.showSaveDialog({
        title: '保存文件',
        defaultPath: 'sdsds.json',
        // properties: ['openFile', 'openDirectory']
      })
          .then(result => {
            console.dir(result)
            if (!result.canceled) {
              fs.writeFileSync(result.filePath, '{}')
            }
          })
          .catch(err => {
            console.error(err)
          })

    },
    helloHandle(value) {
      const self = this;
      this.$callMain('example.hello', value).then(r => {
        self.$message.info(r);
      })
    },
    executeJSHandle(value) {
        executeJS({str: value}).then(res => {
          if (res.code == 0) {
            console.log(res.data);
          }
        }).catch(err => {
          console.log('err:', err)
        })
    }
  }
}
</script>
<style>
iframe {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
