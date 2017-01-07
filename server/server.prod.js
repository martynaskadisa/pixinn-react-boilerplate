import path from 'path'
import Express from 'express'
import morgan from 'morgan'

import { renderHandler } from './handlers/renderHandler'

const app = new Express()
const port = process.env.PORT || 3000


app.use(morgan('combined'))
app.use(Express.static(path.join(__dirname, '../dist')))

app.get('*', renderHandler)
// TODO: allow requiring images in components
// TODO: allow requiring css in components
// TODO: server-side async fetching
// TODO: append trailing slash
// TODO: non-www to www url rewrite
// TODO: sitemap
// TODO: robots.txt

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\nenv: ${__DEV__ ? 'development' : 'production'}`
    )
  }
})
