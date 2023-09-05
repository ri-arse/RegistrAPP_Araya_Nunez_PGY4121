import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {


  registrousuario={
    nombre:'',
    apellido:'',
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

}
