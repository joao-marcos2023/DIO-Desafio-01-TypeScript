export abstract class Account{
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    //Depósito
    deposit = (DepositValue: number): void =>{
        this.balance = this.balance + DepositValue
        if(this.balance != 0){
            console.log("Depósito realizado com sucesso")
        }

    }

    //Saque
    withDraw = (withDrawValue: number): void =>{
        if(this.validateStatus() && this.balance > withDrawValue){
            this.balance = this.balance - withDrawValue
            console.log("Saque realizado com sucesso!")
        }else{
            throw new Error("Conta inválida para realizar saques!")
        }

    }

    //Empréstimo
    getLoan = (loanValue: number): void => {
        if(this.validateStatus()){
            this.balance = this.balance + loanValue
            console.log("Empréstimo realizado com sucesso")
        }else{
            throw new Error("Conta inválida para realizar empréstimos")
        }
        
    }

    //Valida status
    private validateStatus = (): boolean =>{
        if(this.status){
            return this.status
        }

        throw new Error("Conta inválida")
    }

}

//Outra conta
export abstract class OtherAccount{

    deposit = (depositValue: number): void =>{
        console.log(depositValue + 10)
    }


}


