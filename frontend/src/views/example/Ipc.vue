<template>
  <div>
    <div>
      <button @click="openFile">openFile</button>
      <button @click="saveFile">saveFile</button>
<!--      <h3 :style="{ marginBottom: '16px' }">-->
<!--        demo3 渲染进程与主进程IPC通信-->
<!--      </h3>-->
<!--      <a-list bordered>-->
<!--        &lt;!&ndash; <a-button @click="helloHandle">打招呼</a-button> &ndash;&gt;-->
<!--        <a-input-search v-model="content" @search="helloHandle">-->
<!--          <a-button slot="enterButton">-->
<!--            send-->
<!--          </a-button>-->
<!--        </a-input-search>-->
<!--      </a-list>-->
<!--    </div>-->
<!--    <div style="margin-top: 20px;">-->
<!--      <h3 :style="{ marginBottom: '16px' }">-->
<!--        demo4 主进程API执行网页函数-->
<!--      </h3>-->
<!--      <a-list bordered>-->
<!--        <a-input-search v-model="content2" @search="executeJSHandle">-->
<!--          <a-button slot="enterButton">-->
<!--            send-->
<!--          </a-button>-->
<!--        </a-input-search>-->
<!--      </a-list>-->
    </div>
  </div>
</template>
<script>
import { executeJS } from '@/api/main';

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
<style></style>
