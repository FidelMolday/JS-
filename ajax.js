//sending a simple request to php page
<p style="color:green">Hello! I have come from the server.</p>

const httpRequest = new XMLHttpRequestRequest();

function makeRequest(){
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open('GET',"http://codeliber.com/test.php");
    httpRequest.send();
}

function writeContent(){
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            document.getElementById("demo").innerHTML =
            httpRequest.responseText;
        }else{
            alert('There was an error.')
        }
        }
    }
    
    //The xmlhttprequest object
    const variablesName = new XMLHttpRequest();
    //example
    const httpRequests = new XMLHttpRequest();