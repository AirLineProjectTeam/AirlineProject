
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { reserveTicket } from "./checkoutPageController/reserveTicket";
import { User } from "../../../models/user";
export const PaypalButton = () => {
  const initialOptions = {
    "client-id": "test",
    "enable-funding": "card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Table",
                  amount: { currency_code: "USD", value: 200 },
                },
              ],
            });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};
