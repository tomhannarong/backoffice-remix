import { json } from "@remix-run/node";
import { TRACKING_ERROR } from "~/constants/tracking-error";

interface IGistsService {
  getgists(): Promise<any>;
}
export class GistsService implements IGistsService {
  private config?: any;
  constructor(config?: any) {
    this.config = config || "";
  }

  public async getgists(): Promise<any> {
    const response = await fetch(`https://api.github.com/gists`);
    if (!response.ok) {
      const error = await response.json();
      throw json(
        { ...error, TrackingError: TRACKING_ERROR.GISTS_SERVICE },
        {
          status: response.status,
          statusText: response.statusText,
        }
      );
    }
    return response.json();
  }
}
