const fetch = require("node-fetch");
var data;

const timer = ms => new Promise(res => setTimeout(res, ms))

//product get ats value url
let url = "https://www.toysrus.ca/en/stores-getatsvalue?pid=B46399A6&quantitySelected=1&storeId=3508";

async function load () {
  for (var i = 0; (i < (i++ + 1)); i++) {
    fetch(url)
      .then(function(response) {
        response.text().then(function(responseString) {
          if (responseString.includes('"atsValue": 0')){
            console.log('Out Of Stock');
          }else{
            console.log('In Stock');
          }
      });
      }).catch(function() {
        console.log("error");
      });
      await timer(3000);
    }
}

load();