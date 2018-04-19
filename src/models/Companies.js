const { Model } = require('objection')

class Company extends Model {
	static get tableName() {
		return 'Company'
	}
	static get relationMappings() {
		const Jobs = require('./Job')

		return {
			jobs: {
				relation: Model.HasManyRelation,
				modelClass: Job,
				join: {
					from: 'Company.id',
					to: 'jobs.companyId'

				}
			}
		}
	}
}