function bind(func,context){
    return function(){
        return func.apply(context, arguments);
    };
}
var user = {
    firstName: 'Vasya',
    sayHi: function(){
        alert(this.firstName);
    }
};
setTimeout(bind(user.sayHi, user),1000);
//setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод


function mul (a,b){
    return a*b;
};
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется;
alert(double(3) ); //= mul(2, 3) = 6


var obj = {
    p: 777,
    method: function(){
        console.log(this.p);
    }
};
obj.method();