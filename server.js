const port = 3000;
const mysql = require('mysql');
const Koa = require('koa2');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
 

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'library'
});
 
router.get('/', (ctx, next) => {
    // ctx.router available
    // return User.findOne(ctx.params.id).then(function(user) {
    //     ctx.user = user;
    //     next();
    //   });
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM author;', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ');
            resolve(results[0]);
          });
    }).then( (res) => {
        ctx.body = res;
        // next();
    })
})


app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});