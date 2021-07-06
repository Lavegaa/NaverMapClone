require('moment-timezone')

var moment = require('moment')

moment.tz.setDefault('Asia/Seoul')

exports.moment = moment
