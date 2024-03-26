import { GustoEmbeddedPayroll } from "./index";

describe("gusto-embedded-payroll-typescript-sdk", () => {
    it("initialize client", async () => {
        const gustoembeddedpayroll = new GustoEmbeddedPayroll({
            apiKey: "API_KEY",
        });
    });
});
