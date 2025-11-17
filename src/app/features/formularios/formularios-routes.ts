import { Routes } from "@angular/router";
import { Formulario } from "./formulario/formulario";
import { FormulariosDinamicos } from "./formularios-dinamicos/formularios-dinamicos";
import { FormulariosMorePage } from "./formulariosMorePage/formulariosMorePage";
export const formulariosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                title: 'Formularios Básicos',
                component:Formulario, //formu normal
            },
            {
                path: 'dynamic',
                title: 'Formularios Dinámicos',
                component:FormulariosDinamicos, //formu dinamico
            },
            {
                path: 'more',
                title: 'MORE',
                component:FormulariosMorePage, //formu normal
            },
             {
                path: '**',
                redirectTo: 'basic',
            },

        ],
    },
];