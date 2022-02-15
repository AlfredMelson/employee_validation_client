import { IEmployee } from '../services/getEmployees'

const differenceInDates = {
  inDays: (d1: Date, d2: Date) => (d2.getTime() - d1.getTime()) / (24 * 3600 * 1000)
}

const oldPassword = (item: IEmployee) => {
  const currentDate = new Date()
  const creationDate = new Date(item.createdAt)

  return differenceInDates.inDays(creationDate, currentDate) > 30
}

export default oldPassword
