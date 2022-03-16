import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { v4 as uuid } from 'uuid'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: string
  
  @beforeCreate()
  public static async createUUID (model:Note){
    model.id = uuid()
  }
  
  @column()
  public title: string

  @column()
  public note: string

  @column()
  public user_id: string

  @belongsTo(() => User, {
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
