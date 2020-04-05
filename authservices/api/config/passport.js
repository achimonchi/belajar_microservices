const passportJWT = require('passport-jwt');

const {
    secretKey
} = require('./keys');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = secretKey;

module.exports = passport =>{
    passport.use(
        new JWTStrategy(options, (jwt_payloads, done)=>{
            
        })
    )
}


