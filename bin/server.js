console.log('sdfsdfsdfsdfdsf')

import config from '../config'
console.log('aaa')
import server from '../server/main'
console.log('bbb')
import _debug from 'debug'

const debug = _debug('app:bin:server')
const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Server is now running at http://${host}:${port}.`)
debug(`Server accessible via localhost:${port} if you are using the project defaults.`)
