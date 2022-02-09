import { Component, OnInit } from '@angular/core';
import { Doc } from './libro.service';
import { LibroService } from './listado.interface';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private libroService : LibroService, private scanner: BarcodeScanner) { 

    this.encodedData = "Programming is about what you know";

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

    ngOnInit(): void {
        this.listadoLibros();
    }

    listado: Doc[] = [];

    listadoLibros(){
      this.libroService.loadAPI()
      .subscribe(resp => {
        this.listado = resp.docs;
      },error => {
        console.log(error);
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