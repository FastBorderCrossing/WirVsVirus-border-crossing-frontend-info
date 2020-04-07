<template>
  <div id="app">
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">

        <div class="logo mr-auto">
          <!--
          <h1 class="text-light">
              <a href="index.html"><span>Fast&nbsp;Border&nbsp;Crossing</span></a>
          </h1>
           -->
          <a href="index.html"><img src="./assets/bc-logo.svg" alt="" class="img-fluid"></a>
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active"><a href="#header">Home</a></li>
            <li><a href="#about">Über&nbsp;uns</a></li>
            <li><a href="#loesung">Unsere&nbsp;Lösung</a></li>
            <li><a href="#architektur">Architektur</a></li>
            <li class="drop-down"><a href="">Anwendungen</a>
              <ul>
                <li><a target="_blank" href="https://www.fastbordercrossing.org">Fahrer-Frontend</a></li>
                <li><a target="_blank" href="https://checkpoint.fastbordercrossing.org">Checkpoint-Frontend</a></li>
              </ul>
            </li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
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
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
  @import './assets/css/main.css';
</style>
