import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('solicitada nova transferencia');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparValores();
  }

  limparValores() {
    this.valor = null;
    this.destino = null;
  }
}
