/**
 * 
 */
class UserActivityFactory {
    constructor(dataFromApi) {
        console.log(dataFromApi);
        
        // Format à utiliser dans l'application = format qui viens de l'API
        this.sessions = dataFromApi.data.sessions;
    }
}

export default UserActivityFactory;