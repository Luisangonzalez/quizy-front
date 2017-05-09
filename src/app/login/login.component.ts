import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
// import '../../public/css/styles.css';
@Component({

    selector: 'my-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [AuthService]
})
export class LoginComponent {
    // loginForm = new FormGroup ({
    //   login: new FormControl()
    // });
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private auth: AuthService) {

        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        this.auth.useJwtHelper();
        console.log(this.auth.loggedIn());
        console.log(this.loginForm.value);
        this.auth.login(this.loginForm.value);
        console.log(this.auth.loggedIn());
    }
}
