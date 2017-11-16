import Joi from 'joi';
export default {
    createUser: {
        body: {
            mail: Joi.string().email()
        }
    }
}