<template>
  <div class="ticker">
    <div class="d-flex ticker-wrap">
      <TickerItem
        v-for="item in tickerItems"
        :key="item.name"
        :item="item"
        :bitcoin="item.name === 'Bitcoin' ? true : false"
      />
    </div>
  </div>
</template>

<script>
import TickerItem from "./TickerItem.vue";

export default {
  name: 'Ticker',
  components: {
    TickerItem
  },
  props: {
    tickerItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">

.ticker{
  padding: 0.5rem 1rem;
  width: 100%;
  margin-top: 1rem;
  /* border-top: 1px solid rgba(255,255,255,0.3); */
  /* border-bottom: 1px solid rgba(255,255,255,0.3); */
  /* background: #fff; */
  /* background: #343434; */
  background: #000000;
  justify-content: space-between;
  @include main-font();
  .ticker-wrap{
    justify-content: space-between;
    /* max-width: 1620px; */
    margin: 0 auto;
  }
  .item {
    display: inline-flex;
    /* width: calc(100% / 8); */
    padding: 0 0.25rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #fff;
    &:first-of-type{
      border-left: none;
    }
    h3{
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 0;
      display: inline-block;
    }
    .info {
      line-height: 1.1;
      strong, p {
        @include number-font;
        font-size: 11px;
      }
      .diff, .change{
        @include number-font;
        font-size: 11px;
      }
      /* &.bitcoin {
        strong{width: 56px;}
        p{
          width: 105px;
        }
      } */
    }
    p, strong{
      font-size: 12px;
      font-weight: 400;
      display: inline-block;
      /* @include number-font; */
    }
    p{
      margin-bottom: 0;
      margin-top: 3px;
      /* font-size: 12px; */
    }
    &.up {
      .diff, .change {
        color: $green;
      }
    }
    &.down {
      .diff, .change {
        color: $red
      }
    }
  }
}

.icon {
  min-width: 34px;
  height: 34px;
  /* border: #f2f2f2 5px solid; */
  border: #fff 4px solid;
  background-repeat: no-repeat;
  /* background-color: #f2f2f2; */
  background-color: #fff;
  background-size: cover;
  background-position: center;
  box-shadow: rgb(51 51 51 / 30%) 1px 1px 3px 0px;
  border-radius: 50%;
  margin-right: 10px;
  &.usa {
    background-image: url('./../assets/usa.svg');
  }
  &.uk {
    background-image: url('./../assets/uk.svg');
  }
  &.jp {
    background-image: url('./../assets/japan.svg');
  }
  &.cn {
    background-image: url('./../assets/china.svg');
  }
  &.hk {
    background-image: url('./../assets/hk.svg');
  }
  &.ko {
    background-image: url('./../assets/korea.svg');
  }
  &.germany {
    background-image: url('./../assets/germany.svg');
  }
  &.spain {
    background-image: url('./../assets/spain.svg');
  }
  &.turkey {
    background-image: url('./../assets/turkey.svg');
  }
  &.usd {
    background-image: url('./../assets/usa.svg');
  }
  &.usdjpy {
    background-image: url('./../assets/usdjpy.svg');
    background-size: 90%;
  }
  &.usdkrw {
    background-image: url('./../assets/usdkrw.svg');
    background-size: 90%;
  }
  &.usdcny {
    background-image: url('./../assets/usdcny.svg');
    background-size: 90%;
  }
  &.usdtry {
    background-image: url('./../assets/usdtry.svg');
    background-size: 90%;
  }
  &.usdbrl {
    background-image: url('./../assets/usdbrl.svg');
    background-size: 90%;
  }
  &.usdils {
    background-image: url('./../assets/usdils.svg');
    background-size: 90%;
  }
  &.usdrub {
    background-image: url('./../assets/usdrub.svg');
    background-size: 90%;
  }
  &.eurusd {
    background-image: url('./../assets/eurusd.svg');
    background-size: 90%;
  }
  &.gbpusd {
    background-image: url('./../assets/gbpusd.svg');
    background-size: 90%;
  }
  &.gauusd {
    background-image: url('./../assets/gauusd.svg');
    background-size: 90%;
  }
  &.eu {
    background-image: url('./../assets/eu.svg');
  }
  &.gbp {
    background-image: url('./../assets/uk.svg');
  }
  &.btc {
    background-image: url('./../assets/btc.svg');
  }
  &.eth {
    background-image: url('./../assets/eth.svg');
  }
  &.doge {
    background-image: url('./../assets/dogecoin.svg');
  }
  &.xrp {
    background-image: url('./../assets/xrp.svg');
  }
  &.iota {
    background-image: url('./../assets/iota.svg');
  }
  &.cardano {
    background-image: url('./../assets/cardano.svg');
  }
  &.polkadot {
    background-image: url('./../assets/polkadot.svg');
  }
  &.gold {
    background-image: url('./../assets/gold.svg');
  }
  &.silver {
    background-image: url('./../assets/silver.svg');
  }
  &.natgas {
    background-image: url('./../assets/natgas.svg');
  }
  &.carbon {
    background-image: url('./../assets/carbon.svg');
  }
  &.crude-oil {
    background-image: url('./../assets/oil.svg');
  }
  &.brent-oil {
    background-image: url('./../assets/brent.svg');
  }
  &.coffee {
    background-image: url('./../assets/coffee.svg');
  }
  &.tesla {
    background-image: url('./../assets/tesla.svg');
    background-size: 80%;
  }
  &.blackberry {
    background-image: url('./../assets/blackberry.svg');
  }
  &.gme {
    background-image: url('./../assets/gamestop.svg');
  }
  &.amc {
    background-image: url('./../assets/amc.svg');
  }
  &.amazon {
    background-image: url('./../assets/amazon.svg');
    background-size: 80%;
  }
  &.apple {
    background-image: url('./../assets/apple.svg');
    background-size: 70%;
  }
  &.moderna {
    background-image: url('./../assets/moderna.svg');
  }
  &.nvidia {
    background-image: url('./../assets/nvidia.svg');
  }
  &.nio {
    background-image: url('./../assets/nio.svg');
  }
  &.nio {
    background-image: url('./../assets/nio.svg');
  }
  &.facebook {
    background-image: url('./../assets/facebook.svg');
  }
  &.pfizer {
    background-image: url('./../assets/pfizer.svg');
  }
  &.xpeng {
    background-image: url('./../assets/xpeng.svg');
  }
  &.palantir {
    background-image: url('./../assets/palantir.svg');
    background-size: 90%;
    background-position-x: 3px;
  }
  &.boeing {
    background-image: url('./../assets/boeing.svg');
    background-size: 80%;
  }
  &.santander {
    background-image: url('./../assets/santander.svg');
    background-size: 80%;
  }
  &.alibaba {
    background-image: url('./../assets/alibaba.svg');
  }
  /* &.google {
    background-image: url('./../assets/google.png');
  } */
  &.microsoft {
    background-image: url('./../assets/microsoft.svg');
    background-size: 60%;
  }
}

@media(max-width:1430px){
  .ticker{
    .item{
      &:nth-of-type(n+7){
        display: none;
      }
    }
  }
}

@media(max-width:1280px){
  .ticker{
    .item{
      /* width: calc(100% / 6); */
      &:nth-of-type(n+6){
        display: none;
      }
    }
  }
}

@media(max-width:991px){
  .ticker{
    .item{
      /* width: calc(100% / 4); */
      &:nth-of-type(n+5){
        display: none;
      }
    }
  }
}

@media(max-width: 750px){
  .ticker{
    display: none;
  }
}

</style>
