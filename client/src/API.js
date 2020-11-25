import axios from 'axios';

const serverUrl = "https://pokemongenerator.herokuapp.com";

const API = {
    getPokemon: function () {
        return axios.get(`${serverUrl}/api/pokemon`);
    },
    createPokemon: function (pokemon) {
        return axios.post(`${serverUrl}/api/pokemon`, pokemon);
    }
};

export default API;