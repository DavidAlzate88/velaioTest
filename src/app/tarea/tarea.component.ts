import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  constructor(private formBuilder: FormBuilder) {}

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  taskForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
    associatedPeople: this.formBuilder.group({
      fullName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      skill: [this.skills],
    }),
  });

  getErrorMessage(): string {
    let errorMessage: string = '';
    if (
      this.taskForm.controls.name.hasError('required') ||
      this.taskForm.controls.associatedPeople.controls.age.hasError('required')
    ) {
      errorMessage = 'Este campo es requerido';
    }

    return errorMessage;
  }

  onSubmit() {
    console.warn(this.taskForm.value);
    // this.httpProvider.saveProduct(value).subscribe((data : any) => {
    //     if (data.status === 204 && data.statusText === 'No Content') {
    //       this.router.navigate(['products/create']);
    //     }
    //   },
    //   (error : any)=> {
    //     if (error) {
    //       if (error.status == 400) {
    //         const errors = error.error.product;
    //         // this.openSnackBar('An Error occurred while trying to create the product. Try again later');
    //         this.modalMessage(errors);
    //       }
    //     }
    //   });
  }

  addMaterial(){
    // this.materiales.push(1);
    // //Update what ever the formcontrol you want here as per requirement
    // this.form.patchValue({
    //   materials: function (){
    //     let temp = "",
    //       this.materials.forEach(index,value){
    //       temp += value;
    //     }
    //     return temp;
    //   }
    // });

  }
  removeMaterial(){
    // this.materiales.pop();
    // //Update what ever the formcontrol you want here as per requirement
    // this.form.patchValue({
    //   materials: this.materials
    // });
  }

  addPerson() {

  }

  deletePerson() {

  }
}
