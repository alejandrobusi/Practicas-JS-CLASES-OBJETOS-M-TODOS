//********************************CLASS**********************************************************/
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
let balance = 0;
let temp ;
let bank = new Acount("Alex", balance, temp,);

class Rectangle {
  constructor (sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  modify(){
  this.tempA = parseInt(prompt("Ingresa el nuevo valor para altura (CM)."))
  this.tempB = parseInt(prompt("Ingresa el nuevo valor para la base (CM)."))
  if (!isNaN(this.tempA,this.tempB)) {
    this.sideA = this.tempA;
    this.sideB = this.tempB;
    this.showStatus();
  } else {
  alert("Solo puedes ingresar numeros.")
  }
  }
  showStatus () {
    alert(`El rectangulo tiene una altura de ${this.sideA}cm y su base es de ${this.sideB}cm.`)
  }
  perimeter (){
    this.perimeter = 2*(this.sideA + this.sideB)
    alert(`El perimetro del rectangulo es: ${this.perimeter}cm.`)
  }
  area (){
  this.area = this.sideB * this.sideA;
  alert(`El area del rectangulo es: ${this.area}cm2.`)
}
} 

let rect1 = new Rectangle(0,0)

//**********************************************************************************************/
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


let Ej2 = (metod) => {
  bank[metod]();
  }
let Ej3 = (metod) => {
  rect1[metod]();
}
