import mongoose from 'mongoose'
import app from './app'
import config from './config/config'
import { errorlogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.dbUrl as string)
    logger.info('Database connection successfull 🎁')

    app.listen(config.port, () => {
      logger.info(`This server is listening port: ${config.port} 🏃`)
    })
  } catch (error) {
    errorlogger.error('Database Connection Fail: ', error)
  }
}

boostrap()
