import UserDTO from '../dtos/User.dto';

export interface UiState {
     toast: {
          isOpen: boolean;
          header?: string;
          message?: string;
          duration?: number;
          position?: string;
     };
     alert: {
          isOpen: boolean;
          header?: string;
          subHeader?: string;
          message: string;
          buttons: [
               {
                    text: string;
                    handler?: Function;
               },
          ];
     };
}

export interface UserState {
     userDetail: UserDTO | {};
     authenticated: boolean;
     userTokens: {
          idToken: string | null;
          refreshToken: string | null;
     };
}

export interface RootState {
     ui: UiState;
     user: UserState;
}