var $ajaxResponse = null; 
const ConstructorAjax = function(url, method, async = true, data = []) {
    $ajaxResponse = null;
    let body = {};
    body.url = url;
    body.async = async;
    body.type = method;
    body.dataType = "json";
    if (method == 'POST' || method == 'PUT' || method == 'PATCH' || method == 'DELETE') {
        body.data = data;
    }
    body.success = function(response) {
        console.log(response);
        $ajaxResponse = response;
        return response;
    }
    body.error = function(xhr, ajaxOptions, thrownError) {
        console.log(xhr);
        console.log(ajaxOptions);
        console.log(thrownError);
    }
    console.log(body);
    return $.ajax(body);
}
