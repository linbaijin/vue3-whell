export const cloneDate = (date: Date | string) => {
  if (date instanceof String) {
    return new Date(date)
  }
  if (date instanceof Date) {
    return new Date(date.getTime())
  }
}

export const getYearMonthDay = (date: Date) => {
  return [date.getFullYear(), date.getMonth(), date.getDate()]
}

export const getCurrentMonthLastDay = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

export const getPreMonthLastDay = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}
