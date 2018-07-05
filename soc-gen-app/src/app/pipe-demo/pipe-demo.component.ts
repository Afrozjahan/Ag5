import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  todos: any = [{
    label: "Some work one",
    status: "pending"
  },
  {
    label: "Some work two",
    status: "done"
  },
  {
    label: "Some work three",
    status: "done"
  },
  {
    label: "Some work four",
    status: "pending"
  },
  {
    label: "Some work five",
    status: "pending"
  },
  {
    label: "Some work six",
    status: "done"
  }

  ]
  contact_no: number = 987654321;
  filteredStatus: string = "";
  data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here comes the data !");
    }, 2000);
  })
  addTodo() {
    this.todos.push({
      label: "new todo work",
      status: "pending"
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
