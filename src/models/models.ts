export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}
