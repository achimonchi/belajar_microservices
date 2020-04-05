exports.getURI = () =>{
    const {USERSERVICES_URI} = process.env
    return USERSERVICES_URI;
}

exports.secretKey = () =>{
    const {SECRET_KEY} = process.env;
    return SECRET_KEY;
}