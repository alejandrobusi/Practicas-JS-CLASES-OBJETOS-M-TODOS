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

class Product{
  constructor (cod, price, name){
    this.codigo = cod;
    this.precio = price;
    this.nombre = name;
  }
  dataShow (){
  alert(`Detalles de "${this.nombre}". \n
  Codigo : ${this.codigo}.\n
  Precio : $${this.precio}.\n
  MiniService Bigarello.`)
  }
}

let prod1 = new Product(13111993, 999, "Salsa Szechuan")
let prod2 = new Product(20072010, 2500,"Plumbus")
let prod3 = new Product(29795893, 200000,"BoxMeeseek")
let arrProd = [prod1, prod2, prod3]
console.log(arrProd)

class Person{
  constructor(name, age, document, sex, weight, height, dateOfBirth){
    this.nombre = name;
    this.edad = age;
    this.documento = document;
    this.sexo = sex;
    this.peso = weight;
    this.altura = height;
    this.fechaNacimiento = dateOfBirth;
  }
  showGeneration (){
    if (this.edad >= 1930 && this.age <= 1948) {
      alert(`${this.nombre} pertenece a "Silent Generation" (niños de la post guerra).\n
      Su rasgo característico es la Austeridad. (Sencillez y moderación propias de la persona.).`)
    } else if(this.edad >= 1949 && this.age <= 1968){
      alert(`${this.nombre} pertenece a "Baby Boom".\n
      Su rasgo característico es la Ambicion. (Deseo intenso y vehemente de conseguir una cosa difícil de lograr, especialmente riqueza, poder o fama.).`)
    } else if (this.edad >= 1969 && this.age <= 1980) {
      alert(`${this.nombre} pertenece a "Generación X".\n
      Su rasgo característico es la Obsesión por el éxito. (Una competencia por alcanzar el éxito, el éxito para algunos a menudo puede variar segun su realidad.).`)
    } else if (this.edad >= 1981 && this.age <= 1993) {
      alert(`${this.nombre} pertenece a "Generación Y".\n
      Su rasgo característico es la Frustración. (La frustración es una respuesta emocional común a la oposición, relacionada con la ira y la decepción, que surge de la percepción de resistencia al cumplimiento de la voluntad individual.).`)
    } else if (this.edad >= 1994 && this.age <= 2010) {
      alert(`${this.nombre} pertenece a "Generación Z".\n
      Su rasgo característico es la Irreverencia. (Persona que lucha, contiende o está en oposición con otra.).`)
    }
  }
  adult (){
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.\n
      Su edad actual es de ${this.edad} años.`)
    } else {
      alert(`${this.nombre} NO mayor de edad.\n
      Su edad actual es de ${this.edad} años.`)
    }
  }
  showData (){
    alert(`Propiedades del objeto.\n
    Nombre: ${this.nombre}.\n
    Edad: ${this.edad}.\n
    DNI: ${this.documento}.\n
    Sexo: ${this.sexo}.\n
    Peso: ${this.peso} KG.\n
    altura: ${this.altura} CM.\n
    Fecha de nacimiento: ${this.fechaNacimiento}.`) 
  }
  generateId (){
    this.documento = Math.round(Math.random() * 10000000);
    alert('Tu número aleatorio es: ' + this.documento +".");
  } 
}

let people1 = new Person("Alejandro", 27, 38744138, "Hombre", 84, 174, "13/11/93")
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
let Ej4 = () =>  {
  alert("Para ver el objeto array de objetos presiona F12.")
  arrProd[0].dataShow()
  arrProd[1].dataShow()
  arrProd[2].dataShow()
}
let Ej5 = () => {
  people1.showData()
  people1.adult()
}
Ej5()