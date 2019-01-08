import { AppState } from "./app.reducer";
import { CustomerState } from "../customers/state/customer.reducer";
 
// Define the state tree with it's feature slices
export interface AppState {
  app: AppState,
  customers: CustomerState
}