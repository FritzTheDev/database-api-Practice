const mongoose =  require('mongoose')
const Shift = mongoose.model('Shifts')

exports.list_all_shifts = function(req, res) {
  Shift.find({}, function(err, shift) {
    if (err)
      res.send(err);
    res.json(shift);
  });
};

exports.create_a_shift = function(req, res) {
  var new_shift = new Shift(req.body);
  new_shift.save(function(err, shift) {
    if (err)
      res.send(err);
    res.json(shift)
  });
};
exports.read_a_shift = function(req, res) {
  Shift.findById(req.params.shiftId, function(err, shift){
    if (err)
      res.send(err);
    res.json(shift)
  });
};
exports.update_a_shift = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.shiftId}, req.body, {new: true}, function(err, task){
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_shift = function(req, res) {
    Shift.remove({
      _id: req.params(shiftId)
    }, function(err, shift){
      if (err)
        res.send(err);
      res.json({message: 'Shift has been deleted.'});
    });
};
