// 載入 express, mongoose 並建構應用程式伺服器
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// 設定連線到 mongoDB
mongoose.connect('mongodb://localhost/Restaurant-List')
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start and listen on Express server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})