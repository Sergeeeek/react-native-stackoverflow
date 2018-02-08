const ENDPOINT = "https://api.stackexchange.com/2.2";
const QUESTIONS_URL = "questions";
const API_KEY = "TXrbg4hgi2tudl7WVU7NVw((";

export default {
    getQuestions(tagged, page) {
        return fetch(
            `${ENDPOINT}/${QUESTIONS_URL}?site=stackoverflow&page=${page}&pagesize=50&tagged=${encodeURIComponent(tagged)}&key=${API_KEY}`
        ).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                return Promise.reject(resp.status);
            }
        }).then(json => json.items);
    }
};