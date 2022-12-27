export interface IActivityResponse {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}
export enum IActivityType {
  busywork,
  social,
  cooking,
  recreational,
  education,
}

export async function getActivity(): Promise<IActivityResponse> {
  const response = await fetch(`https://www.boredapi.com/api/activity`);

  if (!response.ok) throw new Error("Activity suggestions not found");
  return response.json();
}

export async function getActivityByType(
  type: string
): Promise<IActivityResponse> {
  const response = await fetch(
    `https://www.boredapi.com/api/activity?type=${type}`
  );

  if (!response.ok) throw new Error("Activity suggestions not found");
  return response.json();
}

export function getActivityType(): string[] {
  return Object.keys(IActivityType).filter((v) => isNaN(Number(v)));
}

export function validateActivityType(type: string): void {
  if (!Object.keys(IActivityType).includes(type)) {
    throw new Error("validate Activity Type faild");
  }
}
