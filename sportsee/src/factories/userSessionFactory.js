class UserSessionFactory {
    constructor(dataFromApi) {
        console.log(dataFromApi);
        
        // Format à utiliser dans l'application = format qui vient de l'API
        this.sessions = dataFromApi.data.sessions;
    }
}

export default UserSessionFactory;