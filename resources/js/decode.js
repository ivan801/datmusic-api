// taken from https://vk.com/js/cmodules/web/audioplayer.js
var decode=function(r,t){function n(r){if(!r||r.length%4==1)return!1;for(var t,n,e=0,o=0,a="";n=r.charAt(o++);)~(n=i.indexOf(n))&&(t=e%4?64*t+n:n,e++%4)&&(a+=String.fromCharCode(255&t>>(-2*e&6)));return a}function e(r,t){var n=r.length,e=[];if(n){var i=n;for(t=Math.abs(t);i--;)e[i]=(t+=t*(i+n)/t)%n|0}return e}var i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",o={v:function(r){return r.split("").reverse().join("")},r:function(r,t){r=r.split("");for(var n,e=i+i,o=r.length;o--;)~(n=e.indexOf(r[o]))&&(r[o]=e.substr(n-t,1));return r.join("")},s:function(r,t){var n=r.length;if(n){var i=e(r,t),o=0;for(r=r.split("");++o<n;)r[o]=r.splice(i[n-1-o],1,r[o])[0];r=r.join("")}return r},x:function(r,t){var n=[];return t=t.charCodeAt(0),each(r.split(""),function(r,e){n.push(String.fromCharCode(e.charCodeAt(0)^t))}),n.join("")}};return function(r){if(r&&~r.indexOf("audio_api_unavailable")){var t=r.split("?extra=")[1].split("#"),e=""===t[1]?"":n(t[1]);if(t=n(t[0]),"string"!=typeof e||!t)return r;for(var i,a,f=(e=e?e.split(String.fromCharCode(9)):[]).length;f--;){if(a=e[f].split(String.fromCharCode(11)),i=a.splice(0,1,t)[0],!o[i])return r;t=o[i].apply(null,a)}if(t&&"http"===t.substr(0,4))return t}return r}(r)};

// decode and write to standard output
process.stdout.write(decode(process.argv[2]));