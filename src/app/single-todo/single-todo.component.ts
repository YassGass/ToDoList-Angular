
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
todo: any;
error:any;
  constructor( private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.todo = this.todoService.getTodo(+id);
    if(!this.todo){
      this.error = "identifiant incorrect";
    }
  }



}
