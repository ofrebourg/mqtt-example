// TODO: fix the line below. Somehow, when importing this type, Vue throws an error 'global is not defined'.
// tsconfig.app.json also needed the following options for typescript not to complain about importing types:
//   "experimentalDecorators": true,
//   "importsNotUsedAsValues": "remove",
// These options are not necessary otherwise.
// So I'm leaving the line below commented for the timebeing.
// import { IClientOptions } from 'mqtt'

const mqttOptions /*: IClientOptions*/ = {
  clientId: '<random_custom_id>',
  protocol: 'wss',
  hostname: '879e13b2e2774579a33df697a0245117.s2.eu.hivemq.cloud',
  protocolVersion: 4,
  port: 8884,
  path: '/mqtt',
  clean: true,
  resubscribe: false,
  keepalive: 60,
  reconnectPeriod: 0,
  username: 'ofrebourg',
  password: 'RKYb8bEAUKuTGe'
}

export default mqttOptions
