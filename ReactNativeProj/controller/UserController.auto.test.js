import {expect, jest, test} from '@jest/globals'
import UserController from './UserController';

jest.mock('../model/UserDao');

let controller = null;
beforeEach(function(){
    controller = new UserController();
});
test('Mock Framework',function(){
    controller.dao.readBy = jest.fn(obj => obj);
    const newuser = {name:'T1', login:'test@loyola.edu'}
    const resgistered = controller.registerNewUser(newuser);
    expect(resgistered).toBeNull();
    expect(controller.dao.readBy).toBeCalled();
    expect(controller.dao.create).not.toBeCalled();
});
