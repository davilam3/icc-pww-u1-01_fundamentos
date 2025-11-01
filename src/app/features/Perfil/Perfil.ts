import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './Perfil.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Perfil { 

  name= signal('Diana');
  lastName= signal('Avila');
  age= signal(20);

  getFullName(): string {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData(){
    this.name.set('Carolina');
    this.lastName.set('Macas');
    this.age.set(18);
  }

  changeAge(){
    this.age.set(19);
  }

  resetData() {
    this.name.set('Dianita');
    this.lastName.set('Avila');
    this.age.set(20);
  }

}
