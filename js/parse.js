
fetch('https://raw.githubusercontent.com/AgroFermer/SiteGame/master/js/portfolio.json').then(function(response) {
    if(response.ok) {
      response.json().then(function(json) {
        let products = json;
        console.log(products);
      });
    } else {
      console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
    }
  });