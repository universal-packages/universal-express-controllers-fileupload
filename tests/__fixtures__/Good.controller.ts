import { BaseController, Controller, Post } from '@universal-packages/express-controllers'
import { UseFileUpload } from '../../src/UseFileUpload.decorator'

@Controller('good')
export default class GoodController extends BaseController {
  @UseFileUpload()
  @Post(':id')
  public async postEnd(): Promise<void> {
    this.json({ files: this.request.files })
  }
}
