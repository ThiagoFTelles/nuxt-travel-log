import type { UserWithId } from "./auth";

declare module "h3" {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface H3EventContext {
    user?: UserWithId;
  }
}

export type latLongItem = {
  lat: number;
  long: number;
};

export type MapPoint = {
  id: number;
  description: string | null;
  name: string;
} & latLongItem;
