import fileUpload from 'express-fileupload'

import { CurrentOptions } from './types'

export const CURRENT_OPTIONS: CurrentOptions = { options: {} }

export function setFileUploadOptions(options: fileUpload.Options): void {
  CURRENT_OPTIONS.options = options
}
