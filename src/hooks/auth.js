import axios from 'axios';

const verify_token = (token) => {
    let url = '/auth/' + token;
    var response;
    axios.get(url)
    .then((res) => {
        if(res.decode) {
            response = true;
        } else if (res.error) {
            response = false;
        }
    })
    .catch((err) => {
        console.log(err);
        response = err;
    })
    return response;
}

export default verify_token;