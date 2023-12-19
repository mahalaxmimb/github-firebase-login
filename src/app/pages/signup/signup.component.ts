import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email, password} = f.form.value;
    this.auth.signup(email, password).then(res =>{
      this.router.navigateByUrl('/')
      this.toastr.success('Sign Up Success');
    }).catch(err=>{
      this.toastr.error('Sign Up Failed')
    })
  }
}
