class UserScoreFactory {
    constructor(dataFromApi) {
        console.log(dataFromApi);
        
        // Format à utiliser dans l'application = format qui vient de l'API
        this.score = dataFromApi.data.score;
        //console.log(this.score);
        
    }
}

export default UserScoreFactory;