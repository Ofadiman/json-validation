import { ClassConstructor } from 'class-transformer/types/interfaces'
import { validateSync, ValidationError } from 'class-validator'
import { plainToInstance } from 'class-transformer'

export const transformAndValidate = <T extends object>(
  plainObject: object,
  classReference: ClassConstructor<T>,
): ValidationError[] => {
  const transformed = plainToInstance(classReference, plainObject)

  return validateSync(transformed, {
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    whitelist: true,
  })
}
