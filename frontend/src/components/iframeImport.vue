<template>
  <iframe frameborder="none"  :id="id" :src="src"></iframe>
</template>

<script>
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const MESSAGE_KEY = 'custom-message';

class Message {
  constructor(msg) {
    this.type = 'custom-message';
    this.msg = msg;
  }
}

// eslint-disable-next-line no-unused-vars
class CommandMessage extends Message {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, value) {
    super({
      name,
      value,
    });
  }
}

function detectIsCustomMessage(data) {
  return data && data.type === MESSAGE_KEY;
}

export default {
  name: 'IframeImport',
  props: {
    src: String,
    debug:Boolean
  },
  data() {
    return {
      id: uuidv4()
    }
  },
  computed: {
    origin() {
      let a = document.createElement('a')
      a.href = this.src
      return a.origin
    }
  },
  methods: {
    LOG(...args) {
      if (this.debug) {
        console.log('debug', ...args)
      }
    },
    onMessage(e) {
      // console.log(e)
      if (e.origin === this.origin) {
        let data = e.data
        let isCustom = detectIsCustomMessage(data)
        if (isCustom) {
          // eslint-disable-next-line no-undef
          let {name, value} = data.msg
          this.LOG(name, value)
          this.$emit(name, value)
        }
      }
    },
    sendMessage (obj) {
      document.getElementById(this.id)
          .contentWindow.postMessage(obj, '*',);
    }
  },
  mounted() {
    window.addEventListener('message', this.onMessage)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.onMessage)
  }
}
</script>
