import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { formUtils } from '../../Utils/formUtils';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario { 
  
  formUtils = formUtils;
  private fb= inject(FormBuilder); 
  onSubmit(){
    //cuando sale invalo cuando no escribio nada y tambien
    //si toco los campos la persona o lleno uno y no los demas 
    //los que fueron manipualdos por el usuario 
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario', this.myForm.value);
    alert ('Formulario enviado con exito');
    this.myForm.reset();
  }

  // isValidField(field: string): boolean | null {
  //   return (
  //     this.myForm.controls[field].errors &&
  //     this.myForm.controls[field].touched
  //   );
  // }

  // getFieldError(fieldName: string): string | null {
  //   if (!this.myForm.controls[fieldName]) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};

  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';
  //       case 'minlength':
  //         return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
  //       case 'min':
  //         return `El valor mínimo es ${errors['min'].min}`;
  //       case 'email':
  //         return 'Formato de correo inválido';
  //     }
  //   }
  //   return null;
  // }

  
  //forma simple
  // formulario = new FormGroup({
  //   nombre: new FormControl(''),
  //   email: new FormControl(''),
  // });

  //controlador: [valor inicial, [otro arreglo de las reglas al controlador]]
  //validadores por defecto en el angular
  myForm: FormGroup= this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    email: ['', [Validators.required, Validators.email]],
  });


}
