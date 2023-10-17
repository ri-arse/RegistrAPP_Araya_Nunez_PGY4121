import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  constructor(private menuController: MenuController, private AlertController: AlertController) { }

  async ngOnInit(){

    let usuario = JSON.parse(localStorage.getItem('usuario')|| '[]')
    console.log(usuario)

    const alert = await this.AlertController.create({
      subHeader : 'Bienvenido Alumn@!',
      message: '¡Hola! ' + usuario.nombre,
      buttons: ['Aceptar'],
    });

    await alert.present();
    return;






  }

}
