import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController , MenuController} from '@ionic/angular';


@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {

  

  formDoc: FormGroup
  constructor(public Form:FormBuilder, public AlertController:AlertController,public router: Router){
    this.formDoc = this.Form.group(
      {
        'nombreD': new FormControl("",Validators.required),
        'passwordD' : new FormControl("",Validators.required),
        'emailD' : new FormControl("",Validators.required),
        'asigN' : new FormControl("",Validators.required)
        
      }
    )
  }

  ngOnInit() {}

  async Registrarse1(){
    let form = this.formDoc.value;

    if(this.formDoc.invalid){
      const alert = await this.AlertController.create({
        subHeader : 'Datos Incompletos',
        message: 'Tienes que completar todos los datos solicitados!',
        buttons: ['aceptar'

        ],

        });

        await alert.present();
        return;

    }

    else{
      this.router.navigate(['/login-docente'])
    }

  


    let usuario = {
      nombre:form.nombreD,
      password:form.passwordD,
      email:form.emailD,
      asignaturas:form.asigN
      

    }
    
   
    localStorage.setItem('usuario', JSON.stringify(usuario))
    
    
  }
  


}
