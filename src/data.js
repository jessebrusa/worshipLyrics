class Data {
    constructor() {
        this.data = {};
    }

    getData() {
        return this.data;
    }

    setData(key, value) {
        this.data[key] = value
    }
}

export default Data;