class Data {
    constructor() {
        this.data = {};
    }

    getData() {
        return this.data;
    }

    setData(key, value) {
        this.data[key] = value;
    }

    sectionExists(sectionName) {
        return this.data.hasOwnProperty(sectionName);
    }

    createSection(sectionName) {
        if (this.sectionExists(sectionName)) {
            alert(`Section "${sectionName}" already exists.`);
            return false;
        } else {
            this.data[sectionName] = [];
            return true;
        }
    }
}

export default Data;