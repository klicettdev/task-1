import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("MiPrimerContrato", async function () {
  const { viem } = await network.connect();
  const publicClient = await viem.getPublicClient();

  let miPrimerContrato: any;

  it("deploy contract", async function () {
    miPrimerContrato = await viem.deployContract("MiPrimerContrato");
  });

  it("cambiar nombre", async function () {
    await miPrimerContrato.write.cambiarNombre(["Kervin"]);
  });

  it("obtener nombre", async function () {
    const nombre = await miPrimerContrato.read.nombre();

    assert.equal(nombre, "Kervin");
  });
});
