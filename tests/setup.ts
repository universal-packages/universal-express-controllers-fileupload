import './runExpressControllers'

// node > 19 has some issues with fetch closing sockets on consecutive requests
if (process.env.CI || process.versions.node.startsWith('20')) {
  jest.retryTimes(10)
  jest.setTimeout(10000)
}
