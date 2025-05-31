class CustomError extends Error {
    constructor(code, message, description) {
        super(`{code : ${code} , message : ${message} , description : ${description}}`)
        this.code = code;
        this.message = message;
        this.description = description; //burda this kulllanamzmızın sebebei şu : catagories.js gibi rouyterlardfan buradaki code erişmek Customeror.code gibi
    }
}

module.exports = CustomError;
