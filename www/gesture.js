var exec = require('cordova/exec');  
var myFunc = function(){};  
  
  
// arg1：成功回调  
// arg2：失败回调  
// arg3：将要调用类配置的标识  
// arg4：调用的原生方法名  
// arg5：参数，json格式  
 
myFunc.prototype.register=function() {  
    exec(null, null, "Gesture", "register", []);  
};  
myFunc.prototype.verification=function() {  
    exec(null, null, "Gesture", "verification", []);  
};
myFunc.prototype.restart=function() {  
    exec(null, null, "Gesture", "restart", []);  
};
var showt = new myFunc();  
module.exports = showt;