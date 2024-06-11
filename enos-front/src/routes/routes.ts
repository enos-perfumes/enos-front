export const PublicRoutes = {
  ROOT: "/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register"
  },
  NOT_FOUND: "*",
};

export const PrivateSharedRoutes = {
  SERVICES: "/services",
};

export const PrivateAdminRoutes = {
  ADMIN: "/admin",
  USERS: "users",
  SETTINGS: "users/settings/:idUser",
  DASHBOARD: "dashboard",
};

export const PrivateUserRoutes = {
  USER: "/user",
  DASHBOARD: "dashboard",
  SERVICES: "services",
};
