let Ej1 = () => {
  let marca = "lamborghini"
  let color = "red"
  let modelo = "Countach"
  let status = true;
  

  let car = {
    marca : marca,
    modelo : modelo,
    color : color,
    status : () => {
      let onOff = confirm("Vas a encender el auto?")
      if (onOff) {
        alert("Vaya! el auto está encendido.")
      } else {
        alert("Opss, parece que el auto esta apagado.")
      }
    } 
  }
car.status();
alert(`Para ver el objeto "car" presiona F12 y ve a consola.`)
console.log(car)
} 
let Ej2 = () => {
  let balance = 500;
  let temp ;
  class Acount {
    constructor (cardHolder, balance, temp,  ){
    this.cardHolder = cardHolder;
    this.balance = balance;
    this.temp = temp;
    
  }
  entry(){
    this.temp = parseInt(prompt("ingresa el monto a depositar."))
  if (!isNaN(this.temp)) {
    this.balance = this.balance + this.temp;
    this.report();
    
  } else {
    alert("Solo puedes ingresar numeros.")
  }
  }
  extract(){
    this.temp = parseInt(prompt("ingresa el monto a extraer."))
    if (!isNaN(this.temp)) {
      if (this.temp <= this.balance) {
        this.balance = this.balance - this.temp;
        this.report()
      } else {
        alert(`OPERACIÓN RECHAZADA.\n
        Su saldo es de: $${this.balance}.Ingresa un monto menor o igual.`)
      }
    } else {
    alert("Solo puedes ingresar numeros.")
    } 
  }
  report(){
  alert(`SunFlower Bank.\n
  Cliente: ${this.cardHolder}.\n
  Saldo disponible: $${this.balance}.\n
  Estado de cuenta: Activa.\n
  Terminal: ATS22705.\n
  Gracias por operar con SunFlower.`)
  }
  }
  let bank = new Acount("Alex", balance, temp,);
  bank.extract();
  console.log(balance)
}
Ej2()