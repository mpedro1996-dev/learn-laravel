import axios from "axios";

const api = axios.create({
    baseURL: "http://dev.learn-laravel/api/"
});

api.interceptors.request.use(
function(config){
    var element = window.document.getElementById("block-ui");
    element.style.display = 'block';
    return config

},
function(err){
    return Promise.reject(err);
});

api.interceptors.response.use(
function(config){
    var element = window.document.getElementById("block-ui");
    element.style.display = 'none';
    return config

},
function(err){
    return Promise.reject(err);
});

export default api;