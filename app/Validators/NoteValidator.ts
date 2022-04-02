import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class NoteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    note: schema.string({ trim: true }),
    user_id: schema.string({ trim: true }),
  })

  public messages = {
    required: '{{ field }} is required',
    string: '{{ field }} must be a string',
  }
}
export class NoteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional({ trim: true }),
    note: schema.string.optional({ trim: true }),
  })

  public messages = {
    string: '{{ field }} must be a string',
  }
}
