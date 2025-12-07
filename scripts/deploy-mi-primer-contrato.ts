import { network } from "hardhat";

const { viem, networkName } = await network.connect();
const client = await viem.getPublicClient();

console.log(`Deploying MiPrimerContrato to ${networkName}...`);

const MiPrimerContrato = await viem.deployContract("MiPrimerContrato");

console.log("MiPrimerContrato address:", MiPrimerContrato.address);

console.log("Calling MiPrimerContrato.cambiarNombre('Kervin')");
const tx = await MiPrimerContrato.write.cambiarNombre(["Kervin"]);

console.log(
  "Waiting for the MiPrimerContrato.cambiarNombre('Kervin') tx to confirm"
);
await client.waitForTransactionReceipt({ hash: tx, confirmations: 1 });

console.log("Deployment successful!");
