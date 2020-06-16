import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isview = false;
isLoading = false;
public count = 0;
divisor: number;
form: NgForm;
final: number;
constructor(private dialog: MatDialog){}
ngOninit(){

    }
    onSubmit(form: NgForm){
      this.isview = true;
      this.isLoading = false;
      this.form = form;
      const evalue = form.value.Startend;
      // console.log(evalue);
      const Enumber = evalue.split(' ').map(Number);
     // console.log(Enumber);
      const check = Enumber.every(function(element) {
         if (Number.isNaN(element)){
          return false;
         }

        else{
          return true;
        }
        });
     // console.log(check);
      if (!check)
        {
          this.dialog.open(ErrorComponent);

        }
      else{
      this.divisor = Enumber[2];
     // console.log(this.divisor);
      for (let i = Enumber[0]; i <= Enumber[1]; i++)
            {
        // console.log('original :', i);

        this.final = this.rev_day(i);
            }
           }
        }

    rev_day(n)
    {

        n = n + '';
        const revval = n.split('').reverse().join('');
        const absval = Math.abs(n - revval);
        // console.log('reverse:', revval);
        // console.log('differnce:', absval);
        if ((absval % this.divisor) == 0)
      {
        this.count = this.count + 1;
      }
      //  console.log('days', this.count);

        return this.count;
    }

    Destroy(){
     this.isview = false;
     this.form.reset();
     this.count = 0;
     this.final = 0;
     this.isLoading = false;
    }

    }
