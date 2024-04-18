const Record = require('../models/artrecords.model');

exports.createRecord = async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({});
    res.status(200).json(records);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const recordId = req.params.id;
    const record = await Record.findById(recordId);
    if (!record) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(record);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateBidById = async (req, res) => {
    try {
        // const recordId = req.params.id;
        // const bidInfo = req.params.body;
        console.log(req.body);
        
        const updateRecord = await Record.findByIdAndUpdate(req.params.id, req.body);
        if (updateRecord) {
            res.status(200).json(updateRecord);
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
