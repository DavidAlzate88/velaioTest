import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  constructor(private formBuilder: FormBuilder) {
  }

  taskForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    dueDate: ['', [Validators.required]],
    assignedTo: this.formBuilder.array([
      this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(5)], this.validateUniqueName.bind(this)],
        age: ['', [Validators.required, Validators.min(18)]],
        skills: this.formBuilder.array([
          this.formBuilder.group({
            skill: '',
          })
        ])
      })
    ]),
  });

  person(): FormArray {
    return this.taskForm.get('assignedTo') as FormArray;
  }

  newPerson(): FormGroup {
    return this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)], this.validateUniqueName.bind(this)],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.formBuilder.array([
      this.formBuilder.group({
        skill: '',
      })
    ])
    });
  }

  addPerson(): void {
    this.person().push(this.newPerson());
  }

  removePerson(index: number): void {
    this.person().removeAt(index)
  }

  personSkills(index: number): FormArray {
    return this.person()
      .at(index)
      .get('skills') as FormArray;
  }

  newPersonSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
    });
  }

  addPersonSkill(personIndex: number) {
    return this.personSkills(personIndex).push(this.newPersonSkill());
  }

  removePersonSkill(personIndex: number, skillIndex: number) {
    if (this.personSkills(personIndex).length > 1) {
      this.personSkills(personIndex).removeAt(skillIndex);
    }
  }

  validateUniqueName(control: AbstractControl): Observable<ValidationErrors | null> {
    const name = control.value;
    const personControls = this.person().controls;

    for (const personControl of personControls) {
      if (personControl.value.fullName === name) {
        return of({uniqueName: true}); // Error de validación
      }
    }

    return of(null); // Validación exitosa
  }

  onSubmit() {
    console.warn(this.taskForm.value);
  }
}
