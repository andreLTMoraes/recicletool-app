export function checkObjValuesEmpty(obj) {
    const values = Object.values(obj)
    var res = false

    for (const v of values) {
        if (v === '') {
            console.log('Tem branco')
            res = true
            break
        }
    }

    return res
}

export function validEmail(email) {
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(email.match(format)) return true

    return false
}

export function validPhone(phone) {
    var format = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/
    
    if(phone.match(format)) return true

    return false
}

export function validSsn(ssn) {
    var format = /^\d{3}[\..]?\d{3}[\..]?\d{3}[\.-]?\d{2}$/

    if(!ssn.match(format)) return false

    var value = ssn.replace(/\D/g, "")
    var sum = 0
    var rest = 0

    for(var i=1; i<=9; i++) sum = sum + parseInt(value.substring(i-1, i))*(11-i)
    rest = (sum * 10) % 11

    if((rest == 10) || (rest == 11)) rest = 0
    if(rest != parseInt(value.substring(9,10))) return false

    sum = 0
    for(i=1; i <= 10; i++) sum = sum + parseInt(value.substring(i-1, i))*(12-i)
    rest = (sum * 10) % 11

    if((rest == 10) || (rest == 11)) rest = 0
    if(rest != parseInt(value.substring(10,11))) return false

    return true
}