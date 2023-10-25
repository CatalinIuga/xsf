import { defineStore } from "pinia";
import router from "../router";

export interface Session {
  username: string;
  id: number;
  role: string;
  authenticated: boolean;
  error?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    id: 0,
    role: "",
    authenticated: false,
    error: "",
  }),
  actions: {
    async checkSession() {
      const data = await fetch("http://localhost:8000/api/auth/session", {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());
      if (data?.authenticated) {
        this.username = data.session.username;
        this.id = data.session.id;
        this.role = data.session.role;
        this.authenticated = data.authenticated;
        return true;
      }
      this.username = "";
      this.id = 0;
      this.role = "";
      this.authenticated = false;
      this.error = data?.message;
      return false;
    },

    async login(email: string, password: string) {
      if (this.authenticated) {
        router.push("/");
        return;
      }
      const session = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }).then((res) => res.json());
      if (session?.authenticated) {
        await this.checkSession();
        router.push("/dashboard");
        return;
      }
      this.error = session?.message || "Something went wrong";
    },
    logout() {
      this.username = "";
      this.id = 0;
      this.role = "";
      this.authenticated = false;
      fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      }).then((res) => res.json());
      if (!this.authenticated) {
        router.push("/signin");
      }
    },
  },
});
