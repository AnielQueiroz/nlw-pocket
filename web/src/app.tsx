import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { useState } from "react";
// import { EmptyGoals } from "./components/empty-goals";

export function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  fetch('http://localhost:3333/summary').then(response => {
    response.json().then(data => {
      console.log(data)
    })
  })

  return (
    <Dialog>
      <button onClick={increment} type="button">Incrementar</button>
      <h1 className="text-4xl">{count}</h1>

      {/* <EmptyGoals /> */}

      {/* <Summary /> */}
      <CreateGoal />
    </Dialog>
  );
}
