import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import { z } from "zod"
import dayjs from "dayjs"
export async function appRoutes(app : FastifyInstance){
    /* app.get('/hello',async ()=>{
        const habits = await prisma.habit.findMany({
            where: {
                title: {
                    startsWith: 'Beber'
                }
            }
        })
        return habits
    }) */
    app.post('/habits',async (request)=>{
        const   createHabitBody = z.object({
            title: z.string(),
            //title: z.string().nullable quando não for obrigatório, podendo ser nulo,
            weekDays: z.array(z.number().min(0).max(6))
        })
        const {title,weekDays} = createHabitBody.parse(request.body)

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data:{
                title,
                created_at: today,//data atual
                weekDays:{
                    create: weekDays.map(weekDay=>{
                        return {
                            week_day:weekDay,
                        }
                    })
                }
            }
        })
    })

    app.get('/day', async(request) =>{
        const getDayParams = z.object({
            date: z.coerce.date()
        })
        const {date} = getDayParams.parse(request.query)
        const parsedDate = dayjs(date).startOf('day')
        const weekDay = parsedDate.get('day')

        console.log(date, weekDay)

        const possibleHabits = await prisma.habit.findMany({
            where:{
                created_at:{
                    lte: date,
                },
                weekDays:{
                    some:{
                        week_day: weekDay
                    }
                }
            },
            
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate(),//convertendo em data
            },
            include:{
                dayHabits:true,
            }
        })
        const completedHabits = day?.dayHabits.map(dayHbits =>{
            return dayHbits.habit_id
        })
        return{
            possibleHabits,
            completedHabits,
        }
    })
}

