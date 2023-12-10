import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from './models/Jot.js';
class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  jots = [
    new Jot({
      name: 'ExampleJot',
      body: 'This is an example Jot! Happy Jot-ing!',
      createdDate: 'Date'
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())