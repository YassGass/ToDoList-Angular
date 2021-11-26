import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo1: string = "projet 1";// nos variable dynamique donnée
  todo2: string = "projet 2";
  todo3: string = "projet 3";
  todo4: string = "projet 4";
  todos: any;
  todoSlice: any;
  today = new Date();


  constructor() {
    this.todos = new Promise((resolve, reject)=>{
      const todoRecup = [ //notre liste parametrer en donné dynamique
        {
          todoName:'projet1',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."
        },
        {
          todoName:'projet2',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."

        },
        {
          todoName:'projet3',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."

        }
      ];
      if (todoRecup.length){
        setTimeout(()=>{
          this.todoSlice = todoRecup;
          resolve(todoRecup);
        },2000);
      }else{
        reject("Pas de données distant");
      }
    });
   /* setTimeout(() => {
      this.todos= [ //notre liste parametrer en donné dynamique
        {
          todoName:'projet1',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."
        },
        {
          todoName:'projet2',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."

        },
        {
          todoName:'projet3',
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif :false,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sed eros aliquam lacinia id id enim."

        }
      ];
    }, 3000);*/
   }

  //event biding
    onChangeStatus(i:number){
      this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus;
    }


    onChangeModif(i:number){
      this.todoSlice[i].isModif = !this.todoSlice[i].isModif;
    }

    getTodo(index:number){
      if(this.todoSlice[index]){
        return this.todoSlice[index];
      }
      return false;
    }


}
