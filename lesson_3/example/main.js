// XMLHttpRequest
//
// let xhr;
//
// if (window.XMLHttpRequest) {
//   xhr = window.XMLHttpRequest();
// } else if (window.ActiveXObject) {
//   xhr = window.ActiveXObject('Microsoft.XMLHTTP')
// }
//
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//
//   }
// };
//
// xhr.open('GET', 'http:/example.com');
//
// xhr.timeout = 15000;
// xhr.ontimeout = function () {};
//
// xhr.send();


// const async = (a) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (a) {
//       const b = a + 1;
//       resolve(b);
//     } else {
//       reject('Error');
//     }
//   }, 3000);
// });
//
// async().then((res) => {
//   console.log(res);
// }).catch(err => console.log(err))


// const myObj = {
//   a: 1,
//   b: '12',
//   test: true
// };
//
// const jsonData = JSON.stringify(myObj);
// console.log(jsonData);
// console.log(JSON.parse(jsonData));


// const async = (a, cb) => {
//   setTimeout(() => {
//     const b = a + 1;
//     cb(b);
//   }, 3000)
// };
//
//
//
// async(5, (b) => {
//   console.log(b);
// });