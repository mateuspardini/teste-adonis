
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Users
Route.get('/users', 'UsersController.index')
Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.destroy')

//Notes
Route.get('/notes', 'NotesController.index')
Route.post('/notes', 'NotesController.store')
Route.put('/notes/:id', 'NotesController.update')
Route.delete('/notes/:id', 'NotesController.destroy')
