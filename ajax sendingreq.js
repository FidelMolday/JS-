//syntax
XMLHttpRequest.OPENED(method, url)

//sending a get request to a server
httpRequest.open("GET","http://codeliber.com/test-server.php");
httpRequest.send();

//sending a post request to a server
httpRequest.open("POST","http://codeliber.com/test-server.php");
httpRequest.send("firstName=John&lastName=Doe"); 