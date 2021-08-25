module.exports = (db) => {
	const { TeacherModel } = require('../models')(db);

	let TeacherController = {};

	/**
	 * Get teacher by email
	 * @param {string} email
	 * @returns {Promise<any>}
	 */
	TeacherController.getByEmail = async (email) => {
		const teacher = await TeacherModel.findOne({ where: { email } });
		return teacher;
	};

	/**
	 * Get teachers by emails
	 * @param {Array} emails
	 * @returns {Promise<any>}
	 */
	TeacherController.getByEmails = async (emails) => {
		const teachers = await TeacherModel.findAll({ where: { email: emails } });
		return teachers;
	};

	return TeacherController;
}
