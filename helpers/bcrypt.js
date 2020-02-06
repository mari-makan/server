const bcrypt = require("bcryptjs")

class HashBcrypt {
    static hash(password) {
        const saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }

    static check(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}

module.exports = HashBcrypt