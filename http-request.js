var http=require('http')

http.createServer(
    function(request,response){
        response.writeHead(200,{'content-type':'text/html'})
        response.end('<b>Hello World</b>')   
    }
).listen(8000)