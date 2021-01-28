import {observable} from "mobx";
type UserType = {
    id: number,
    name: string,
    token: string
}

class UserMob{
    @observable user:UserType = {
        id: -1,
        name:'',
        token:''
    }
}

export default UserMob