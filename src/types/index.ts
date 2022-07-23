export interface Task {
  id: number,
  name: string,
  desc: string,
  done: boolean,
  createdDate: Date,
  completedDate: Date | null
}

export interface RepeatableTask {
  id: number,
  name: string,
  desc: string,
  createdDate: Date,
  completedDates: Date[] | null
}