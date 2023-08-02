import Asset from "./asset";

  
export default interface PersonBalance {
    balance: Number,//Saldo da conta corrente
    overrun: Number,//Saldo do patrimonio
    assets: Array<Asset> //Ativos
  }
  