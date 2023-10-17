import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController , AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit  {

  ForLog: FormGroup
  constructor(private menuController: MenuController,
    public Form:FormBuilder, public AlertController:AlertController,public router:Router){
      this.ForLog = this.Form.group(
        {
          'emailD': new FormControl("",Validators.required),
          'passwordD' : new FormControl("",Validators.required),

        }
      )
    } 



  ngOnInit() {
  }

  showMenu(){
    this.menuController.open('first')
  }  

  async Ingresar1(){
    let form = this.ForLog.value;

    let usuario = JSON.parse(localStorage.getItem('usuario')|| "[]")

    if (usuario.email1 == form.email1 && usuario.password1 == form.password1){
      console.log('ingresado');
      this.router.navigate(['/registro'])
      
    }else{
      const alert = await this.AlertController.create({
        subHeader: 'Datos Invalidos',
        message : 'Los datos tienen que ser correctos o rellena los campos',
        buttons: ['Aceptar'],

      });

      await alert.present();
      return;

    }

  }
}