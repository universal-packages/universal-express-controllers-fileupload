import { ExpressApp } from '@universal-packages/express-controllers'

import { setFileUploadOptions } from '../src'

const port = 4000 + Number(process.env['JEST_WORKER_ID'])

let app: ExpressApp
afterEach(async (): Promise<void> => {
  await app.stop()
})

describe('express-controllers-fileupload', (): void => {
  it('It executed configured middleware all across controllers', async (): Promise<void> => {
    app = new ExpressApp({ appLocation: './tests/__fixtures__', port })

    setFileUploadOptions({ tempFileDir: './tmp' })

    await app.prepare()
    await app.run()

    app.on('request/error', console.log)

    await fPost('good/1', fBuildFormData({}, { fileAttachment: './tests/__fixtures__/file.txt' }))
    expect(fResponse).toHaveReturnedWithStatus('OK')
    expect(fResponseBody).toMatchObject({ files: { fileAttachment: { name: 'file.txt' } } })
  })
})
