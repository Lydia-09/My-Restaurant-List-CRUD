// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port = 3000

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start and listen on Express server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})