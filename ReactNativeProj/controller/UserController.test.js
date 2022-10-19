import {expect, jest, test} from '@jest/globals'
import MockUserDao from '../model/MockUserDao';
import UserDao from '../model/UserDao';
import UserController from './UserController';

let dao = null;
let controller = null;
beforeEach(function(){
    dao = new MockUserDao();
    controller = new UserController();
    controller.setDao(dao);
});
test('Manual Mocking - New user',function(){
    const newuser = {name:'T1', login:'a'}
    const resgistered = controller.registerNewUser(newuser);
    expect(resgistered._id).toBe(1);
});
test('Manual Mocking - user exists',function(){
    const newuser = {name:'T1', login:'test@loyola.edu'}
    const resgistered = controller.registerNewUser(newuser);
    expect(resgistered).toBeNull();
});
