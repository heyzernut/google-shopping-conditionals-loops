var data = require('../products.json')
var items = data.items;

for( var counter = 0; counter < items.length; counter++) {
  var item = items[counter]; //create variable to store array inside of data
  var title = item.product.title
  var images = item.product.images
  
  if(images.length > 1) {
    console.log(title)
  }
}
