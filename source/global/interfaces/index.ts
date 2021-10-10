export interface IInitialAuthState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

export interface IActions {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  token: string | null;
}
