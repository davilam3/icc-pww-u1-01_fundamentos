import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

    // proyectos = signal<Proyecto[]>([
    //     {
    //         id: 1, nombre: 'Proyecto Angular',
    //         descripcion: 'Descripcion.'
    //     },
    // ]);

    constructor() { 
    //funcion = (() => CADA VEZ QUE CAMBIA EL VALOR DE UN SIGNAL SE EJECUTA
      effect(() => {
        const data = this.proyectos();
        console.log(data);
        console.log(JSON.stringify(data));
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      });

      effect(() => {
        const data = this.proyectosDos();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      });

    }

    private readonly STORAGE_KEY = 'proyectosApp'; // Clave para el almacenamiento local
    proyectos = signal<Proyecto[]>(this.loadProyectos());
    proyectosDos= signal<Proyecto[]>(this.loadProyectos());


    //funcion que cree los primeros proyectos
    private loadProyectos(): Proyecto[]{ //tiene que devolver un array de proyectos
      const data= localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [
        {
          id: 1, nombre: 'Proyecto Angular', descripcion: 'Descripcion inicial.'
        },   
      ];
    }
  
    addProyecto(newProyecto: Proyecto) {
        this.proyectos.set([...this.proyectos(), newProyecto]);
        //... hace barrido a todos los eventos, es el 1, 2 prpyectos +  el nuevo evento
    } 

    // 11/11
    //usar locale storage para guardar los proyectos de forma local del navegador no del framework

    dellFirstProyecto(id: number) {
      this.proyectos.set(this.proyectos().slice(1));
      //otra opcion
      //for(let index =0; index < this.proyectos().length; index++) {
      //const element = array[index];
    }
      
}
