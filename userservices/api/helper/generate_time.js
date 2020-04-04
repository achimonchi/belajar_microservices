exports.asiaTime = () =>{
    var utc = new Date();
    utc.setHours(utc.getHours()+7);
    return utc
}