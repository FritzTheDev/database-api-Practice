'use strict'
module.exports = function(app) {
  const shiftlist =  require('../controllers/ShiftController');
  app.route('/shiftlist')
    .get(shiftlist.list_all_shifts)
    .post(shiftlist.create_a_shift);

  app.route('/shiftlist/shiftId')
    .get(shiftlist.read_a_shift)
    .put(shiftlist.update_a_shift)
    .delete(shiftlist.delete_a_shift);
};
