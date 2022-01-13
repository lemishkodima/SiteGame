
fetch('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json').then(function(response) {
    if(response.ok) {
      response.json().then(function(json) {
        let products = json;
        console.log(products);

      });
    } else {
      console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
    }
  });