import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note';


export default class NotesController {
async index() {
  const note = await Note.all();
  
  return note;
}

  public async store({ request }: HttpContextContract) {
    const title = request.input('title')
    const note = request.input('note')
    const user_id = request.input('user_id')
    
    const noteData = await Note.create({
      title,
      note,
      user_id
    })
    return noteData
  }

  public async update({ params, request }) {
    const note = await Note.findOrFail(params.id);
    const data = request.only(["title", "note","user_id"]);
    
    note.merge(data);
    await note.save();
    
    return note
}

  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const note = await Note.findOrFail(id)
    await note.delete()

    return note
  }
}
