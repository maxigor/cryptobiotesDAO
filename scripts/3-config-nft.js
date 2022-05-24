import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xb55c0F51Df13fefAC6FC5A8AF3F2D3E76731870A");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "crypto biote ",
        description: "Esse NFT vai te dar acesso ao cryptobioteDAO!",
        image: readFileSync("scripts/assets/biotes.png"),
      },
    ]);
    console.log("✅ Sucesso ao criar um novo NFT no drop!");
  } catch (error) {
    console.error("Falha ao criar um novo NFT", error);
  }
})();