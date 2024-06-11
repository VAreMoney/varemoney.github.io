// src/buefy.d.ts
import { Plugin } from 'vue'
import { BuefyConfig } from 'buefy'

declare module 'buefy' {
  const Buefy: Plugin<[BuefyConfig]>
  export default Buefy
}
