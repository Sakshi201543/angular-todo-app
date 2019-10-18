export class Init{
  
  load(){
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined || localStorage.getItem('todos') === ''){
        console.log("No todos Found...Created...");
        var todos = [
         {
           text: "Meeting"
         },
         {
           text: "Working on Projects"
         }
        ];

        localStorage.setItem('todos', JSON.stringify(todos));
        return;
    }
    else{
      console.log("Found Todos...");
    }
  }
}