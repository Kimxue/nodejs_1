import User from "../model/user.mjs";

class Usercontroller{
    static async index(req, res) {
        let q = req.query.q
        const re = new RegExp(q);
        let users;
        if(q) {
            users = await User.find({ $or: [{title: re}, {describe: re}]});
        } else {
            users = await User.find({})
        }
        
        res.render("usermanager", {title: "User managerment", users, q})
    }
}
export default Usercontroller   