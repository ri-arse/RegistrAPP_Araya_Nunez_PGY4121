import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  FormLogIn: FormGroup
  constructor(private menuController: MenuController,
    public Form:FormBuilder, public AlertController:AlertController,public router:Router){
      this.FormLogIn = this.Form.group(
        {
          'email': new FormControl("",Validators.required),
          'password' : new FormControl("",Validators.required),

        }
      )
    } 



  ngOnInit() {
  }

  showMenu(){
    this.menuController.open('first')
  }  

  async Ingresar(){
    let form = this.FormLogIn.value;

    let usuario = JSON.parse(localStorage.getItem('usuario')|| "[]")

    if (usuario.email == form.email && usuario.password == form.password){
      console.log('ingresado');
      this.router.navigate(['/home-alumno'])
      
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
