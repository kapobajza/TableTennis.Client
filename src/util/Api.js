export default class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json'
        }
    }

    static xhr(route, params, verb, authorization = null) {
        const host = 'http://169.254.80.80:49290/api/';
        const url = `${host}${route}`;
        let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();
        
        if(authorization != null) {
            options.headers.Authorization = authorization;
        }

        return fetch(url, options).then(resp => {
            if (resp.ok) {
                let json = resp.json();
                return json.then(json => json);
            }     

            let error = resp.text();
            return error.then(err => {
                return {
                    statusCode: resp.status,
                    message: err
                }
            });
        }).catch(error => { throw error; });
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    static post(route, params, authorization = null) {
        return this.xhr(route, params, 'POST', authorization);
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }
}