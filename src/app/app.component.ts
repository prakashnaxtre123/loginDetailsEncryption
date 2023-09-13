import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  unixTimestamp = 1631361595; // Replace with your timestamp
  //constructor(private datePipe: DatePipe){}
  constructor(private datePipe: DatePipe,private encryptionService: EncryptionService) {}

  login(username: string, password: string): void {
    const encryptedLoginDetails = this.encryptionService.encrypt(
      JSON.stringify({ username, password })
    );
    localStorage.setItem('encryptedLoginDetails', encryptedLoginDetails);
  }

ngOnInit(): void {
  //this.login("prakash","test")
  let d: any = localStorage.getItem("encryptedLoginDetails")
 const data =  JSON.parse(this.encryptionService.decrypt(d))
 console.log(data)
  // Format the date using the DatePipe
  // const formattedDate = this.datePipe.transform(new Date(this.unixTimestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
  // console.log(formattedDate);
  
}

}
