import { Component } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  CartasAcciones = [
    {
      title: 'Consultar saldo',
      description: 'Consulta el saldo de tu cuenta de ahorros de una manera fácil y rápida.',
      image: '/assets/Img1.png',
      modalId: '1'
    },
    {
      title: 'Consultar transacciones',
      description: 'Consulta el historial de transacciones de tu cuenta de ahorros.',
      image: '/assets/Img4.png',
      modalId: '7'
    },
    {
      title: 'Retiro de Cajero',
      description: 'Retira en cualquier cajero automático de la red de cajeros automáticos.',
      image: '/assets/Img2.png',
           modalId: '3'
    },
    {
      title: 'Compra fisica',
      description: 'Paga en cualquier comercio afiliado a la red de comercios.',
      image: '/assets/Img2.png',
     
      modalId: '5'
    },
    {
      title: 'Deposito otra cuenta',
      description: 'Desde nuestra app puedes realizar depósitos a otras cuentas de una manera fácil y rápida.',
      image: '/assets/Img2.png',
     
      modalId: '6'
    },
    {
      title: 'Compra Web',
      description: 'Realiza comprar de manera fácil y rápida desde la comodidad de tu hogar.',
      image: '/assets/Img1.png',
    
      modalId: '4'
    },
    {
      title: 'Deposito Cajero',
      description: 'Ahora puedes realizar depósitos en cualquier cajero automático de la red de cajeros automáticos.',
      image: '/assets/Img2.png',
      
      modalId: '8'
    },
    {
      title: 'Depósito sucursal',
      description: 'Deposita en cualquiera de nuestras sucursales a nivel nacional fácil y sin filas.',
      image: '/assets/Img2.png',
      
      modalId: '2'
    },
  ];

}
