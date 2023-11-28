export default {
    name: 'HomePage',
    data() {
        return {
            buttons: [
                { id: "mass", title: "За КГ", isActive: true, priceTitle: "за килограмм", valueTitle: "Грамм в упаковке" },
                { id: "vol", title: "За Литр", isActive: false, priceTitle: "за литр", valueTitle: "Миллилитров в упаковке" },
                { id: "count", title: "За Штуку", isActive: false, priceTitle: "за штуку", valueTitle: "Штук в упаковке" },
            ],
            priceTitle: "за килограмм",
            valueTitle: "Грамм в упаковке",
            price: '',
            val: '',
            result: '0.00 ₽',
            id: "mass",
            memoryPlus: {
                isActive: false
            },
            table: {
                html: '',
                isActive: false
            }
        }
    },
    methods: {
        selectInput(event) {
            event.target.select();
        },
        onButtonClick(id) {
            this.buttons.forEach(button => {
                if (button.id === id) {
                    if (button.isActive != true) {
                        button.isActive = true
                        this.price = ''
                        this.val = ''
                        this.result = '0.00 ₽'
                        this.priceTitle = button.priceTitle
                        this.valueTitle = button.valueTitle
                        this.id = button.id
                    }
                } else {
                    button.isActive = false
                }
            })
        },
        onKeyup() {

            console.log(this.id);
            var resultForId = 0

            if (this.val != 0 && this.price != 0) {

                switch (this.id) {
                    case "mass":
                        resultForId = this.price / this.val * 1000
                        break;
                    case "vol":
                        resultForId = this.price / this.val * 1000
                        break;
                    case "count":
                        resultForId = this.price / this.val
                        break;
                }

                resultForId = Math.round(resultForId * 100) / 100

                this.memoryPlus.isActive = true


            } else {

                this.memoryPlus.isActive = false

            }

            this.result = resultForId.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
            })

        },
        mPlus() {
            var htmlString
            htmlString =
            '<tr>' +
            '<td><div class="suptitle">Цена за упаковку' + '</div>' + this.price + '</td>' +
            '<td><div class="suptitle">' + this.valueTitle + '</div>' + this.val + '</td>' +
            '<td><div class="suptitle">Цена ' + this.priceTitle + '</div>' + this.result + '</td></tr>';
            this.table.html += htmlString
            this.table.isActive = true
            this.price = ''
            this.val = ''
            this.result = '0.00 ₽'
            this.memoryPlus.isActive = false
        },
        mClear() {
            this.table.html = ''
            this.table.isActive = false
        }
    }
}