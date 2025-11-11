import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListadoProyectos } from "../proyectos/components/listado-proyectos/listado-proyectos";
import { AddProyecto } from '../proyectos/components/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyectos2',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectos2.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyectos2 { 

    proyectosService = inject(ProyectosService); // en toda la app se usa este servicio 
}
