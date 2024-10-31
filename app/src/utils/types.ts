export interface IProject {
  name: string
  url: string
  userId: string
  createdAt: Date
  updatedAt: Date
  __v: string
  _id: string
}

export interface IVisit {
  projectId: string
  userAgent: string
  ip: string
  href: string
  screenSize: string
  timestamp: Date
  number: number
}
