import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  signUp() {

    //todo change this code
    var userName = "test@gmail.com";
    var pass = "";
    this.http.post("https://localhost:44314/api/account", { Email: "em", Password: "pass" }).subscribe(
      (data) => {
        var t = data;
      }
    );
  }

}
