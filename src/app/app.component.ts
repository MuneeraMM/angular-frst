import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
            // public title = 'AizaMahrish';
    // public str=""
  public count=0
  // public evenodd="even"

  public fruits = [
    {"name":"orange","price":100},
    {"name":"apple","price":200},
    {"name":"mango","price":300},
    {"name":"banana","price":200},
  ]
  
  
  ngOnIt(){}
            // data = {
            //   // tech1 : "angular",
            //   // tech2 : "nodejs",
            //   // programlanguage : "python"
            // }

    // mrnng(){
    //   this.str = "Good morning";
    // }
    // afternoon(){
    //   this.str = "Good afternoon";
    // }
      // increment(){
      //   this.count = this.count + 1;
      // }
      // decrement(){
      //   this.count = this.count-1;
      // }
//   increment(){
//     this.count = this.count + 1;
//     if (this.count % 2 == 0){
//       this.evenodd = "even"
//     }
//     else
//       this.evenodd = "odd"
//   }
//   decrement(){
//     this.count = this.count-1;
//     if (this.count % 2 == 0){
//       this.evenodd = "even"
//     }
//     else
//       this.evenodd = "odd"
//   }
 }

