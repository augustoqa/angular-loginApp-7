import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'checha@gmail.com';
  }

  onSubmit( form: NgForm ) {
    if ( form.invalid ) { return; }
    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(form);
    
  }

}
