/**
* Timesheet.js
*
* @description :: Managing timesheet.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    task: {
      model: 'task',
      required: true
    },
    duration: 'float',
    unit: {
      type: 'string',
      enum: ['day', 'hour', 'minute']
    },
    date: 'datetime',

    getTimeSpentString: function() {
      return this.duration + ' ' + this.unit
    }

  }
};

