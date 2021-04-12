import axios from 'axios'

export default class musicService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://api.spotify.com/v1/browse/new-releases'
        })
    }

    getBeers = () => this.apiHandler.get('/')
}