import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-section',
  standalone: false,
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  formData = {
      nombre: '',
      email: '',
      empresa: '',
      descripcion: ''
    };

  enviarEmail() {
    const templateParams = {
      from_name: this.formData.nombre,
      email: this.formData.email, 
      empresa: this.formData.empresa,
      message: this.formData.descripcion,
      subject: 'PORTFOLIO-EMPRESA'
    };

    emailjs.send('service_rqgmzck', 'template_6c2qbdj', templateParams, 'gKNWiqo4D4fkOO-1L')
      .then(response => {
        console.log('Email enviado', response.status, response.text);
        alert('Correo enviado correctamente');
        this.formData = { nombre: '', email: '', empresa: '', descripcion: '' }; // reset form
      }, error => {
        console.error('Error al enviar email', error);
        alert('Error al enviar el correo. Intente de nuevo.');
      });
  }
}
