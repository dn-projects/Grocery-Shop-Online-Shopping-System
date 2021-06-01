var mongoose = require('mongoose');

// module.exports = mongoose.model('Stock',
//     {
//         text:
//         {
//             type: String,
//             default: ''
//         }
//     }
// );


const stockModel = mongoose.Schema({
  stockName: {
      type: String,
      default: 'EMPTY STOCK NAME'
  },
  stockPrice: {
      type: String,
      default: 'EMPTY STOCK PRICE'
  },
  stockPicture: {
      type: String,
      default: 'EMPTY STOCK PICTURE'
  },
  stockDescription: {
      type: String,
      default: 'EMPTY STOCK DESCRIPTION'
  }
});


module.exports = mongoose.model('Stock', stockModel);
