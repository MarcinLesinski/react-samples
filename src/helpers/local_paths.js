// sample
class sample {
    static _ = '/root'
    static flat = sample._ + '/flat'
    static nested = class {
        static _ = sample._ + '/nested'
        static value1 = this._ + '/value1'
        static value2 = this._ + '/value2'
    }
}

class root {
    static css = class {
        static _ = '/css'
        static composition = this._ + '/composition'
        static sword = this._ + '/sword'
    }
}

export default root;