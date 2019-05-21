import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-anunciante',
  templateUrl: './perfil-anunciante.component.html',
  styleUrls: ['./perfil-anunciante.component.css']
})
export class PerfilAnuncianteComponent implements OnInit {

  nome = "Canaã Bolos e Salgados Caseiros";
  sobre = "Somos um estabelecimento que produz todos os tipos de bolos. Bolos ornamentais, bolos personalizados, bolos simples, entre outros.";
  endereco = "Rua Estados Unidos, 873 - Quixadá/CE";

  categoria1 = "Comes e Bebes";
  subcategoria1 = "Bolo Confeitado";
  dataCriado1 = "18/03/2019";

  categoria2 = "Comes e Bebes";
  subcategoria2 = "Cento de Salgados";
  dataCriado2 = "19/03/2019";

  categoria3 = "Comes e Bebes";
  subcategoria3 = "Pão de Queijo";
  dataCriado3 = "19/03/2019";

  constructor() { }

  ngOnInit() {
  }

}
