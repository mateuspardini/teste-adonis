import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'
import { UserValidatorStore, UserValidatorUpdate } from 'App/Validators/UserValidator'

export default class UsersController {
  public async index() {
    const user = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const validateData = await request.validate(UserValidatorStore)

    const name = validateData.name
    const email = validateData.email
    const password = validateData.password

    const user = await User.create({
      name,
      email,
      password,
    })
    return user
  }

  public async update({ params, request }) {
    const id = request.param('id')
    if (!id) return
    const validateData = await request.validate(UserValidatorUpdate)

    const user = await User.findOrFail(params.id)

    user.merge(limpaCamposNulosDeObjeto(validateData))
    await user.save()

    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const user = await User.findOrFail(id)
    await user.delete()

    return user
  }
}
