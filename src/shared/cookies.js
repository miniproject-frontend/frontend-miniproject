import Cookies from "universal-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, option) => {
  let now = new Date();
  let after1m = new Date();
  after1m.setMinutes(now.getMinutes() + 60);

  return cookie.set(name, value, { ...option, expires: after1m });
};

export const getCookie = (name) => {
  return cookie.get(name);
};

export function logout() {
  cookie.remove("token");
  cookie.remove("refreshToken");
  sessionStorage.clear();
}
