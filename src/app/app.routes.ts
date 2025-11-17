import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Homepage } from './features/homepage/homepage';
import { Perfil } from './features/Perfil/Perfil';
import { Proyectos } from './features/proyectos/proyectos';
import { Proyectos2 } from './features/proyectos2/proyectos2';

export const routes: Routes = [
    {
        path: "",
        component: Homepage
    },

    {
        path:'perfil',
        component: Perfil,
    },

    {
        path: 'proyectos',
        component: Proyectos,
    },

    {
        path: 'proyectos2',
        component: Proyectos2,
    },
    {
        path: 'formulario',
        //component: Formulario,
        loadChildren: () => import('./features/formularios/formularios-routes').then(m => m.formulariosRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
    

];
