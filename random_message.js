const messageFactory = () => {
    return {
        _message: [],
        _season: [],
        get message(){
            return this._message;
        },
        get season(){
            return this._season;
        },
        set message(message){
            this._message = message;
        },
        set season(sea){
            this._season = sea;
        },
        addMessage(message,season){
            this._message.push(message);
            this._season.push(season);
        }
    }
}
