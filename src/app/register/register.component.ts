import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({

    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {

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
    }
}
