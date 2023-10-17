import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'restablecer-pass',
    loadChildren: () => import('./restablecer-pass/restablecer-pass.module').then( m => m.RestablecerPassPageModule)
  },

  {
    path: 'programacion',
    loadChildren: () => import('./programacion/programacion.module').then( m => m.ProgramacionPageModule)
  },
  {
    path: 'arquitectura',
    loadChildren: () => import('./arquitectura/arquitectura.module').then( m => m.ArquitecturaPageModule)
  },
  {
    path: 'basededatos',
    loadChildren: () => import('./basededatos/basededatos.module').then( m => m.BasededatosPageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'login-docente',
    loadChildren: () => import('./login-docente/login-docente.module').then( m => m.LoginDocentePageModule)
  },
  {
    path: 'registro-docente',
    loadChildren: () => import('./registro-docente/registro-docente.module').then( m => m.RegistroDocentePageModule)
  },
  {
    path: 'feriados',
    loadChildren: () => import('./feriados/feriados.module').then( m => m.FeriadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
