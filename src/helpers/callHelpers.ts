// project token
export function balanceOf(contract, address) {
  return contract.methods.balanceOf(address).call();
}

export function mint(contract, address, amount) {
  return contract.methods.mint(address, amount).send({
    from: address,
  });
}

export function transfer(contract, address, toAddress, amount) {
  return contract.methods.transfer(toAddress, amount).send({
    from: address,
  });
}

export function getAllowance(contract, owner, address) {
  return contract.methods.allowance(owner, address).call();
}

export function approve(contract, address, owner, amount) {
  return contract.methods.approve(address, amount).send({
    from: owner,
  });
}

//crowdfunding facet

export function allocatePC(contract, address, amount) {
  return contract.methods.allocatePC(amount).send({
    from: address,
  });
}
export function getBuyPrice(contract, amount) {
  return contract.methods.getBuyPrice(amount).call();
}

export function getSellPrice(contract, amount) {
  return contract.methods.getSellPrice(amount).call();
}

export function iBuy(contract, coinaddress, investAmount, ptAmt, address) {
  return contract.methods.ibuy(coinaddress, investAmount, ptAmt).send({
    from: address,
  });
}

export function iSell(contract, coinaddress, ptAmount, address) {
  return contract.methods.isell(coinaddress, ptAmount).send({
    from: address,
  });
}

export function iClaimCoin(contract, address, ptAmount) {
  return contract.methods.iclaimPC(ptAmount).send({
    from: address,
  });
}

export function getProjectToken(contract) {
  return contract.methods.projectToken().call();
}

export function getProjectName(contract) {
  return contract.methods.projectName().call();
}

export function getProjectCoin(contract) {
  return contract.methods.projectCoin().call();
}

export function getStableCoin(contract) {
  return contract.methods.stableCoin().call();
}

export function protocolFeeAmt(contract) {
  return contract.methods.protocolFeeAmt().call();
}

export function calculateBuyPT(contract, coinAddr, amount) {
  return contract.methods.calculateBuyPT(coinAddr, amount).call();
}

export function calculateSellPT(contract, coinAddr, amount) {
  return contract.methods.calculateSellPT(coinAddr, amount).call();
}

export function getTotPInvestAmt(contract) {
  return contract.methods.getTotPInvestAmt().call();
}

export function getTotCirculatingPTAmt(contract) {
  return contract.methods.getTotCirculatingPTAmt().call();
}

export function getTotPInvestors(contract) {
  return contract.methods.getTotPInvestors().call();
}

export function getPCValuation(contract) {
  return contract.methods.getPCValuation().call();
}

export function getTVLPT(contract) {
  return contract.methods.getTVLPT().call();
}

export function getMC(contract) {
  return contract.methods.getMC().call();
}

export function getAllocatePC(contract) {
  return contract.methods.getAllocatePC().call();
}

export function getFundingTh(contract) {
  return contract.methods.getFundingTh().call();
}

export function getBufferPeriod(contract) {
  return contract.methods.getBufferPeriod().call();
}

export function getConversionPeriod(contract) {
  return contract.methods.getConversionPeriod().call();
}

export function getProjectFee(contract) {
  return contract.methods.getProjectFee().call();
}

export function getProtocolFee(contract) {
  return contract.methods.getProtocolFee().call();
}

export function getPTBalance(contract, address) {
  return contract.methods.getPTBalance(address).call();
}

export function getTotalSupply(contract) {
  return contract.methods.totalSupply().call();
}

export function getStartTimestamp(contract) {
  return contract.methods.getStartTimestamp().call();
}

export function getTpTimestamp(contract) {
  return contract.methods.getTpTimestamp().call();
}

export function getReleasablePCAmt(contract) {
  return contract.methods.getReleasablePCAmt().call();
}

export function getClaimablePCAmt(contract) {
  return contract.methods.getClaimablePCAmt().call();
}

export function claimFees(contract, address) {
  return contract.methods.claimFees().send({
    from: address,
  });
}

export function claimFund(contract, address) {
  return contract.methods.claimFund().send({
    from: address,
  });
}

export function getMaxConvertiblePTUser(contract, address) {
  return contract.methods.getMaxConvertiblePTUser(address).call();
}

export function calculateClaimPC(contract, ptAmt) {
  return contract.methods.calculateClaimPC(ptAmt).call();
}

export function getThValue(contract) {
  return contract.methods.getThValue().call();
}

export function getTotPFeeAmt(contract) {
  return contract.methods.getTotPFeeAmt().call();
}

export function getMaxClaimablePCUser(contract, address) {
  return contract.methods.getMaxClaimablePCUser(address).call();
}

export function getClaimedPFeeAmt(contract) {
  return contract.methods.getClaimedPFeeAmt().call();
}

export function getClaimablePCUser(contract, amount) {
  return contract.methods.getClaimablePCUser(amount).call();
}
