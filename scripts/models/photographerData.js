class photographerData {
    constructor(data) {
        this._name = data.name
        this._id = data._id
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._price = data.price
        this._portrait = data.portrait
    }

    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get location() {
        const city = this._city
        const country = this._country
        return `${city}, ${country}`
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        const price = this._price
        return `${price}€/jour`
    }

    get portrait() {
        return `./assets/photographers/${this._portrait}`
    }
};