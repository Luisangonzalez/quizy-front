import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../users/shared/user.model';
import { UserService } from '../users/shared/user.service';

@Component({

    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss'],
    providers: [ UserService ]
})
export class RegisterComponent {

    registerForm: FormGroup;
    users: User[] = [];

    constructor(private fb: FormBuilder, private userService: UserService) {

        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log('CLICK');
        console.log(this.registerForm.value);
        this.userService.getUsers()
          .then((users) => console.log(users));
    }
}
