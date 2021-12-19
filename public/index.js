// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url = "https://gfsgu.sse.codesandbox.io/api";

//   var xhr = createCORSRequest("POST", url);
//   if (!xhr) {
//     alert("CORS not supported");
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function () {
//     // var data = JSON.parse(xhr.responseText);
//     document.getElementById("app").innerHTML = `<pre>${xhr.responseText}</pre>`;
//   };

//   xhr.onerror = function (e) {
//     document.getElementById("app").innerHTML = "ERROR";
//     // alert("Woops, there was an error making the request.");
//   };

//   xhr.send();
// }

// async function callApi() {
//   const data = await fetch("https://gfsgu.sse.codesandbox.io/api", {
//     mode: "cors"
//   });
//   const json = await data.json();
//   return json;
// }

// const data = callApi();
// document.getElementById("app").innerHTML = `<pre>${data}</pre>`;

// makeCorsRequest();

window.handler = (data) => {
  document.getElementById("app").innerHTML = `<pre>${data}</pre>`;
};
