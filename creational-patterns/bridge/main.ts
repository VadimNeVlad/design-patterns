import { OneTimePayment, SubscriptionPayment } from "./abstraction";
import { GooglePayProvider } from "./implementation";

const payment = new SubscriptionPayment(new GooglePayProvider());
payment.pay();
