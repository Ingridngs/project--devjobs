const { Model } = require('objection')

class Job extends Model {
	static get tableName() {
		return 'Job'
	}
}

module.exports = Job