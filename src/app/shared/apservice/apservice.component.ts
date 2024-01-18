import { Component } from '@angular/core';
import { TransferService } from 'src/app/transfer.service';

@Component({
  selector: 'app-apservice',
  templateUrl: './apservice.component.html',
  styleUrls: ['./apservice.component.css']
})
export class ApserviceComponent {
data:any;

constructor(private transfer:TransferService){

}

get(){
  this.transfer.getData().subscribe(res=>{
    this.data=res;
    console.log(this.data);
  })
}

}
