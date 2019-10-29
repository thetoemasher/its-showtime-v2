const Op = require('sequelize').Op

module.exports = {
    getComingSoon: async (req, res) => {
        try{
        const {Coming_Soon} = req.app.get('models')
        console.log('user', req.session.user)
        let comingSoon = await Coming_Soon.findAll({where: {user_id: req.session.user.user_id}})
        res.status(200).send(comingSoon)
        } catch(error) {
            console.log(error)
        }

    },
    addComingSoon: async (req, res) => {
        try {
            const {Coming_Soon} = req.app.get('models')
        } catch(error) {

        }
    }
    // login: async (req, res) => {
    //     const {Users} = req.app.get('models')
    //     const {login, password} = req.body
    //     const userCheck = await Users.findOne({where: { [Op.or]: [{email: login}, {username: login}] }})
        
    //     if(!userCheck) {
    //         return res.status(401).send({error: 'No user found with that email or username'})
    //     }
    //     const user = userCheck.get({plain: true})
    //     const check = bcrypt.compareSync(password, user.password)

    //     if(!check) {
    //         return res.status(401).send({error: 'Incorrect email or password'})
    //     }

    //     delete user.password
    //     req.session.user = user
    //     res.status(200).send(user)
    // },
    // register: async (req, res) => {
    //     const {Users} = req.app.get('models')
    //     const {email, password, username} = req.body
    //     const emailCheck = await Users.findOne({where: { email }})
    //     const usernameCheck = await Users.findOne({where: { username }})
    //     if(emailCheck) {
    //         return res.status(401).send({error: "Email has already been taken"})
    //     }
    //     if(usernameCheck) {
    //         return res.status(401).send({error: "Username has already been taken"})
    //     }
        
    //     const salt = bcrypt.genSaltSync(10)
    //     const hashedPassword = bcrypt.hashSync(password, salt)

    //     const newUser = await Users.create({email, password: hashedPassword, username})
    //     newUser = newUser.get({plain: true})
    //     delete newUser.password
    //     req.session.user = newUser
    //     res.status(200).send(newUser)
    // },
    // currentUser: (req, res) => {
    //     res.status(200).send(req.session.user)
    // }
}