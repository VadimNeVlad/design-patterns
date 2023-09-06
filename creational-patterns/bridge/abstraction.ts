import { PaymentProvider } from "./implementation";

export abstract class Payment {
  protected provider: PaymentProvider;

  constructor(provider: PaymentProvider) {
    this.provider = provider;
  }

  pay(): void {
    this.provider.execPayment();
  }
}

export class OneTimePayment extends Payment {}

export class SubscriptionPayment extends Payment {
  pay(): void {
    super.pay();
    console.log("Next payment data will be...");
  }
}
