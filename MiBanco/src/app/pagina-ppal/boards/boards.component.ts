import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransaccionesService } from 'src/app/servicios/transacciones.service';
declare var bootstrap: any;

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  private urlconsultasaldo = 'http://localhost:8080/cuenta/saldo/1';
  saldoActual: number = 0;
  private urlconsultahistorial = 'http://localhost:8080/cuenta/transacciones/1';
  historialsaldo: any;
  private urldepositosucursal = 'http://localhost:8080/cuenta/deposito/sucursal/1';
  private urlretirocajero = 'http://localhost:8080/cuenta/retiro/cajero/1';
  private urlcompraweb = 'http://localhost:8080/cuenta/compra/web/1';
  private urlcomprafisica = 'http://localhost:8080/cuenta/compra/fisica/1';
  private urldepositootracuenta  = 'http://localhost:8080/cuenta/deposito/otra/1'
  private urldepositocajero = 'http://localhost:8080/cuenta/deposito/cajero/1'

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
      description: 'Retira en cualquier cajero automático.',
      image: '/assets/Img2.png',
      modalId: '3'
    },
    {
      title: 'Compra fisica',
      description: 'Paga en cualquier comercio afiliado a la red de comercios.',
      image: '/assets/Img6.png',

      modalId: '5'
    },
    {
      title: 'Deposito otra cuenta',
      description: 'Desde nuestra app puedes realizar depósitos a otras cuentas de una manera fácil y rápida.',
      image: '/assets/Img7.png',

      modalId: '6'
    },
    {
      title: 'Compra Web',
      description: 'Realiza comprar de manera fácil y rápida.',
      image: '/assets/Img9.png',

      modalId: '4'
    },
    {
      title: 'Deposito Cajero',
      description: 'Ahora puedes realizar depósitos en cualquier cajero automático de la red de cajeros automáticos.',
      image: '/assets/Img8.png',

      modalId: '8'
    },
    {
      title: 'Depósito sucursal',
      description: 'Deposita en cualquiera de nuestras sucursales a nivel nacional fácil y sin filas.',
      image: '/assets/Img10.png',

      modalId: '2'
    },
  ];

  constructor(private TransaccionesService: TransaccionesService, private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.initformDepositoSucursal();
    this.initformRetiroCajero();
    this.initformCompraWeb();
    this.initformCompraFisica();
    this.initformDepositoOtraCuenta();
    this.initformDepositoCajero();

  }

  modal!: any;
  formDepositoSucursal: FormGroup = new FormGroup({})
  formRetiroCajero: FormGroup = new FormGroup({})
  formCompraWeb: FormGroup = new FormGroup({})
  formCompraFisica: FormGroup = new FormGroup({})
  formDepositoOtraCuenta: FormGroup = new FormGroup({})
  formDepositoCajero: FormGroup = new FormGroup({})


  openModalById(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  initformDepositoSucursal(): void {
    this.formDepositoSucursal = this.fb.group({
      montodepositar: [''],
    });
  }

  initformRetiroCajero(): void {
    this.formRetiroCajero = this.fb.group({
      montoretirar: [''],
    });
  }

  initformCompraWeb(): void {
    this.formCompraWeb = this.fb.group({
      montoweb: [''],
    });
  }

  initformCompraFisica(): void {
    this.formCompraFisica = this.fb.group({
      montofisica: [''],
    });
  }

  initformDepositoOtraCuenta  (): void {
    this.formDepositoOtraCuenta = this.fb.group({
      montootracta: [''],
    });
  }

  initformDepositoCajero  (): void {
    this.formDepositoCajero = this.fb.group({
      montocajero: [''],
    });
  }
 
  postDepositoSucursal(): void {
    this.TransaccionesService.postDepositoSucursal(this.urldepositosucursal, this.formDepositoSucursal.value.montodepositar).subscribe({
      next: (response) => {
        this.saldoActual = response;
      },
      error: (err) => {
        this.closeModal();
      },
    })
  }

  // Crear el metodo de los servicios
  getConsultaSaldo(urlconsultasaldo: string): void {
    this.TransaccionesService.obtenerSaldo(urlconsultasaldo).subscribe({
      next: (data) => {
        console.log('Respuesta del servidor: actualizado', data);
        this.saldoActual = data;
      },
      error: (err) => {
        console.error('Error al consumir el servicio:', err);
      },
    })

  }

  getConsultaHistorial(urlconsultahistorial: string): void {
    this.TransaccionesService.obtenerSaldo(urlconsultahistorial).subscribe({
      next: (data) => {
        console.log('Respuesta del servidor: actualizado', data);
        this.historialsaldo = data;

      },
      error: (err) => {
        console.error('Error al consumir el servicio:', err);
      },
    })

  }

  postBotonDepositoSucursal(): void {
    this.postDepositoSucursal(
   
    );
    this.formDepositoSucursal.reset();
    this.closeModal();
    this.openModalById('1');
  }

  //metodo retiro CAjero

  
  postRetiroCajero(): void {
    this.TransaccionesService.postDepositoSucursal(this.urlretirocajero, this.formRetiroCajero.value.montoretirar).subscribe({
      next: (response) => {
        this.saldoActual = response;
      },
      error: (err) => {
        this.closeModal();
      },
    })
  }

  postBotonRetiroCajero(): void {
    this.postRetiroCajero(
   
    );
    this.formRetiroCajero.reset();
    this.closeModal();
    this.openModalById('1');
  }

  // Compra Web-boton

  postBotonCompraWeb(): void {
    this.postCompraWeb();
    this.formCompraWeb.reset();
    this.closeModal();
    this.openModalById('1');
  }

  postCompraWeb(): void {
    this.TransaccionesService.postDepositoSucursal(this.urlcompraweb, this.formCompraWeb.value.montoweb).subscribe({
      next: (response) => {
        this.saldoActual = response;
      },
      error: (err) => {
        this.closeModal();
      },
    })
  }
  //

  // Compra Fisica

postBotonCompraFisica(): void {
  this.postCompraFisica();
  this.formCompraFisica.reset();
  this.closeModal();
  this.openModalById('1');
}

postCompraFisica(): void {
  this.TransaccionesService.postDepositoSucursal(this.urlcomprafisica, this.formCompraFisica.value.montofisica).subscribe({
    next: (response) => {
      this.saldoActual = response;
    },
    error: (err) => {
      this.closeModal();
    },
  })
}

///
postBotonDepositoOtraCta(): void {
  this.postDepositoOtraCta();
  this.formDepositoOtraCuenta.reset();
  this.closeModal();
  this.openModalById('1');
}

postDepositoOtraCta(): void {  
   this.TransaccionesService.postDepositoSucursal(this.urldepositootracuenta, this.formDepositoOtraCuenta.value.montootracta).subscribe({
    next: (response) => {
      this.saldoActual = response;
    },
    error: (err) => {
      this.closeModal();
    },
  })
}

// Depostio Cajeto

postBotonDepositoCajero(): void {
  this.postDepositoCajero();
  this.formDepositoCajero.reset();
  this.closeModal();
  this.openModalById('1');
}

postDepositoCajero(): void {  
   this.TransaccionesService.postDepositoSucursal(this.urldepositocajero, this.formDepositoCajero.value.montocajero).subscribe({
    next: (response) => {
      this.saldoActual = response;
    },
    error: (err) => {
      this.closeModal();
    },
  })
}

  showMenuForId(modalId: string): void {
    if (modalId === "1") {
      this.getConsultaSaldo(this.urlconsultasaldo);
      this.openModalById(modalId);
    } else if (modalId === "2") {
      console.log(this.formDepositoSucursal.value);
      this.openModalById(modalId);
    } else if (modalId === "3") {
      this.openModalById(modalId);
    } else if (modalId === "4") {
      this.openModalById(modalId);
    } else if (modalId === "5") {
      this.openModalById(modalId);
    } else if (modalId === "6") {
      this.openModalById(modalId);
    } else if (modalId === "7") {
      this.getConsultaHistorial(this.urlconsultahistorial)
      this.openModalById(modalId);
    } else if (modalId === "8") {
      this.openModalById(modalId);
    }

  }

  closeModal(): void {
    if (this.modal) {
      this.modal.hide();
    }
  }

}
