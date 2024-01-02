import { app } from 'electron'
import path from 'path'

import { DataTypes, Sequelize } from 'sequelize'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(app.getPath('userData'), 'database.sqlite')
})
console.log(path.resolve(app.getPath('appData'), 'database.sqlite'));

const Client = sequelize.define('client', {
  code: DataTypes.STRING,
  name: DataTypes.STRING,
  last_name: DataTypes.STRING,
})

Client.sync()

export { sequelize, Client }
