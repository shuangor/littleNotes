var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/nodejs');//；连接数据库
var Schema = mongoose.Schema;  //  创建模型  
var userScheMa = new Schema({
    title: String,
    content: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联  
exports. db1 = mongoose.model('u2',userScheMa); //  与users集合关联 