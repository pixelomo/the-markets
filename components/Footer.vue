<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-4">
              <NuxtLink to="/">
                <h1 class="title">
                  <img src="./../assets/logo-white.svg" alt="The Markets Logo">
                  The Markets
                </h1>
              </NuxtLink>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <b-navbar-nav>
                <NuxtLink class="nav-link" to="/">
                  Overview
                </NuxtLink>
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
              </b-navbar-nav>
            </div>
            <div class="col-lg-3 pr-0">
              <b-navbar-nav>
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
            </div>
          </div>
        </div>
        <div class="social col-lg-4 d-flex justify-content-end">
          <div>
            <a href="" class="social-icon">
              <img src="./../assets/twitter.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/fb.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/youtube.svg" alt="">
            </a>
            <a href="" class="social-icon">
              <img src="./../assets/instagram.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <div class="container d-flex justify-content-between subfooter">
      <p>&#169; {{ new Date().getFullYear() }} The Markets Inc. All rights reserved.</p>
      <div class="admin">
        <NuxtLink class="nav-link" to="/privacy-policy">
          Privacy Policy
        </NuxtLink>
        <NuxtLink class="nav-link" to="/terms-and-conditions">
          Terms &amp; Conditions
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">

footer{
  /* background: $blue; */
  background: #242424;
  padding: 40px 1rem 40px;
  color: #fff;
  @include title-font();
  .title {
    display: flex;
    align-items: center;
    font-size: 28px;
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
    width: 38px;
    margin-right: 10px;
  }
  .nav-link{
    color: #fff;
    padding: 0 0 5px;
    display: inline-block;
  }
  hr{
    margin: 40px auto 20px;
    background-color: #beddeb;
  }
}
.subfooter{
  /* color: #beddeb; */
  .admin {
    /* a.nav-link{color: #beddeb;} */
  }
}

@media(max-width: 1199px){
  footer .title {
    font-size: 24px;
  }
}

@media(max-width: 991px){
  footer {
    padding-top: 30px;
    .container{
      max-width: 100%;
    }
    .title {
      margin-bottom: 2rem;
    }
    .social {
      margin-top: 1rem;
      justify-content: flex-start !important;
    }
  }
}

@media(max-width: 767px){
  footer{
    padding: 30px 0;
    .title{
      margin-bottom: 1rem;
    }
    hr{margin-top: 20px;}
  }
  .subfooter {
    flex-direction: column !important;
    font-size: 12px;
    padding: 0 15px;
  }
}

</style>
