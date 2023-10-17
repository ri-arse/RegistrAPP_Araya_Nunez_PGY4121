import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente2{
  name:string
  icon:string;
  redirecTo:string
}

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.page.html',
  styleUrls: ['./programacion.page.scss'],
})



export class ProgramacionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open('first')
  }

  componentes : Componente2[]=[

  {
    name:'Acerca de',
    icon: 'happy-outline',
    redirecTo:'/about'   
  },

]






}
