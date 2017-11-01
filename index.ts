const redbird = require('redbird')

let proxy = redbird({
    port:9080,
    letsencrypt: {
        path: __dirname + '/',
        port:9999
    },
    ssl: {
        port:9045,
        http2: false,
    }
})


proxy.register('dev.dot.cc', 'http://localhost:6000')