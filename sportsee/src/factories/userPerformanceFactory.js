class UserPerformanceFactory {
    constructor(dataFromApi) {
        console.log(dataFromApi);
        
        // Format à utiliser dans l'application = format qui viens de l'API
        this.data = dataFromApi.data.data;
        this.kind = dataFromApi.data.kind;

        // Ajout de kindName à chaque entrée de données
        this.data = this.data.map(item => ({
            ...item,
            kindName: this.capitalizeWords(this.kind[item.kind])
        })).reverse();
    }

    // Fonction pour capitaliser la première lettre de chaque mot
    capitalizeWords(word) {
        return word.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
}

export default UserPerformanceFactory;
