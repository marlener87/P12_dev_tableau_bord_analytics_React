/**
 * Classe `UserScoreFactory` pour gérer et formater les données de score utilisateur provenant de l'API.
 */
class UserScoreFactory {
    /**
     * Crée une instance de `UserScoreFactory`.
     * 
     * @param {Object} dataFromApi - Les données de score utilisateur récupérées depuis l'API.
     * @param {Object} dataFromApi.data - Les données principales fournies par l'API.
     * @param {number} dataFromApi.data.score - Le score associé à l'utilisateur.
     */
    constructor(dataFromApi) {
        console.log(dataFromApi);
        
        // Format à utiliser dans l'application = format qui vient de l'API
        this.score = dataFromApi.data.score;
        //console.log(this.score);
    }
}

export default UserScoreFactory;