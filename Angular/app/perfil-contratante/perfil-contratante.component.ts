import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-contratante',
  templateUrl: './perfil-contratante.component.html',
  styleUrls: ['./perfil-contratante.component.css']
})
export class PerfilContratanteComponent implements OnInit {

  nome = "Felipe Venceslau"
  sobre = "Meu nome é Felipe Venceslau, sou de Acopiara/CE mas estou morando atualmente em Quixadá/CE. Sou acadêmico de Design Digital, na Universidade Federal de Quixadá - Campus Quixadá."
  idade = "19"
  endereco = "Rua Dr. Rui Maia, 633"
  constructor() { }

  ngOnInit() {
  }

}
