'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.post('login', '/', (ctx) => {
    ctx.body = {
        username: 'john',
        password: '1234'
    };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3002);