module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "lib",  // libraryDirectory 默认为 lib
        "style": "css" ,
      }
    ],
  ]
}
