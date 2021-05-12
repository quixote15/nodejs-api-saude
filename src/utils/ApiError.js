import API_ERRORS_IDS from '../config/constants.js'
export default class ApiError extends Error {
    constructor({message, code, errorId}) {
        super(message)
        this.code = code;
        this.errorId = errorId;
        this.errorMessage = message;
    }

    static getInternalServerError(){
      return new ApiError({message: 'Ocorreu um erro inesperado.', code: 500, errorId: API_ERRORS_IDS.INTERNAL_SERVER_ERROR })
    }

    static getValidationError(message) {
      return new ApiError({message, code: 422, errorId: API_ERRORS_IDS.VALIDATION_ERROR }) 
    }

    static getBadRequestError() {
      return new ApiError({message: 'Requisiçao inválida.', code: 400, errorId: API_ERRORS_IDS.BAD_REQUEST })
    }

}