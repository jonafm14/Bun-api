import { Elysia } from 'elysia'
import { usersModule } from './modules/users'
import { initDB } from './config/mongo'

const run = async () => {
	await initDB()

	const app = new Elysia()
	.use(usersModule)
	
	.get('/', () => 'ROOT')
	.listen(8080)
	console.log(`🦊 Elysia is running at on port ${app?.server?.port}...`)

}

run()