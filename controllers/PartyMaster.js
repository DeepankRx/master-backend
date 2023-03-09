const PartyMaster = require('../models/PartyMaster');
const { generateUniqueId } = require('../utils/utils');
exports.getAllPartyMaster = async (req, res) => {
  try {
    const partyMaster = await PartyMaster.find();
    return res.status(200).json({
      status: 'success',
      results: partyMaster.length,
      data: {
        partyMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getPartyMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const partyMaster = await PartyMaster.findById(id);
    return res.status(200).json({
      status: 'success',
      data: {
        partyMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createPartyMaster = async (req, res) => {
  try {
    const {
      pname,
      delete_option,
      group_code,
      group_name,
      gmain_code,
      gmain_g_name,
      company_name,
      mr_mrs_ms,
      aadhar_no,
      martial_status,
      gender,
      dob,
      anni_date,
      lovelty,
      remarks,
      landline_no,
      mobile_no,
      email_id,
      website,
      ref_by,
      address,
      op_bal,
      dr_cr,
      vat_no,
      cst_no,
      tin_no,
      pan_no,
      ac_opening_date,
      depart_name,
      designation,
      entry_date_time,
      transport_details,
      others,
      dis_per,
      gst_tax_rate,
      dis_per_2,
      pay_term_days,
      sAddress,
      pcode_id,
    } = req.body;
    const partyMaster = await PartyMaster.create({
      pname,
      delete_option,
      group_code,
      group_name,
      gmain_code,
      gmain_g_name,
      company_name,
      mr_mrs_ms,
      martial_status,
      gender,
      dob,
      anni_date,
      lovelty,
      remarks,
      landline_no,
      mobile_no,
      email_id,
      website,
      ref_by,
      aadhar_no,
      address,
      op_bal,
      dr_cr,
      vat_no,
      cst_no,
      tin_no,
      pan_no,
      ac_opening_date,
      depart_name,
      designation,
      entry_date_time,
      transport_details,
      others,
      dis_per,
      gst_tax_rate,
      dis_per_2,
      pay_term_days,
      sAddress,
      pcode_id : await generateUniqueId("PartyMaster", 'pcode_id'),
    });
    return res.status(201).json({
      status: 'success',
      data: {
        partyMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updatePartyMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      pcode,
      pname,
      delete_option,
      group_code,
      group_name,
      gmain_code,
      gmain_g_name,
      company_name,
      mr_mrs_ms,
      martial_status,
      aadhar_no,
      gender,
      dob,
      anni_date,
      lovelty,
      remarks,
      landline_no,
      mobile_no,
      email_id,
      website,
      ref_by,
      address,
      op_bal,
      dr_cr,
      vat_no,
      cst_no,
      tin_no,
      pan_no,
      ac_opening_date,
      depart_name,
      designation,
      entry_date_time,
      transport_details,
      others,
      dis_per,
      gst_tax_rate,
      dis_per_2,
      pay_term_days,
      sAddress,
      pcode_id,
    } = req.body;
    const partyMaster = await PartyMaster.findByIdAndUpdate(
      id,
      {
        pcode,
        pname,
        delete_option,
        group_code,
        group_name,
        aadhar_no,
        gmain_code,
        gmain_g_name,
        company_name,
        mr_mrs_ms,
        martial_status,
        gender,
        dob,
        anni_date,
        lovelty,
        remarks,
        landline_no,
        mobile_no,
        email_id,
        website,
        ref_by,
        address,
        op_bal,
        dr_cr,
        vat_no,
        cst_no,
        tin_no,
        pan_no,
        ac_opening_date,
        depart_name,
        designation,
        entry_date_time,
        transport_details,
        others,
        dis_per,
        gst_tax_rate,
        dis_per_2,
        pay_term_days,
        sAddress,
        pcode_id,
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json({
      status: 'success',
      data: {
        partyMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deletePartyMaster = async (req, res) => {
  try {
    const { id } = req.params;
    await PartyMaster.findByIdAndDelete(id);
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
