const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test'
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}



const Koa = require('koa')
const app = new Koa()

let user = require('./app/user.js')

const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
let router = new Router()

router.use('/user', user.routes());
//const koaBody = require('koa-body');
var cors = require('koa2-cors');
//允许跨域 

app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
});










// 注册页面
router.get('/register/:username/:password', async (ctx, next) => {
  console.log('--------------')
  console.log(ctx.params)
  var sql = 'INSERT INTO sys_user (username, password) VALUES ("' +
    ctx.params.username + '", "' + ctx.params.password + '")';
  console.log(sql)
  try {
    let data = await query(sql);

    ctx.response.body = 'true'
  } catch (e) {
    console.log(e)
    ctx.response.body = 'false'
  }

  // console.log(data)

})


// 登录页面
router.get('/login/:username/:password', async (ctx, next) => {
  console.log('--------------')
  console.log(ctx.params)
  var sql = 'SELECT * FROM sys_user WHERE username = "' +
    ctx.params.username + '" and `password`= "' +
    ctx.params.password + '"';
  console.log(sql)
  try {
    let data = await query(sql);
    console.log(data)



    // console.log(data[0]['username'])
    console.log()
    if (data.length > 0) {
      ctx.response.body = 'true'
    } else {

      ctx.response.body = 'false'
    }
  } catch (e) {
    console.log(e)
    ctx.response.body = 'false'
  }

  // 

})
