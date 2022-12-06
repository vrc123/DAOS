export class AuthManager {
  static token = "No token";

  static getToken() {
    if (this.token === "No token") {
      const result = localStorage.getItem("token");
      if (result) {
        this.token = JSON.parse(result);
      } else {
        throw "No valid token";
      }
    }

    return this.token;
  }

  static updateToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }
}
