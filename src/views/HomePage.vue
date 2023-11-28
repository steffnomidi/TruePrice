<template>
  <div class="container" id="screen">

    <div id="table" :class="{ active: table.isActive }">
      <table v-html="table.html" ></table>
      <div class="clear" @click="mClear()">×</div>
    </div>

    <div class="card result" id="result">

      <div class="header">
        <h1>НАСТОЯЩАЯ ЦЕНА</h1>
        <p class="memoryPlus" :class="{ active: memoryPlus.isActive }" @click="mPlus()" >+ сравнить</p>
      </div>

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

<script src="./Home.js"></script>

<style src="./Home.css"></style>