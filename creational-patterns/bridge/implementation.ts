export interface PaymentProvider {
  execPayment(): void;
}

export class PayPalProvider implements PaymentProvider {
  execPayment(): void {
    console.log("PayPal Api...");
  }
}

export class GooglePayProvider implements PaymentProvider {
  execPayment(): void {
    console.log("GooglePay Api...");
  }
}
