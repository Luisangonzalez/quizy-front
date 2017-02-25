import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import '../../public/css/styles.css';
@Component({

    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {
    // loginForm = new FormGroup ({
    //   login: new FormControl()
    // });
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {

        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group({
            register: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log('CLICK');
        console.log(this.registerForm.value);
    }
}
