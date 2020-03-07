// chrome.runtime.onMessage.addListener((request, sender, respond) => {
//   const handler = new Promise((resolve, reject) => {
//     if (request) {
//       let url = window.location.href
//       var matches = url.match(/^https?\:\/\/([^\/?#]+)/);
//       var domain = matches && matches[1];  // domain will be null if no match is found
//       resolve(domain)
//     } else {
//       reject('request is empty.');
//     }
//   });

//   handler.then(message => respond(message)).catch(error => respond(error));

//   return true;
// });


