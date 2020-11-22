/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//jshint esversion:8
module.exports = {

    render: async(request, response) => {
        ID = request.session.userId;
        try {
            let data = await User.findOne({
                id: ID,
            });
            if (!data) {
                return response.notFound('The user was NOT found!');
            }
            response.view('profile', { data });
        } catch (err) {
            response.serverError(err);
        }
    }
};