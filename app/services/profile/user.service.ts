import { json } from "@remix-run/node";
import { TRACKING_ERROR } from "~/constants/tracking-error";
import { IUserResponse } from "~/models/user.model";

interface IUserService {
  getUsers(): Promise<Array<IUserResponse>>;
  getUserById(userId: string): Promise<IUserResponse>;
}
export class UserService implements IUserService {
  private config?: any;
  constructor(config?: any) {
    this.config = config || "";
  }

  public async getUsers(): Promise<Array<IUserResponse>> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      const error = await response.json();
      throw json(
        {
          ...error,
          TrackingError: `${TRACKING_ERROR.PROFILE_SERVICE} > getUsers > "/users"`,
        },
        {
          status: response.status,
          statusText: response.statusText,
        }
      );
    }
    return response.json();
  }

  public async getUserById(userId: string): Promise<IUserResponse> {
    let response;
    response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      const error = await response.json();
      throw json(
        {
          ...error,
          TrackingError: `${TRACKING_ERROR.PROFILE_SERVICE} > getUserById > "/users/${userId}"`,
        },
        {
          status: response.status,
          statusText: response.statusText,
        }
      );
    }
    return response.json();
  }
}
