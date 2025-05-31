const Enum = require("../config/Enum");
const CustomError = require("./Eroor");

class Response {
    constructor() { }
    static successResponse(data, code = 200,) {
        return {
            code,
            data
        }
    }
    static errorResponse(error) {
        if (error instanceof CustomError) {
            return {
                code : error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }
        }
        return {
            code : Enum.HTTP_CODES.internalServerError,
            error: {
                message: "Unkown Eroor!",
                description: error.description
            }
        }
    }
}

module.exports = Response;
