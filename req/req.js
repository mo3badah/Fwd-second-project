let http=require('http'),
    url=require('url'),

    myhttp=http.createServer(function (request, response) {
        let querystring=url.parse(request.url,true).query;
        console.log(querystring)
    });
myhttp.listen(8888);
console.log('we listen to http://172.0.0.1:8888?id=1&name=hussien')
