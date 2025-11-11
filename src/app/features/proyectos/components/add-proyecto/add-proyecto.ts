import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  //no va a tener input , no va a recibirnada pero va a delvolver un proiyecto

    name = signal('');
    description = signal('');

    //input
    // no agg ningun proyecto a ningun lado, solo es interfaz 
    newProyecto = output<Proyecto>();
    removeProyecto = output<number>();


      addProyecto() {
        const newProyecto: Proyecto = { 
            id: Math.floor(Math.random() * 1000),
            nombre: this.name(),
            descripcion: this.description()
        };

        this.newProyecto.emit(newProyecto); //emito el nuevo proyecto
        this.name.set('');
        this.description.set(''); 
       }


      dellFirstProyecto(id: number) {
        //funcion de eliminar primer proyecto
        this.removeProyecto.emit(id);
      }

        changeName(value: string) {
        this.name.set(value);

      }
      changeDescription(value: string) {
        this.description.set(value);
      }

 }

