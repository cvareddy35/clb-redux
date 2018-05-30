const state = {
  todos: [
    {
      id: 1,
      text: 'Learn React.js'
    },
    {
      id: 2,
      text: 'Go to Gym'
    },
    {
      id: 3,
      text: 'Learn djembes'
    }
  ]
};

const result = state.todos.map(todo => '<h1></h1>');

console.log(result);