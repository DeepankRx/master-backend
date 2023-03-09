const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemGroupMasterSchema = new Schema({
    cat_code: {
        type: Number,
    },
    cat_name: {
        type: String,
    },
    cat_type: {
        type: String,
    },
    cat_main_code: {
        type: Number,
    },
    cat_main: {
        type: String,
    },
    supermain_code: {
        type: Number,
    },
    delete_option: {
        type: String,
    },
    other:[
        String
    ],
    other_num:[
        Number
    ],
    gst_tax_slab:{
        type: Number,
    }
},{
    timestamps: true,
});

const ItemGroupMaster = mongoose.model('ItemGroupMaster', ItemGroupMasterSchema);
module.exports = ItemGroupMaster;
