const router = require("express").Router();
let RecordController = require("../controllers/artrecords.Controller");

router.get('/', RecordController.getRecords);

router.get('/:id', RecordController.getRecordById);

router.post('/', RecordController.createRecord);

router.put('/:id', RecordController.updateBidById);

module.exports = router;
