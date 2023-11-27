<template>
  <div class="container" id="screen">

    <div class="card result" id="result">
      <h1>НАСТОЯЩАЯ ЦЕНА</h1>
      <div class="result-text">{{ result }}</div>
      <div class="description">{{ priceTitle }}</div>
    </div>

    <div class="row" id="params">

      <div class="col card">
        <div class="title">Введите цену за упаковку</div>
        <div class="price">
          <input type="number" v-model="price" class="remove-arrow" @keyup="onKeyup" placeholder="0" onkeydown="return event.keyCode !== 69" @focus="selectInput">
        </div>
        <div class="empty"></div>
      </div>

      <div class="col card">
        <div class="title">{{ valueTitle }}</div>
        <div class="val">
          <input type="number" v-model="val" class="remove-arrow" @keyup="onKeyup" placeholder="0" onkeydown="return event.keyCode !== 69" @focus="selectInput">
        </div>
        <div class="empty"></div>
      </div>

    </div>

    <div class="row variants">
      <div class="col" v-for="(button, index) in buttons" v-bind:key="index" >
        <button :class="{active: button.isActive}" @click="onButtonClick(button.id)">{{button.title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      buttons: [
        { id: "mass", title: "За КГ", isActive: true, priceTitle: "за килограмм", valueTitle: "граммов в упаковке"  },
        { id: "vol", title: "За Литр", isActive: false, priceTitle: "за литр", valueTitle: "миллилитров в упаковке"  },
        { id: "count", title: "За Штуку", isActive: false, priceTitle: "за штуку", valueTitle: "штук в упаковке" },
      ],
      priceTitle: "за килограмм",
      valueTitle: "граммов в упаковке",
      price: '',
      val: '',
      result: '0.00 ₽',
      id: "mass"
    }
  },
  methods: {
    selectInput(event) {
      event.target.select();
    },
    onButtonClick(id) {
      this.buttons.forEach(button => {
        if (button.id === id) {
          button.isActive = true
          this.price = ''
          this.val = ''
          this.result = '0.00 ₽'
          this.priceTitle = button.priceTitle
          this.valueTitle = button.valueTitle
          this.id = button.id
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

        }

        this.result = resultForId.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
        })

    }
  }
}
</script>

<style scoped>

  .remove-arrow::-webkit-inner-spin-button,
  .remove-arrow::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  .remove-arrow {
      -moz-appearance: textfield;
  }
  ::placeholder {
  color: #ccc;
  opacity: 1; /* Firefox */
  }

  ::-ms-input-placeholder { /* Edge 12 -18 */
    color: #ccc;
  }

  #screen {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
  #result {
    display: flex;
    flex-direction: column;
    flex-grow: 5;
    justify-content: space-between;
  }
  #params {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  #params .card {
    flex-grow: 1;
  }

  .container {
    max-width: 800px;
    margin: auto;
    width: 100%;
    padding: 15px;
  }
  .card {
    margin-bottom: 20px;
    padding: 15px;
    border: 4px solid #ccc;
    border-radius: 1em;
    min-height: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card.result {
    border-color: #37963c;
  }
  .col.card {
    border-color: #ffae00;
  }
  .col.card .title {
    color: #ccc;
    font-size: calc( 2vh + .3vw );
  }

  .col.card input {
    display: block;
    height: auto;
    width: 100%;
    padding: 1em 0;
    text-align: center;
    font-size: calc( 3vh + 3vw );
  }

  h1 {
    font-size: calc( 1.5vh + 1.5vw );
    font-weight: 600;
  }
  .result-text {
    padding: 1em 0;
    font-size: calc( 4vh + 2.5vw );
    font-weight: 500;
    text-align: center;
  }
  .description {
    font-size: 1rem;
    color: #ccc;
    font-weight: 500;
    text-align: right;
    font-size: calc( 2vh + .5vw );
  }
  .variants {
    flex-grow: 1;
  }
  .variants button {
    background-color: #555;
    padding: .5rem 1rem;
    text-align: center;
    color: #fff;
    width: 100%;
    font-size: calc( 2vh + .5vw);
    height: 100%
  }
  .variants button.active {
    opacity: .8;
  }
  .row.variants {
    display: flex;
    width: 100%;
    max-width: 100%;
  }
  .row.variants .col {
    flex-grow: 1;
  }
  @media screen and (min-width: 600px) {
    .row#params {
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 100%;
      gap: 1.5rem;
    }
    .row .col {
      flex-grow: 1;
    }
  }
</style>