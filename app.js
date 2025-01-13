"use strict";
var statusCode;
(function (statusCode) {
    statusCode["SUCCESS"] = "s";
    statusCode["IN_PROCES"] = "p";
    statusCode["FAILED"] = "f";
})(statusCode || (statusCode = {}));
const res = {
    message: "Платеж успешеню",
    statusCode: statusCode.SUCCESS,
};
if (res.statusCode === statusCode.SUCCESS) {
}
function action(status) {
}
