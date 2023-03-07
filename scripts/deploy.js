const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runmain = () =>{
    // main()
    // .then(() => process.exit(0))
    // .catch(error => {
    //     console.error(error);
    //     process.exit(1);
    // });
    try{
      main();
      process.exit(0);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
}
