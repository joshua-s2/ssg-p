/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//jshint esversion:8

module.exports = {
    tableName: 'user',
    render: async(request, response) => {
        try {
            let data = await User.findOne({ email: request.body.email });
            if (!data) {
                return response.notFound('The user was NOT found!');
            }
            response.view('profile', { data });
        } catch (err) {
            response.serverError(err);
        }
    }
};