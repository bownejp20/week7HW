class UntitledGoose{
  constructor(numOfStolenGoods, listItem, catchPhrase, color){
    this.numOfStolenGoods = numOfStolenGoods
    this.listItem = listItem
    this.catchPhrase = catchPhrase
    this.color = color
  }

goosetalks(){
    alert(`${this.catchPhrase}`)
  }
  keepsStatsOfStolenGoods(){
    console.log(`The ${this.color} goose has ${this.numOfStolenGoods} stolen items! `)
  }
  gooseRuns(){
    alert('Can you go any faster!')
  }
}

let edgar = new UntitledGoose ('4', 'spoon', 'honk', 'white')
