import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'
import { schema } from '@ioc:Adonis/Core/Validator'
import { NoteValidatorStore, NoteValidatorUpdate } from 'App/Validators/NoteValidator'

export default class NotesController {
  public async index() {
    const note = await Note.all()

    return note
  }

  public async store({ request }: HttpContextContract) {
    const validateData = await request.validate(NoteValidatorStore)

    const { title, note } = validateData

    const noteModel = await Note.create({
      title,
      note,
    })
    return noteModel
  }

  public async update({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const validateData = await request.validate(NoteValidatorUpdate)

    const note = await Note.findOrFail(id)
    note.merge(limpaCamposNulosDeObjeto(validateData))
    await note.save()

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
