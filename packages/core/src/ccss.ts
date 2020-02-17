import { TCCSSCoreProp } from './types'
import props from './props'

const ccss = (v: TCCSSCoreProp & any): string => {
    let generated = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
            if (props[k]) {
                generated += props[k](v[k], v, k)
            }
        }
    }
    return generated
}

export default ccss
