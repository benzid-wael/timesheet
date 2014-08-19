/**
* Task.js
*
* @description :: a task model
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      maxLength: 30,
      required: true
    },
    description: 'string',
    tags: 'array',

    timesheets: {
      model: 'timesheet'
    }
  }
};

