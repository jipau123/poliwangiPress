export default class Gate{

    constructor(user){
        this.user = user;
    }

    isAdmin(){
        return this.user.type === 'admin';
    }

    isUser(){
        return this.user.type === 'user';
    }

    isReviewer(){
        return this.user.type === 'reviewer';
    }

    isAdminOrReviewer(){
        if(this.user.type === 'admin' || this.user.type === 'reviewer') {
            return true;
        }
    }

    isReviewerOrUser(){
        if(this.user.type === 'user' || this.user.type === 'reviewer') {
            return true;
        }
    }
}