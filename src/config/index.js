import devConfig from './development'
import prodConfig from './production'

export default {
    api: process.env.NODE_ENV !== 'production' ? devConfig.VUE_APP_API_LOCATION : prodConfig.VUE_APP_API_LOCATION
}