const port = 3000;
const Koa = require('koa2');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const readController = require('./controllers/read.controller')

 
 
router.get('/', (ctx, next) => {
    return readController.findAll().then((res) => {
        ctx.body = res;
    })
})


app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});