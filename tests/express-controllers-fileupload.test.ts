import { ExpressApp } from '@universal-packages/express-controllers'
import fetch from 'node-fetch'
import FormData from 'form-data'
import { createReadStream } from 'fs'
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

    const stream = createReadStream('./tests/__fixtures__/file.txt')
    const formData = new FormData()
    formData.append('fileAttachment', stream)

    let response = await fetch(`http://localhost:${port}/good/1`, {
      method: 'POST',
      body: formData
    })
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ files: { fileAttachment: { name: 'file.txt' } } })
  })
})
