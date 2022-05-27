import Axios from "axios";
import {clientID, clientSecret} from '../secrets'
const server_url = "http://localhost:5000"
const auth_url = `https://github.com/login/oauth/authorize?client_id=${clientID}`
const USER_NAME = 'GauravDubey56';
function githubAuth () {
    Axios.get(server_url+"/login")
    .then((response) => {
        console.log(response)
    })
}
export {USER_NAME, githubAuth, auth_url, server_url}