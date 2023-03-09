const PartyTrn = require('../models/PartyTrn');

exports.getAllPartyTrn = async (req, res) => {
  try {
    const partyTrn = await PartyTrn.find();
    return res.status(200).json({
      status: 'success',
      results: partyTrn.length,
      data: {
        partyTrn,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getPartyTrn = async (req, res) => {
  try {
    const { id } = req.params;
    const partyTrn = await PartyTrn.findById(id);
    return res.status(200).json({
      status: 'success',
      data: {
        partyTrn,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.createPartyTrn = async (req, res) => {
  try {
    const {
      party_cd,
      party_name,
      bill_date,
      narr,
      debit,
      credit,
      inwoutno,
      fr_renewal,
      short_amt,
      cash_rec_also_amt,
      grand_tot,
      gross_amt,
      tax_type,
      tax_per,
      tax_amt,
      against_narr,
      cover_note_no,
      cust_name,
      policy_no,
      veh_no,
      veh_no_last_4,
      cheque_no,
      folio,
      upd_flag,
      del_flag,
      tot_qty,
      rate,
      spot_ind,
      value_date,
      group_name,
      groupx,
      remarks1,
      report_no,
      mode_type,
      username,
      agent_emp_code,
      agent_emp_name,
      auto_bill_nos,
      partytrn_id,
    } = req.body;

    const partyTrn = await PartyTrn.create({
      party_cd,
      party_name,
      bill_date,
      narr,
      debit,
      credit,
      inwoutno,
      fr_renewal,
      short_amt,
      cash_rec_also_amt,
      grand_tot,
      gross_amt,
      tax_type,
      tax_per,
      tax_amt,
      against_narr,
      cover_note_no,
      cust_name,
      policy_no,
      veh_no,
      veh_no_last_4,
      cheque_no,
      folio,
      upd_flag,
      del_flag,
      tot_qty,
      rate,
      spot_ind,
      value_date,
      group_name,
      groupx,
      remarks1,
      report_no,
      mode_type,
      username,
      agent_emp_code,
      agent_emp_name,
      auto_bill_nos,
      partytrn_id,
    });

    return res.status(201).json({
      status: 'success',
      data: {
        partyTrn,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.updatePartyTrn = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      party_cd,
      party_name,
      bill_date,
      narr,
      debit,
      credit,
      inwoutno,
      fr_renewal,
      short_amt,
      cash_rec_also_amt,
      grand_tot,
      gross_amt,
      tax_type,
      tax_per,
      tax_amt,
      against_narr,
      cover_note_no,
      cust_name,
      policy_no,
      veh_no,
      veh_no_last_4,
      cheque_no,
      folio,
      upd_flag,
      del_flag,
      tot_qty,
      rate,
      spot_ind,
      value_date,
      group_name,
      groupx,
      remarks1,
      report_no,
      mode_type,
      username,
      agent_emp_code,
      agent_emp_name,
      auto_bill_nos,
      partytrn_id,
    } = req.body;
    const partyTrn = await PartyTrn.findByIdAndUpdate(
      id,
      {
        party_cd,
        party_name,
        bill_date,
        narr,
        debit,
        credit,
        inwoutno,
        fr_renewal,
        short_amt,
        cash_rec_also_amt,
        grand_tot,
        gross_amt,
        tax_type,
        tax_per,
        tax_amt,
        against_narr,
        cover_note_no,
        cust_name,
        policy_no,
        veh_no,
        veh_no_last_4,
        cheque_no,
        folio,
        upd_flag,
        del_flag,
        tot_qty,
        rate,
        spot_ind,
        value_date,
        group_name,
        groupx,
        remarks1,
        report_no,
        mode_type,
        username,
        agent_emp_code,
        agent_emp_name,
        auto_bill_nos,
        partytrn_id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      status: 'success',
      data: {
        partyTrn,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.deletePartyTrn = async (req, res) => {
  try {
    const { id } = req.params;
    await PartyTrn.findByIdAndDelete(id);

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};
