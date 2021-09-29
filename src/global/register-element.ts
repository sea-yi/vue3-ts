import 'element-plus/dist/index.css'
import { App } from 'vue'

import { ElButton, ElTable } from 'element-plus/lib/components'

const components = [ElButton, ElTable]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
