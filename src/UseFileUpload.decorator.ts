import { ActionUse } from '@universal-packages/express-controllers'
import { MethodDecoratorFunction } from '@universal-packages/namespaced-decorators'
import fileUpload from 'express-fileupload'
import { CURRENT_OPTIONS } from './express-controllers-fileupload'

export function UseFileUpload(options?: fileUpload.Options): MethodDecoratorFunction {
  return ActionUse(fileUpload({ ...CURRENT_OPTIONS.options, ...options }))
}
