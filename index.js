function getPasswordChecker(password) {
    return function check(user){
        return password == user;
    }
}


let c = getPasswordChecker('123')
console.log(c(123))
console.log(c(342))