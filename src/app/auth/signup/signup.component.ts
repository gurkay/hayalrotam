import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  /***********************************************
   * Set Current date
   ***********************************************/
  planModel: any = {start_time: new Date() };
  /************************************************/

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(
      form.value.email,
      form.value.password,
      form.value.userName,
      form.value.userSurname,
      form.value.age,
      form.value.gender,
      form.value.city,
      form.value.dateOfRecord);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
