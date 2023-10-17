import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  formReg: FormGroup
  constructor(public Form:FormBuilder, public AlertController:AlertController,public router: Router){
    this.formReg = this.Form.group(
      {
        'nombre': new FormControl("",Validators.required),
        'password' : new FormControl("",Validators.required),
        'email' : new FormControl("",Validators.required),
        
      }
    )
  }

  ngOnInit() {}

  async Registrarse(){
    let form = this.formReg.value;

    if(this.formReg.invalid){
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
      this.router.navigate(['/inicio'])
    }


    let usuario = {
      nombre:form.nombre,
      password:form.password,
      email:form.email

    }

    localStorage.setItem('usuario', JSON.stringify(usuario))

    
  }


}
