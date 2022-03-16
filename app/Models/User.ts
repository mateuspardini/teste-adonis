import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Note from './Note'
import { v4 as uuid } from 'uuid'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static async createUUID (model: User) {
    model.id = uuid()
  }

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Note, {
    foreignKey: 'user_id'
  })
  public note: HasMany<typeof Note>
}
