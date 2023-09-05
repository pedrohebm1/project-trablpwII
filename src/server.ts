import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';
const app = fastify();

const prisma = new PrismaClient();

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})

app.get('/students', async () => {
    const students = await prisma.students.findMany()

    return students
})

app.get('/teachers', async () => {
    const teachers = await prisma.teachers.findMany()

    return teachers
})

app.get('/subjects', async () => {
    const subjects = await prisma.subjects.findMany()

    return subjects
})