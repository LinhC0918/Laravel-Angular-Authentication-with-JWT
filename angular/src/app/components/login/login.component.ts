import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngService} from '../../Services/ang.service';
import {TokenService} from '../../Services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null
    };

    public error = null;

    constructor(private http: HttpClient,
                private angService: AngService,
                private token: TokenService,
                private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.angService.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/profile');
    }

    handleError(error) {
        this.error = error.error.error;

    }

}
