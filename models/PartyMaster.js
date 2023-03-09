const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartyMasterSchema = new Schema({
    pcode: {
        type: Number,
    },
    pname: {
        type: String,
    },
    delete_option: {
        type: String,
    },
    group_code: {
        type: Number,
    },
    group_name: {
        type: String,
    },
    gmain_code: {
        type: Number,
    },
    gmain_g_name: {
        type: String,
    },
    company_name: {
        type: String,
    },
    mr_mrs_ms: {
        type: String,
    },
    martial_status: {
        type: String,
    },
    gender: {
        type: String,
    },
    dob: {
        type: String,
    },
    anni_date: {
        type: String,
    },
    lovelty: {
        type: String,
    },
    remarks: {
        type: String,
    },
    landline_no: {
        type: String,
    },
    mobile_no: {
        type: String,
    },
    email_id: {
        type: String,
    },
    website: {
        type: String,
    },
    ref_by: {
        type: String,
    },
    address:{
        type:Object,
    },
    op_bal: {
        type: Number,
    },
    dr_cr: {
        type: String,
    },
    vat_no: {
        type:String,
    },
    cst_no: {
        type:String,
    },
    tin_no: {
        type:String,
    },
    pan_no: {
        type:String,
    },
    ac_opening_date: {
        type:String,
    },
    depart_name: {
        type:String,
    },
    designation: {
        type:String,
    },
    entry_date_time: {
        type:Date,
    },
    transport_details: {
        type:String,
    },
    others:[
        String
    ],
    dis_per: {
        type:Number,
    },
    gst_tax_rate: {
        type:Number,
    },
    dis_per_2 : {
        type:Number,
    },
    pay_term_days   : {
        type:Number,
    },
    sAddress: [
        String
    ],
    pcode_id: {
        type:Number,
        required:true,
        unique:true
    },
    aadhar_no: {
        type:String,
    },

}
,{
    timestamps: true,
});

const PartyMaster = mongoose.model('PartyMaster', PartyMasterSchema);
module.exports = PartyMaster;