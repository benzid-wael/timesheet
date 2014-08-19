/**
* Timesheet.js
*
* @description :: Managing timesheet.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    task: {
      model: 'task'
    },
    duration: 'float',
    unit: {
      type: 'string',
      enum: ['day', 'hour', 'minute']
    },

    getTimeSpentString: function() {
      return this.duration + ' ' + this.unit
    }

  }
};

