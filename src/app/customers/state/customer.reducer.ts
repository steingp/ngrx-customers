import * as customerActions from "./customer.action";
import { Customer } from "../customer.model";
// import the app state
import * as fromRoot from "../../state/app.state";

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

// export the app state
export interface AppState extends fromRoot.AppState {
  customers: CustomerState;
}

// define the initial state of the applciation with default values
export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: false,
  error: ""
};

export function customerReducer(
  state = initialState,
  action: customerActions.Action): CustomerState {

  switch (action.type) {

    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }

    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      };
    }

    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        customers: [],
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}