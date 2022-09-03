class CustomError extends Error {
    
    static TYPE = 'CUSTOM_ERROR';
    #_code = ''
    #_message = '';
    #_details = '';

    constructor (code, message, details) {
        super(message);
        this.#_code = code;
        this.#_message = message;
        this.#_details = details;
    }

    get code () {
        return this.#_code;
    }

    get message () {
        return this.#_message;
    }

    get details () {
        return this.#_details;
    }

    static getCustomErrorCodes () {
        return ['100', '200', '300'];
    }

}

class ApplicationError extends CustomError {

}

function test () {
    throw new CustomError ('100', 'INVALID_INPUT', 'Input is invalid');
}

try {
    console.log(ApplicationError.getCustomErrorCodes());
    console.log(CustomError.TYPE);    
    test();
} catch(err) {
    console.log(err.details);
}

let err = new ApplicationError('1', 's', 'sd');
console.log(err._code);