<template>
  <div v-if="loading">
    <div class="container d-flex justify-content-around w-50 pt-5 vh-100 text-center">
      <div class="loading-logo mt-5" role="status"/>
    </div>
  </div>
  <div v-else>
    <div
      class="home content container w-100 buffer"
      :class="view"
    >
      <!-- <div class="toggle">
        <button
          class="grid btn-outline-dark btn mb-4 mr-2"
          :class="view === 'grid' ? 'active' : ''"
          @click="showGrid()"
        />
        <button
          class="list btn-outline-dark btn mb-4"
          :class="view === 'list' ? 'active' : ''"
          @click="showList()"
        />
      </div> -->
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="row m-0 justify-content-between main-content">
            <div class="col-lg-6">
              <div class="col-12 white-well indices">
                <h2>Indices
                  <NuxtLink class="index-link" to="/indices">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="indices" type="indices" />
              </div>
              <div class="col-12 white-well">
                <h2>Currencies
                  <NuxtLink class="index-link" to="/currencies">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="currencies" type="currencies" />
              </div>
              <div class="col-12 white-well">
                <h2>Cryptocurrencies
                  <NuxtLink class="index-link" to="/cryptocurrency">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="cryptocurrency" type="cryptocurrency" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="col-12 white-well">
                <h2>Movers
                  <NuxtLink class="index-link" to="/movers">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="rising" type="rising" />
              </div>
              <div class="col-12 white-well">
                <h2>Bonds
                  <NuxtLink class="index-link" to="/bonds">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="bonds" type="bonds" />
              </div>
              <div class="col-12 white-well">
                <h2>Stocks
                  <NuxtLink class="index-link" to="/stocks">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="stocks" type="stocks" />
              </div>
              <div class="col-12 white-well">
                <h2>Commodities
                  <NuxtLink class="index-link" to="/commodities">View all <span>></span></NuxtLink>
                </h2>
                <IndexList :data="commodities" type="commodities" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="row m-0 justify-content-between">
            <div class="col-lg-12 border-left-grey">
              <h2 class="mt-0">News</h2>
              <News :newsData="stockNews"/>
              <Ad feedAd/>
              <Ad feedAd/>
              <News :newsData="cryptoNews"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {cryptocurrency, currencies, stocks, indices, bonds, rising, commodities} from "./../market.js";
import IndexList from '../components/IndexList.vue';
import Ad from "./../components/Ad.vue";
export default {
    components: {
      IndexList,
      Ad
    },
    data() {
      return {
        loading: true,
        view: 'list',
        cryptocurrency,
        currencies,
        stocks,
        indices,
        bonds,
        rising,
        commodities,
        chartData: null,
        chartOptions: null,
        stockNews: [],
        cryptoNews: [],
        risingNews: []
      }
    },
    methods: {
      fetchNews(symbol, type){
        this.$axios.$get(`https://api.finage.co.uk/news/market/${symbol}?apikey=${process.env.FINAGE_API_KEY}`)
        .then(response => {
          if(typeof response[0] !== 'undefined'){
            let newsfeed = type === 'rising' ? this.risingNews : this.stockNews;
            let index = newsfeed.findIndex(x => x.title === response[0].title);
            let newsItem = response[0]
            if(index === -1){
              // console.log(response)
              newsItem.symbol = symbol
              newsItem.type = 'stocks'
              newsfeed.push(newsItem)
            }
            if(newsfeed.length > 5){
              newsfeed.pop()
            }
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
      fetchCryptoNews(symbol, type){
        this.$axios.$get(`https://api.finage.co.uk/news/cryptocurrency/${symbol}?apikey=${process.env.FINAGE_API_KEY}`)
        .then(response => {
          if(typeof response.news[0] !== 'undefined'){
            let newsfeed = type === 'rising' ? this.risingNews : this.cryptoNews;
            let index = newsfeed.findIndex(x => x.title === response.news[0].title);
            let newsItem = response.news[0]
            if(index === -1){
              newsItem.symbol = symbol
              newsItem.type = 'cryptocurrency'
              newsfeed.push(newsItem)
            }
            if(newsfeed.length > 5){
              newsfeed.pop()
            }
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
      // checkMarketStatus(){
      //   this.$axios.$get(`https://api.finage.co.uk/marketstatus?apikey=${process.env.FINAGE_API_KEY}`)
      //   .then(response => {
      //     console.log(response)
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      // },
      showGrid() {
        this.view = 'grid';
      },
      showList() {
        this.view = 'list';
      }
    },
    // async mounted () {
    created() {
      console.log()
      // this.loaded = false;
      // this.checkMarketStatus();
      this.$root.$on('updateCrypto', (item) => {
        // console.log(item)
        let itemIndex = this.cryptocurrency.findIndex(index => index.name === item.name);
        this.$set(this.cryptocurrency[itemIndex], 'price', item.price);
        this.$set(this.cryptocurrency[itemIndex], 'difference', item.difference);
        this.$set(this.cryptocurrency[itemIndex], 'change', item.change);
      });
      this.$root.$on('updateCurrency', (item) => {
        // console.log(item)
        let itemIndex = this.currencies.findIndex(index => index.name === item.name);
        this.$set(this.currencies[itemIndex], 'price', item.price);
        this.$set(this.currencies[itemIndex], 'difference', item.difference);
        this.$set(this.currencies[itemIndex], 'change', item.change);
      });
      this.$root.$on('updateCommodity', (item) => {
        let itemIndex = this.commodities.findIndex(index => index.symbol === item.symbol);
        this.$set(this.commodities[itemIndex], 'price', item.price);
        this.$set(this.commodities[itemIndex], 'difference', item.difference);
        this.$set(this.commodities[itemIndex], 'change', item.change);
      });
      this.$root.$on('updateStock', (item) => {
        let itemIndex = this.stocks.findIndex(index => index.name === item.name);
        this.$set(this.stocks[itemIndex], 'price', item.price);
        this.$set(this.stocks[itemIndex], 'difference', item.difference);
        this.$set(this.stocks[itemIndex], 'change', item.change);
      });
      this.$root.$on('updateRising', (update) => {
        this.rising = update;
        this.$nextTick(() => {
          this.loading = false;
        });
      });
      this.$root.$on('updateIndice', (item) => {
        let itemIndex = this.indices.findIndex(index => index.name === item.name);
        this.$set(this.indices[itemIndex], 'price', item.price);
        this.$set(this.indices[itemIndex], 'difference', item.difference);
        this.$set(this.indices[itemIndex], 'change', item.change);
      });
      this.$root.$on('updateBond', (item) => {
        let itemIndex = this.bonds.findIndex(index => index.name === item.name);
        if(typeof this.bonds[itemIndex] !== 'undefined'){
          this.$set(this.bonds[itemIndex], 'price', item.price);
          this.$set(this.bonds[itemIndex], 'difference', item.difference);
          this.$set(this.bonds[itemIndex], 'change', item.change);
        }
      });
      this.bonds = this.bonds.filter(item => item.type === 'homeBond');

      this.stocks.forEach(item => {
        if(item.symbol !== 'AMC' || item.symbol !== 'GME' || item.symbol !== 'BB' || item.symbol !== 'TSLA'){
          this.fetchNews(item.symbol);
        }
      });
      setInterval(() => {
        this.stocks.forEach(item => {
          this.fetchNews(item.symbol);
        });
      }, 300000);
      this.cryptocurrency.forEach(item => {
        this.fetchCryptoNews(item.icon);
      });
      setInterval(() => {
        this.cryptocurrency.forEach(item => {
          this.fetchCryptoNews(item.icon);
        });
      }, 300000)
      this.rising.forEach(item => {
        if(item.symbol === 'DOGEUSD'){
          this.fetchCryptoNews(item.symbol, 'rising');
        } else {
          this.fetchNews(item.symbol, 'rising');
        }
      });
      setInterval(() => {
        this.rising.forEach(item => {
          if(item.symbol === 'DOGEUSD'){
            this.fetchCryptoNews(item.symbol, 'rising');
          } else {
            this.fetchNews(item.symbol, 'rising');
          }
        });
      }, 300000)
      // try {
      //   // const { userlist } = await fetch('/api/userlist')
      //   this.chartData = {
      //     datasets: [{
      //       data: [
      //         {x: 0, y: 125},
      //         {x: 50, y: 140},
      //         {x: 100, y: 115},
      //         {x: 150, y: 140},
      //         {x: 200, y: 90},
      //         {x: 250, y: 80},
      //       ],
      //       borderWidth: 0,
      //       backgroundColor: '#DC0D56',
      //       pointRadius: 0
      //     }]
      //   };
      //   this.chartOptions = {
      //     showLines: true,
      //     responsive: false,
      //     legend: {
      //       display: false
      //     },
      //     scales: {
      //       xAxes: [{
      //         type: 'linear',
      //         gridLines: {
      //           display: false
      //         },
      //         ticks: {
      //           display: false
      //         }
      //       }],
      //       yAxes: [{
      //         gridLines: {
      //           display: false
      //         },
      //         ticks: {
      //           display: false
      //         }
      //       }],
      //       // elements: {
      //       //   point:{
      //       //     radius: 0
      //       //   },
      //       //   arc: {
      //       //     borderWidth: 0
      //       //   }
      //       // }
      //     },
      //     layout: {
      //       padding: 0
      //     }
      //   }
      //   this.loaded = true;
      // } catch (e) {
      //   console.error(e)
      // }
    }
  }
</script>

<style lang="scss">
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.content.container {
  padding: 10px;
  margin: 0 auto 0;
  display: flex;
  /* flex-flow: wrap; */
  flex-flow: column;
  justify-content: space-between;
  min-height: calc(100vh - 603px); // height of nav/ads/footer
  /* canvas{ display: none !important;} */
  &.home {
    .white-well:not(.indices) .instrument.index:nth-of-type(n+7){
      display: none;
    }
    .indices{
      .instrument.index:nth-of-type(n+8){
        display: none;
      }
    }
  }
  &.home .mover.index:nth-of-type(n+7){
    display: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .index {
      width: 100%;
    }
  }
  /* @media(max-width:650px){
    margin-top: 40px;
  } */
}

.grey-bg {
  background: #ededed;
  max-width: 100%;
  justify-content: center;
}

.white-well {
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px #ddd;
}

.main-content{
  .white-well{
    margin-bottom: 30px;
    padding-top: 19px;
  }
}

.border-left-grey{
  border-left: 1px solid #e3e3e3;
}

.toggle {
  display: flex;
  justify-content: flex-end;
  padding-right: 0.55rem;
  .btn {
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 5px;
    box-shadow: none !important;
    &:hover, &:focus, &.active{
      background-color: #F3F3F3 !important;
    }
    &.grid {
      background-image: url("./../assets/grid.svg");
    }
    &.list {
      background-image: url("./../assets/list.svg");
    }
  }
}

.list-page .toggle{
  justify-content: flex-start
}

.btn {max-width: 100%;}

h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index-link{
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  @include main-font();
  text-transform: uppercase;
  font-weight: 700;
  span{
    padding-left: 3px;
    font-size: 15px;
  }
}

@media(max-width:991px){
  .content.container{
    padding: 1rem;
  }
  .border-left-grey{
    border-left: none;
  }
}

@media(max-width: 400px){
  .content.container{
    padding: 0 0.5rem;
  }
  hr{
    margin-top: 0.5rem;
  }
}

@media(min-width: 1200px){
  .col-xl-4 {
    max-width: 384px;
  }
}

</style>
