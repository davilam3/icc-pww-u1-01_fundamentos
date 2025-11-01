import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Homepage } from './features/homepage/homepage';
import { Perfil } from './features/Perfil/Perfil';

export const routes: Routes = [
    {
        path: "",
        component: Homepage
    },

    {
        path:'perfil',
        component: Perfil,
    }

];
