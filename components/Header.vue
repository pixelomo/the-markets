<template>
  <b-navbar
    toggleable="xl"
    class="offcanvas fixed-top"
    :class="open ? 'open' : ''"
  >
    <div v-b-toggle.sidebar class="sidebar-toggler" />
    <b-navbar-brand>
      <NuxtLink to="/">
        <h1 class="title">
          <img src="./../assets/logo-white.svg" alt="The Markets Logo">
          The Markets
        </h1>
      </NuxtLink>
    </b-navbar-brand>
    <b-sidebar id="sidebar" backdrop shadow>
      <div class="sidebar-inner">
        <b-navbar-nav>
          <NuxtLink class="nav-link" to="/indices">
            Indices
          </NuxtLink>
          <NuxtLink class="nav-link" to="/movers">
            Movers
          </NuxtLink>
          <NuxtLink class="nav-link" to="/commodities">
            Commodities
          </NuxtLink>
          <NuxtLink class="nav-link" to="/currencies">
            Currencies
          </NuxtLink>
          <NuxtLink class="nav-link" to="/stocks">
            Stocks
          </NuxtLink>
          <NuxtLink class="nav-link" to="/bonds">
            Bonds
          </NuxtLink>
          <NuxtLink class="nav-link" to="/cryptocurrency">
            Crypto
          </NuxtLink>
          <NuxtLink class="nav-link" to="/analysis">
            Analysis
          </NuxtLink>
          <NuxtLink class="nav-link" to="/trading-101">
            Trading 101
          </NuxtLink>
          <NuxtLink class="nav-link" to="/personal-finance">
            Personal Finance
          </NuxtLink>
          <NuxtLink class="nav-link" to="/magazine">
            Magazine
          </NuxtLink>
          <NuxtLink class="nav-link font-weight-light" to="/privacy-policy">
            Privacy Policy
          </NuxtLink>
          <NuxtLink class="nav-link font-weight-light" to="/terms-and-conditions">
            Terms &amp; Conditions
          </NuxtLink>
          <hr>
          <div class="social d-flex justify-content-between">
            <a href="" class="social-icon">
              <img src="./../assets/twitter-black.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/fb-black.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/youtube-black.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/instagram-black.svg" alt="">
            </a>
          </div>
          <div class="container d-flex justify-content-center text-center p-0">
            <p>&#169; {{ new Date().getFullYear() }} The Markets Inc.<br/>All rights reserved.</p>
          </div>
        </b-navbar-nav>
      </div>
    </b-sidebar>
    <b-collapse id="nav-text-collapse" is-nav class="justify-content-end collapse">
      <b-navbar-nav>
        <b-navbar-toggle target="nav-text-collapse mobile" ></b-navbar-toggle>
        <NuxtLink class="nav-link" to="/indices">
          Indices
        </NuxtLink>
        <NuxtLink class="nav-link" to="/movers">
          Movers
        </NuxtLink>
        <NuxtLink class="nav-link" to="/commodities">
          Commodities
        </NuxtLink>
        <NuxtLink class="nav-link" to="/currencies">
          Currencies
        </NuxtLink>
        <NuxtLink class="nav-link" to="/stocks">
          Stocks
        </NuxtLink>
        <NuxtLink class="nav-link" to="/bonds">
          Bonds
        </NuxtLink>
        <NuxtLink class="nav-link" to="/cryptocurrency">
          Crypto
        </NuxtLink>
        <NuxtLink class="nav-link" to="/analysis">
          Analysis
        </NuxtLink>
        <NuxtLink class="nav-link" to="/trading-101">
          Trading 101
        </NuxtLink>
        <NuxtLink class="nav-link" to="/personal-finance">
          Personal Finance
        </NuxtLink>
        <NuxtLink class="nav-link" to="/magazine">
          Magazine
        </NuxtLink>
      </b-navbar-nav>
    </b-collapse>
    <Ticker :tickerItems="tickerItems" />
  </b-navbar>
</template>

<script>
import Ticker from "./Ticker.vue";

export default {
  name: 'Header',
  components: {
    Ticker
  },
  data() {
    return {
      open: false,
      tickerItems: [
        {
          name: 'DOW JONES',
          icon: 'usa',
          type: 'indices',
          symbol: 'DJI'
        },
        {
          name: 'S&P 500',
          icon: 'usa',
          type: 'indices',
          symbol: 'GSPC'
        },
        {
          name: 'NASDAQ',
          icon: 'usa',
          type: 'indices',
          symbol: 'IXIC'
        },
        {
          name: 'US 10 Year Bond',
          abbreviated: 'US 10Y',
          icon: 'usa',
          type: 'bonds',
          symbol: 'DGS10'
        },
        {
          name: 'Bitcoin',
          icon: 'btc',
          type: 'cryptocurrency',
          symbol: 'BTC/USD'
        },
        {
          name: 'Gold',
          icon: 'gold',
          type: 'commodities',
          symbol: 'XAU/USD'
        },
        {
          name: 'Crude Oil',
          icon: 'crude-oil',
          type: 'commodities',
          symbol: 'WTI/USD'
        },
        {
          name: 'Dollar Index',
          icon: 'usa',
          type: 'currencies',
          symbol: 'DXY'
        },
      ]
    }
  },
  methods: {
    closeNav(){
      this.open = false;
    }
  },
  created() {
    this.$root.$on('updateCrypto', (item) => {
      const btc = this.tickerItems.find(item => item.name === 'Bitcoin');
      if(item.name === btc.name){
        this.$set(btc, 'price', item.price);
        this.$set(btc, 'difference', item.difference);
        this.$set(btc, 'change', item.change);
      }
    });
    this.$root.$on('updateCommodity', (item) => {
      const gold = this.tickerItems.find(item => item.name === 'Gold');
      const oil = this.tickerItems.find(item => item.name === 'Crude Oil');
      if(item.icon === gold.icon){
        this.$set(gold, 'price', item.price);
        this.$set(gold, 'difference', item.difference);
        this.$set(gold, 'change', item.change);
      }
      if(item.icon === oil.icon){
        this.$set(oil, 'price', item.price);
        this.$set(oil, 'difference', item.difference);
        this.$set(oil, 'change', item.change);
      }
    });
    this.$root.$on('updateIndice', (item) => {
      const dow = this.tickerItems.find(item => item.symbol === 'DJI');
      const sp500 = this.tickerItems.find(item => item.symbol === 'GSPC');
      const nasdaq = this.tickerItems.find(item => item.symbol === 'IXIC');
      const dxy = this.tickerItems.find(item => item.symbol === 'DXY');
      if(item.symbol === dow.symbol){
        this.$set(dow, 'price', item.price);
        this.$set(dow, 'difference', item.difference);
        this.$set(dow, 'change', item.change);
      }
      if(item.symbol === sp500.symbol){
        this.$set(sp500, 'price', item.price);
        this.$set(sp500, 'difference', item.difference);
        this.$set(sp500, 'change', item.change);
      }
      if(item.symbol === nasdaq.symbol){
        this.$set(nasdaq, 'price', item.price);
        this.$set(nasdaq, 'difference', item.difference);
        this.$set(nasdaq, 'change', item.change);
      }
      if(item.symbol === dxy.symbol){
        this.$set(dxy, 'price', item.price);
        this.$set(dxy, 'difference', item.difference);
        this.$set(dxy, 'change', item.change);
      }
    });
    this.$root.$on('updateBond', (item) => {
      const us10 = this.tickerItems.find(item => item.symbol === 'DGS10');
      if(item.name === us10.name){
        this.$set(us10, 'price', item.price);
        this.$set(us10, 'difference', item.difference);
        this.$set(us10, 'change', item.change);
      }
    });
  }
}
</script>

<style lang="scss">

.navbar {
  /* background: $blue; */
  /* background: #242424; */
  background: #222222;
  padding: 1rem 0 0;
  margin-bottom: 0;
  flex-wrap: wrap;
  @include title-font();
  .navbar-brand {
    padding: 0 1rem 0 2rem;
    margin-right: 0;
    .title {
      display: flex;
      align-items: center;
      font-size: 24px;
      letter-spacing: -1px;
      margin-bottom: 0;
    }
    a {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
    img {
      width: 33px;
      margin-right: 10px;
    }
  }
  .navbar-nav{
    padding-right: 2rem;
    a.nav-link {
      color: #f2f2f2;
      font-size: 14px;
      &:hover {
        text-decoration: none;
        color: #fff;
      }
      &.nuxt-link-active{
        color: $blue;
      }
    }
  }
}

.mobile{display: none;}

@media(max-width:1199px){
  .navbar-light {
    max-width: 100vw;
    padding: 0;
    .sidebar-toggler {
      color: #fff;
      border: none;
      z-index: 1024;
      outline: none;
      margin: 1rem 1rem 0.425rem;
      z-index: 1;
      width: 25px;
      height: 20px;
      background-size: cover;
      background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
    }
    .b-sidebar{
      max-width: 85% !important;
      .b-sidebar-header{
        position: absolute;
        right: 0;
        padding: 0.5rem;
      }
      .sidebar-inner{
        padding: 1.5rem;
      }
      .social{
        padding: 0.5rem 1.5rem 1rem;
      }
    }
    .b-sidebar-backdrop{
      height: 105vh;
      right: 0;
      left: initial;
    }
    .navbar-nav{
      padding-right: 0;
      a.nav-link{
        color: #000;
        font-size: 22px;
        padding: 0 0 7px;
        font-weight: 700;
        &:hover {
          color: #222;
        }
        &.nuxt-link-exact-active{
          color: $blue;
        }
      }
    }
    .navbar-brand{
      position: absolute;
      top: 0.85rem;
      left: 0;
      right: 0;
      margin: auto;
      img {
        margin: 0 0.5rem 0 0;
        width: 30px;
      }
      h1.title{
        justify-content: center;
        font-size: 24px;
      }
    }
  }
  .mobile{display: block;}
}

@media(max-width: 750px){
  .navbar{
    padding: 0 0 1rem;
    .navbar-brand{
      h1.title{
        font-size: 0;
      }
    }
    .b-sidebar{
      .social{
        padding: 0.5rem 0 1rem;
      }
    }
  }
}

</style>
