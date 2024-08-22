import UserFactory from '../factories/userFactory';
import UserActivityFactory from '../factories/userActivityFactory';
import UserSessionFactory from '../factories/userSessionFactory';
import UserScoreFactory from '../factories/userScoreFactory';
import UserPerformanceFactory from '../factories/userPerformanceFactory';


// Objectifs du service : 
// - Aller chercher les données sur le serveur (fetch, axios, ..)
// - Les formater (factories)
// - Les restituer à l'application (return)

const UserService = {
 
    /**
     * Récupère les données de l'utilisateur sur le serveur et les formate avec la factory associée
     */
    async getUser(userId) {
     const newObjectToUse =  await fetch(`http://localhost:3000/user/${userId}`) // Récupère l'objet response
        .then(response => {
            return response.json() // Récupère le contenu body au format json de l'objet response
        })
        .then(resultsFromApi => {
            console.log(resultsFromApi)
            const newObject = new UserFactory(resultsFromApi)
            console.log(newObject)
            return newObject
        })

        return newObjectToUse
    },


    /**
     * Récupère les données d'activité de l'utilisateur sur le serveur et les formate avec la factory associée
     */
    async getActivity(userId) {
        return await fetch(`http://localhost:3000/user/${userId}/activity`) // Récupère l'objet response
        .then(response => response.json())
        .then(resultsFromApi => new UserActivityFactory(resultsFromApi))
    },

    /**
     * Récupère les données de la session de l'utilisateur sur le serveur et les formate avec la factory associée
     */
    async getSession(userId) {
        return await fetch(`http://localhost:3000/user/${userId}/average-sessions`) // Récupère l'objet response
        .then(response => response.json())
        .then(resultsFromApi => new UserSessionFactory(resultsFromApi))
    },

    /**
     * Récupère les données de la session de l'utilisateur sur le serveur et les formate avec la factory associée
     */
    async getPerformance(userId) {
        return await fetch(`http://localhost:3000/user/${userId}/performance`) // Récupère l'objet response
        .then(response => response.json())
        //.then(resultsFromApi => new UserPerformanceFactory(resultsFromApi))
        .then(resultsFromApi => {
            const userPerformanceFactory = new UserPerformanceFactory(resultsFromApi);
            console.log(userPerformanceFactory);
            return userPerformanceFactory;
            
        })
    },

    /**
     * Récupère les données du score de l'utilisateur sur le serveur et les formate avec la factory associée
     */
    async getScore(userId) {
        return await fetch(`http://localhost:3000/user/${userId}`)
        .then(response => response.json())
        .then(resultsFromApi => new UserScoreFactory(resultsFromApi))
        // .then(resultsFromApi => {
        //     const userScoreFactory = new UserScoreFactory(resultsFromApi);
        //     // Log de la valeur finale
        //     //console.log(userScoreFactory.score);
        //     return userScoreFactory;
        // });
    }

    // async getScore(userId) {
    //     return await fetch(`http://localhost:3000/user/${userId}`) // Récupère l'objet response
    //     .then(response => response.json())
    //     .then(resultsFromApi => {
    //         const userScoreFactory = new UserScoreFactory(resultsFromApi);
            
    //         // Formater les données pour le graphique
    //         const formattedData = [
    //             { name: 'Score', value: userScoreFactory.score * 100, fill: '#FF0000' }
    //         ];
            
    //         return {
    //             formattedData,
    //             percentage: userScoreFactory.score
    //         };
    //     });
    // },
}

export default UserService;