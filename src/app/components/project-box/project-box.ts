import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-box',
  standalone: false,
  templateUrl: './project-box.html',
  styleUrl: './project-box.scss',
})
export class ProjectBox {

  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() enlace!: string;

}
