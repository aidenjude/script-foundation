import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface ToDO {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as ToDO;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  console.log(`
  The id is ${id}
  and the title is ${title}
  and ${completed}
  `);
});
