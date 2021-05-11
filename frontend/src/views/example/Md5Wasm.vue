<template>        
  <div>
  <header>
      <input type="file" @change="onChange">
  </header>
  <div>HASH: {{md5Str}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reader: null,
      md5Str: ''
    }
  },
  mounted() {
    this.reader = new FileReader();
    this.reader.addEventListener('load', this.onLoadReadFile);
  },
  methods: {
    onChange(e) {
      if (e.target && e.target.files && e.target.files[0]) {
        let file = e.target.files[0]
        // console.log('onChange', file)
        this.reader.readAsArrayBuffer(file)
      }
    },
    onLoadReadFile(e) {
      // console.log('onLoadReadFile', e.target.result)
          global.md5WASM(e.target.result)                                         // Our function
          .then( hash => 
          this.md5Str = hash
          )
          .catch( err => console.log(err) )
    }
  }
}
</script>