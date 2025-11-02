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
    return `${this.name()} ${this.lastName()} con ${this.age()} años`;
  }

  changeData(){
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  changeAge(){
    this.age.set(18);
  }

  resetData() {
    this.name.set('Diana');
    this.lastName.set('Avila');
    this.age.set(20);
  }

}
