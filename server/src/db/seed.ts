import { db } from "."
import { goalCompletions, goals } from "./schema"

async function seed() {
    await db.delete(goalCompletions)
    await db.delete(goals)

    await db.insert(goals).values([
        { title: 'Acordar cedo', desiredWeeklyFrequency: 3 },
        { title: 'Estudar', desiredWeeklyFrequency: 2 },
        { title: 'Caminhar', desiredWeeklyFrequency: 2 },
        { title: 'Ler', desiredWeeklyFrequency: 1 },
        { title: 'Fazer compras', desiredWeeklyFrequency: 1 },
    ])
}

seed()