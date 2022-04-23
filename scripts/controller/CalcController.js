class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")
    this._currentDate
    this.initialize()
  }

  initialize() {}

  get displayTime() {
    return this._timeEl.innerHTML
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value
  }

  get displayDate() {
    return this._dateEl.innerHTML
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value
  }

  get currentDate() {
    return new Date()
  }

  set currentDate(value) {
    this._currentDate = value
  }
}

// Classe - Métodos (funções)

// MVC - Model View Controller

// Representa um objeto - (instância)

// Método Constructor é chamado automaticamente se existir uma instância da classe

// Atributos com encapsulamento - Controlar quem pode acessar o atributo

// Atributo possui get and set para definir como ele deve ser consultado ou alimentado

// _ antes do this (Orientação a objeto) significa que é um atributo privado
