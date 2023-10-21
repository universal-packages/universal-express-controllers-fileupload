import { setFileUploadOptions } from '../src'

describe('express-controllers-fileupload', (): void => {
  it('It executed configured middleware all across controllers', async (): Promise<void> => {
    setFileUploadOptions({ tempFileDir: './tmp' })

    await runExpressApp()

    await fPost('good/1', fBuildFormData({}, { fileAttachment: './tests/__fixtures__/file.txt' }))
    expect(fResponse).toHaveReturnedWithStatus('OK')
    expect(fResponseBody).toMatchObject({ files: { fileAttachment: { name: 'file.txt' } } })
  })
})
