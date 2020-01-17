var resultModel = {
    status: "",
    result: "",
    msg: ""
}
var clientresult = function(status, res, msg) {
    var result = resultModel;
    result.status = status;
    result.result = res;
    result.msg = msg;
    return result;
}
var success = function(result, msg = "") {
    return clientresult("success", result, msg);
}
var error = function(errormsg) {
    return clientresult("fail", "", errormsg);
}
module.exports = {
    success,
    error
}