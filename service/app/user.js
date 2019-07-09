const Router = require('koa-router')

let router = new Router()

router.get('/', async (ctx) => {

  ctx.body = "用户操作接口"

})

router.post('/register', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
  ctx.response.body = 'ok'
})

router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
  ctx.response.body = 'ok'
})

module.exports = router
