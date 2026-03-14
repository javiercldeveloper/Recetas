import { Stitch } from 'mongodb-stitch-browser-sdk'

export const stitchClient = Stitch.initializeDefaultAppClient(
  process.env.VUE_APP_STITCH_APP_ID
)
