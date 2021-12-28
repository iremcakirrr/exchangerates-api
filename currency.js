class Currency {
    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=f6e4821307da4040530e0a1e3c424fe6&format=1";
        this.amount = null;
    }
    exchange() {
        return new Promise ((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);
            let total = parity*amount2;
            resolve(total);
        })
        .catch(err => reject(err));
        });
        
            
      
    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstcurrency) {
        this.firstCurrency = newFirstcurrency;
    }
    changeSecondCurrency(newSecondcurrency) {
        this.secondCurrency = newSecondcurrency;
}

}