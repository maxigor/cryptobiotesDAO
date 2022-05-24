import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xeE709d16772a09d0870a57cFc300f51072281398");


(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    const toAddress = "0x37290a098d1e1DEdD29E89dFf888bb627224938A"
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mintTo(toAddress,amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$BIOTES in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();