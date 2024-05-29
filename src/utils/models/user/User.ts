export interface IUser{
  id: string,
  email: string,
  lastName: string | null,
  middleName: string | null,
  firstName: string | null,
  phone: string | null,
  subscriptions: [],
  applicationState: null,
  isStaff: boolean,
  isSuperuser: boolean,
  isGuest: boolean
}