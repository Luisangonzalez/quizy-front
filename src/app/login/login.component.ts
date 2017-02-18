import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import '../../public/css/styles.css';
@Component({

    selector: 'my-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    // loginForm = new FormGroup ({
    //   login: new FormControl()
    // });
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {

        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        console.log('CLICK');
        console.log(this.loginForm.value);
    }
}
