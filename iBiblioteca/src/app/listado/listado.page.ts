import { Component, OnInit } from '@angular/core';
import { Libros, Doc } from './libro.interface';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ListadoService } from './listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  busca: string = '';

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private listadoDeLibros : ListadoService, private scanner: BarcodeScanner) { 

    this.encodedData = "Programming is about what you know";

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

    ngOnInit() {
    }

    listado: Doc[] = [];
    /*
    listadoLibros(){
      this.listadoDeLibros.loadAPI()
      .subscribe(resp => {
        this.listado = resp.docs;
      },error => {
        console.log(error);
      })

    }*/
    listadoLibros(event){
      this.busca = event.detail.value;
      this.listadoDeLibros.loadLibro(this.busca).subscribe({
        next: data => { this.listado = data.docs; console.log(data)},
        error: error =>{ console.log(error)}
      })
    }

    scanBRcode() {

      this.scanner.scan().then(resp => {
        this.scannedBarCode = resp;
      }).catch(err => {
        alert(err);
      })

    }

}