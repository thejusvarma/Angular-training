import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit{

  agents : Observable<string> | undefined;
  agentname:string;
  constructor(){
    this.agentname = '';
  }

  ngOnInit(): void {
    
  this.agents = new Observable<string>(
    function(observer)
    {
        try
        {
            observer.next('Ram');
            setInterval(()=>
            {
              observer.next('Laxman');
            },4000
            )
            setInterval(()=>
            {
              observer.next('Sita');
            },8000
            )
  
        }
        catch(e){
            observer.error(e);
        }
    }
  )

  this.agents.subscribe(data => {
        this.agentname = data;

      }
    )
  }
}
