import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {


  restablecer={
    email:''
  }

  constructor() { }

  ngOnInit() {
  }

}
