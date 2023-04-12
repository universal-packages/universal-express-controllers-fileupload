# Express controllers fileupload

[![npm version](https://badge.fury.io/js/@universal-packages%2Fexpress-controllers-fileupload.svg)](https://www.npmjs.com/package/@universal-packages/express-controllers-fileupload)
[![Testing](https://github.com/universal-packages/universal-express-controllers-fileupload/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-express-controllers-fileupload/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-express-controllers-fileupload/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-express-controllers-fileupload)

Express fileupload middleware for universal controllers.

## Install

```shell
npm install @universal-packages/express-controllers-fileupload

npm install @universal-packages/express-controllers
```

## Global methods

#### **`setFileUploadOptions(options: fileUpload.Options)`**

Set up options for the fileupload middleware, so you don't have to repeat them in every action.

```js
import { setFileUploadOptions } from '@universal-packages/express-controllers-fileupload'

setFileUploadOptions({ useTempFiles: true })
```

## Hooks

#### **`@UseFileUpload([options: fileUpload.Options])`**

Set a particular action to use the file upload middleware.

```js
import { BaseController, Controller, Post } from '@universal-packages/express-controllers'
import { UseFileUpload } from '@universal-packages/express-controllers-fileupload'

@Controller('good')
export default class GoodController extends BaseController {
  @UseFileUpload()
  @Post()
  async action() {
    this.request.files
  }
}
```

## Typescript

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
