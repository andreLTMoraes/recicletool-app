export function SsnMask(value) {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{3})(\d)/g, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1-$2")
    
    return value
}
export function PhoneMask(value) {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2")
    if(value.length >= 5 && value.charAt(4) === "9") {
        value = value.replace(/(\d{5})(\d)/, "$1-$2")
    } else {
        value = value.replace(/(\d{4})(\d)/, "$1-$2")
    }
    
    return value
}