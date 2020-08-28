import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface'

export interface ValidationPipeOptions extends ValidatorOptions {
    whitelist: boolean
    forbidNonWhitelisted: boolean
    validationError: {
        target: boolean
        value: boolean
    }
    forbidUnknownValues: boolean
}

export const validationOptions: ValidationPipeOptions = {
    whitelist: true,
    forbidNonWhitelisted: true,
    validationError: {
        target: false,
        value: false,
    },
    forbidUnknownValues: true,
}
