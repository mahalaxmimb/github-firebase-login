import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email :any = null;
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    authService.getUser().subscribe((user) => {
      this.email = user?.email;
    })
  }

  ngOnInit(): void {
  }

  async handleSignout() {
    try {
      const res = await this.authService.signOut();
      this.router.navigateByUrl('/signin')
      this.toastr.info("Login Again to continue")
      this.email = null;
    }
    catch (error) {
      this.toastr.error("Something is Wrong")
    }
  }

}
