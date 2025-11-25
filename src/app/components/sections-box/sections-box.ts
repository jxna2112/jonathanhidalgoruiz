import { Component } from '@angular/core';

@Component({
  selector: 'app-sections-box',
  standalone: false,
  templateUrl: './sections-box.html',
  styleUrl: './sections-box.scss',
})
export class SectionsBox {

  sectionProjects: boolean = true;
  sectionExperience: boolean = false;

  mostrarSeccionProjects() {
    this.sectionProjects = true;
    this.sectionExperience = false;
  }

  mostrarSeccionExperience() {
    this.sectionProjects = false;
    this.sectionExperience = true;
  }

}
