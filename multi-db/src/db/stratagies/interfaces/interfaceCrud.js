class NotImplementedExcption extends Error {
    constructor() {
        super("Not Implemented Exception");
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedExcption()
    }

    read(query) {
        throw new NotImplementedExcption()
    }

    update(id, item) {
        throw new NotImplementedExcption()
    }

    delete(id) {
        throw new NotImplementedExcption()
    }
    isConnected() {
        throw new NotImplementedExcption()
    }
    connect() {
        throw new NotImplementedExcption()
    }
}

module.exports = ICrud
