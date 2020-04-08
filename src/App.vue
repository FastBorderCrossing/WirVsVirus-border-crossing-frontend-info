<template>
  <div id="app">
    <header id="header" class="fixed-top d-flex align-items-center bg-white">
      <div class="container d-flex align-items-center">

        <div class="logo mr-auto">
          <!--
          <h1 class="text-light">
              <a href="index.html"><span>Fast&nbsp;Border&nbsp;Crossing</span></a>
          </h1>
           -->
          <a href="index.html"><img src="./assets/fastborderx_logo_mit_text.svg" height="50" alt="" ></a>
        </div>
        <button @click="toggleMobileNav()" v-if="!mobileNav" type="button" class="mobile-nav-toggle d-lg-none">
          <i class="fas fa-bars"></i>
        </button>
        <nav class="nav-menu d-none d-lg-block">
        <Navigation @clicked="closeMobileNav()" v-if="!mobileNav"></Navigation>
        </nav>
      </div>
    </header>

    <main id="main">
      <router-view></router-view>
    </main>

    <footer id="footer">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 text-lg-left text-center">
            <div class="copyright">
              &copy; Copyright <strong>der Arbeitsgruppe FastBorderCrossing</strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#intro" class="scrollto">Home</a> <a href="#about"
                                                            class="scrollto">About</a> <a href="#">Privacy Policy</a> <a
                    href="#">Terms of Use</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    <a href="#" class="back-to-top"><i class="fas fa-angle-up"></i></a>
     <button @click="toggleMobileNav()" v-if="mobileNav" class="mobile-nav-toggle" type="button">
          <i class="fas fa-times text-white"></i>
      </button>
    <nav v-if="mobileNav" class="mobile-nav d-lg-none">
      <Navigation @clicked="closeMobileNav()"></Navigation>
    </nav>
    <div class="mobile-nav-overly" v-if="mobileNav"></div>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  export default {
    name: 'App',
    components: {
      Navigation
    },
    data () {
        return { 
            mobileNav: false
          }
      },
    methods: {
      toggleMobileNav: function() {
        this.mobileNav = !this.mobileNav;
      },
      closeMobileNav: function() {
        this.mobileNav = false;
      }
    }
  }
</script>

<style>
  @import './assets/css/main.css';
</style>
