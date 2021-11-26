import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
today: Date | any;
todos : any;

  constructor(private todoService: TodoService, private router:Router) { }

  ngOnInit(){
    this.today= this.todoService.today;
    this.todos= this.todoService.todos
    .then((todoRecup: any)=>{
      this.todos = todoRecup;
    })
    .catch((error: any)=>{
      console.log("Erreur: " + error);
    });
  }

onChangeStatus(i:number){
  this.todoService.onChangeStatus(i);
}

onChangeModif(i:number){
  this.todoService.onChangeModif(i);
}

onView(id: number){
  this.router.navigate(["single-todo",id])
}

}
