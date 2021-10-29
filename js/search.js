function browse(company){

    const finnhub = require('finnhub');

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "";
    const finnhubClient = new finnhub.DefaultApi();

    finnhubClient.symbolSearch(company, (error, data, response) => {console.log(data)});
    return ;
}