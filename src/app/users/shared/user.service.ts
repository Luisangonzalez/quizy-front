import { Injectable } from '@angular/core';
import { USERS } from './mock-user';

@Injectable()
export class UserService {
    getUsers() {
        return Promise.resolve(USERS);
    }
}
