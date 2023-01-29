// Works with urls 
const url = require('url'); 

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active'); 

//Serialized URL - get the straight up url 
console.log(myUrl.href); 
console.log(myUrl.toString());

//Host (root domain)

console.log(myUrl.host); 

//Hostname (does not get port - but i didnt see that, maybe update related)
console.log(myUrl.hostname); 

//Pathname 
console.log(myUrl.pathname);

//Serialized Querry 
console.log(myUrl.search); 