import axios from 'axios';

export default class Search {
    constructor (query) {
        this.query = query;
    }

    async getResults () {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'bd3c455da920d142f8ea20e15dde31bd';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log(res);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            window.alert(error);
        }
    }
}
