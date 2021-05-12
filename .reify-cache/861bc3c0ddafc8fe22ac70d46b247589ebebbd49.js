"use strict";module.export({default:()=>ValidationError});class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError";
    }
}