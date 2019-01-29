import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngService} from '../../Services/ang.service';
import {Router} from '@angular/router';
import {TokenService} from '../../Services/token.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public form = {
        email: null,
        name: null,
        password: null,
        password_confirmation: null
    };
    public error = [];

    constructor(private http: HttpClient,
                private angService: AngService,
                private token: TokenService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.angService.register(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.token.handle(data.access_token);
        this.router.navigateByUrl('/profile');
    }

    handleError(error) {
        this.error = error.error.errors;
    }

}
