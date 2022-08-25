const regexName = (frase) =>{
    const t = /[\w\S]{3,20}/;
    return t.test(frase)
}

const regexEmail = (email) =>{
    const t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return t.test(email)
}


module.exports = {regexName, regexEmail}