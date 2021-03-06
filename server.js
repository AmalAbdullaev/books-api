const PORT = 3000;
const Koa = require('koa2');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const readController = require('./controllers/read.controller');
const updateController = require('./controllers/update.controller');
const createController = require('./controllers/create.controller');
const deleteController = require('./controllers/delete.controller');
const koaBody = require('koa-body');
const fs = require('fs');

let api = fs.readFileSync('api.json');
app.use(koaBody());

router.get('/', (ctx, next) => {
    ctx.body = JSON.parse(api);
})

router.get('/author/:id', (ctx, cache) => {
    return readController.findOneAuthor(ctx.params.id).then((res) => {
        ctx.body = res;
    })
})

router.get('/books/:id', (ctx, next) => {
    return readController.findOneBook(ctx.params.id).then((res) => {
        ctx.body = res;
    })
})

router.get('/author', (ctx, next) => {
    return readController.findAllAuthors(ctx.query).then((res) => {
        ctx.body = res;
    })
})

router.get('/books', (ctx, next) => {
    return readController.findAllBooks(ctx.query).then((res) => {
        ctx.body = res;
    })
})

router.delete('/books/:id', (ctx, next) => {
    return deleteController.deleteBook(ctx.params.id).then((res) => {
        ctx.body = res;
    })
})

router.delete('/books/:books_id/unjoin/author', (ctx, next) => {
    return deleteController.unJoinBookFromAuthor(ctx.params.books_id).then((res) => {
        ctx.body = res;
    })
})

router.delete('/author/:author_id/unjoin/book', (ctx, next) => {
    return deleteController.unJoinAuthorFromBook(ctx.params.author_id).then((res) => {
        ctx.body = res;
    })
})

router.delete('/author/:id', (ctx, next) => {
    return deleteController.deleteAuthor(ctx.params.id).then((res) => {
        ctx.body = res;
    })
})

router.post('/books/:books_idbooks/join/author/:author_idauthor', (ctx, next) => {
    return createController.joinBookToAuthor(ctx.params).then((res) => {
        ctx.body = res;
    })
}) 

router.post('/books', (ctx, next) => {
    return createController.createBook(ctx.request.body).then((res) => {
        ctx.body = 200;
    })
})

router.post('/author', (ctx, next) => {
    return createController.createAuthor(ctx.request.body).then((res) => {
        ctx.body = 200;
    })
})

router.put('/author', (ctx, next) => {
    return updateController.updateAuthor(ctx.request.body).then((res) => {
        ctx.body = 200;
    })
})

router.put('/books', (ctx, next) => {
    return updateController.updateBook(ctx.request.body).then((res) => {
        ctx.body = 200;
    })
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`)
});