const express = require('express')
const app = express()

// 解决跨域问题，导入cors中间件
const cors = require('cors');
app.use(cors());

// 配置解析  application/x-www-form-urlencoded 格式的表单数据的中间件 
app.use(express.urlencoded({ extended: false }));
// 配置解析  json 格式的表单数据的中间件 
app.use(express.json())

const userRouter = require('./router');
app.use('/api', userRouter);

app.listen(80, () => {
  console.log('接口启动')
})
