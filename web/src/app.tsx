import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";

import logo from "./assets/in-orbit-log.svg";
import letStart from "./assets/rocket-launch-illustration.svg";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhum meta, que tal cadastrar uma agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  );
}
