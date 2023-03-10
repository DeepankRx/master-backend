const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PartyTrnSchema = new Schema({
    party_cd    : { type: Number },
    party_name  : { type: String },
    bill_date   : { type: Date },
    narr       : { type: String },
    debit       : { type: Number },
    credit      : { type: Number },
    inwoutno    : { type: String },
    fr_renewal : { type: String },
    short_amt   : { type: Number },
    cash_rec_also_amt : { type: Number },
    grand_tot  : { type: Number },
    gross_amt : { type: Number },
    tax_type   : { type: String },
    tax_per   : { type: Number },
    tax_amt   : { type: Number },
    against_narr : { type: String },
    cover_note_no : { type: String },
    cust_name : { type: String },
    policy_no : { type: String },
    veh_no : { type: String },
    veh_no_last_4 : { type: String },
    cheque_no : { type: String },
    folio : { type: String },
    upd_flag : { type: String },
    del_flag    : { type: String },
    tot_qty     : { type: Number },
    rate        : { type: Number },
    spot_ind   : { type: String },
    value_date  : { type: Date },
    group_name  : { type: String },
    groupx     : { type: String },
    remarks1    : { type: String },
    report_no   : { type: String },
    mode_type   : { type: String },
    username    : { type: String },
    agent_emp_code : { type: Number },
    agent_emp_name : { type: String },
    auto_bill_nos : { type: String },
    partytrn_id : { type: String ,
        required: true,
        unique: true,
    },
},{
    timestamps: true,
});

const PartyTrn = mongoose.model('PartyTrn', PartyTrnSchema);