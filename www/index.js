function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%/()=?*#.:,;-_+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var mined = 0
const st_val = "0000000"
function mining(){
    alert("Close this message to start !")
    while (1 < 10) {
        ran_data = makeid(15)
        cur_hash = sha256(ran_data)
        if (cur_hash.substring(0, st_val.length) == st_val) {
            const data = {cur_hash, ran_data}
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch("/hashes", options)
        }
    }
}

