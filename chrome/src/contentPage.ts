chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    if (request) {
      let url = window.location.href
      var matches = url.match(/^https?\:\/\/([^\/?#]+)/);
      var domain = matches && matches[1];  // domain will be null if no match is found
      var owner = 'Inconnu';

      if(domain.indexOf('parisien') >= 0) {
            owner = 'Famille Arnault'
      } else if (domain.indexOf('lemonde') >= 0){
          owner = 'Xavier Niel et Matthieu Pigasse'
      }

      resolve(owner);
    } else {
      reject('request is empty.');
    }
  });

  handler.then(message => respond(message)).catch(error => respond(error));

  return true;
});
