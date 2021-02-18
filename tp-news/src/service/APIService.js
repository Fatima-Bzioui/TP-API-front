const TP2_NEWS_API = 'http://localhost:8085/api/news';
class APIService {    
    getAllNews(){
        return fetch(TP2_NEWS_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

}

export default new APIService();