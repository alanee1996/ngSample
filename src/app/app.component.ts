import { Component,OnInit } from '@angular/core';
import { MyappService } from '../app/myapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  public text:string;


  constructor(private service: MyappService){

  }

  ngOnInit(){
    this.text = "Hello World";
    this.run();
  }

  public async run(){
   this.text = (await this.service.get().toPromise())[0].summary;
  }
}
