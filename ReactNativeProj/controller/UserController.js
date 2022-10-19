import UserDao from "../model/UserDao";

export default class UserController{
    dao;
    constructor(){
        this.dao = new UserDao();
    }
    setDao(dao){
        this.dao = dao;
    }

    registerNewUser(userobj){
        let found = this.dao.readBy({login: userobj.login});
        if(found == null){
            let created = this.dao.create(userobj);
            return created;
        }
        else{
            return null;
        }
    }
}