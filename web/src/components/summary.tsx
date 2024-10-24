import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progess-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

const style = { width: '10%'}

export function Summary() {
    return (
        <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <InOrbitIcon />
                    <span className="text-lg font-semibold">20 a 26 de Novembro</span>
                </div>

                <DialogTrigger asChild>
                    <Button size="sm">
                        <Plus className="size-4" />
                        Cadastrar meta
                    </Button>
                </DialogTrigger>
            </div>

            <div className="flex flex-col gap-3">
                <Progress value={0} max={10}>
                    <ProgressIndicator style={style} />
                </Progress>

                <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Você completou <span className="text-zinc-100">1</span> de <span className="text-zinc-100">10</span> metas.</span>
                    <span>10%</span>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-3">
                    <OutlineButton>
                        <Plus className="size-4 text-zinc-600" />
                        Meditar
                    </OutlineButton>
                    
                    <OutlineButton>
                        <Plus className="size-4 text-zinc-600" />
                        Treinar
                    </OutlineButton>

                    <OutlineButton>
                        <Plus className="size-4 text-zinc-600" />
                        Nadar
                    </OutlineButton>
                </div>

                <div className="flex flex-col gap-6">
                    <h2 className="text-xl font-medium">Sua semana</h2>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium">Domingo{' '} 
                            <span className="text-zinc-400 text-xs">(20 de Outubro)</span>
                        </h3>

                        <ul className="flex flex-col gap-3">
                        </ul>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="size-4 text-pink-500" />
                                <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:01h</span></span>
                                <span className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 underline">Desfazer</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="size-4 text-pink-500" />
                                <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:01h</span></span>
                                <span className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 underline">Desfazer</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="size-4 text-pink-500" />
                                <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:01h</span></span>
                                <span className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 underline">Desfazer</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="size-4 text-pink-500" />
                                <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:01h</span></span>
                                <span className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 underline">Desfazer</span>
                            </li>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium">Segunda{' '} 
                            <span className="text-zinc-400 text-xs">(21 de Outubro)</span>
                        </h3>

                        <ul className="flex flex-col gap-3">
                        </ul>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="size-4 text-pink-500" />
                                <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">Meditar</span>" às <span className="text-zinc-100">05:30h</span></span>
                                <span className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-100 underline">Desfazer</span>
                            </li>
                    </div>
                </div>
            </div>
        </div>
    )
}