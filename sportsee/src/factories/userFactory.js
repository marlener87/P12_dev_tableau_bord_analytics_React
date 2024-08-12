
class UserFactory {
    constructor(dataFromApi){
        console.log(dataFromApi)

        // Format à utiliser dans l'application = format qui viens de l'API
        this.keyData = dataFromApi.data.keyData;
        this.userInfos = dataFromApi.data.userInfos;
        this.score = dataFromApi.data.score;
        this.id = dataFromApi.data.id;
    }

    /**
     * Retourne un tableau contenant les différents apports de l'utilisateur
     */
    getApports () {
        return [
            { title: 'Calories', unit: 'kCal', value: this.keyData.calorieCount, image: '/assets/images/calories-icon.png' },
            { title: 'Protéines', unit: 'g', value: this.keyData.proteinCount, image: '/assets/images/protein-icon.png'  },
            { title: 'Glucides', unit: 'g', value: this.keyData.carbohydrateCount, image: '/assets/images/carbs-icon.png'  },
            { title: 'Lipides', unit: 'g', value: this.keyData.lipidCount, image: '/assets/images/fat-icon.png'  },
        ];
    }
}

export default UserFactory;