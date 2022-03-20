import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UserValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({ trim: true }, [rules.minLength(8)]),
  })

  public messages = {
    required: 'Digite um {{field}}',
    email: 'Insira um email válido',
    minLength: 'Insira {{options.minLength}} digitos em {{field}}',
  }
}
export class UserValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    password: schema.string.optional({ trim: true }, [rules.minLength(8)]),
  })

  public messages = {
    email: 'Insira um email válido',
    minLength: 'Insira {{options.minLength}} digitos em {{field}}',
  }
}
