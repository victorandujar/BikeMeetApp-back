import {
  type RidesEndpointsStructure,
  type UserEndpointsStructure,
} from "./types/types";

export const userEndpoints: UserEndpointsStructure = {
  users: "/users",
  register: "/register",
  login: "/login",
  verifyEmail: "/verify-email",
  getUser: "/user-verify",
  recoveryPassword: "/restore-password/:userId",
  resetPasswordEmail: "/recovery-password",
  restorePassword: "/restore-password",
};

export const ridesEndpoints: RidesEndpointsStructure = {
  rides: "/rides",
  getAllRides: "/",
  detail: "/:rideId",
};
