const mongoose =require('mongoose');

const bookSchema = mongoose.Schema({
    
        title: {
          type: String,
          

        },
        author: {
          type: String,
          
        },
        summary: {
          type: String,
          
        },
      

})

var bookdata=mongoose.model('bookdata',bookSchema);
module.exports= bookdata;