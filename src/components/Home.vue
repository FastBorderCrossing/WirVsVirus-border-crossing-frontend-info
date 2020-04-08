<template>
    <div>
        <section id="hero" class="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 v-html="$t('homeTitle')"></h1>
                        <h2 v-html="$t('homeParagraph1')"></h2>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img">
                        <!--  img src="assets/img/hero-img.png" class="img-fluid animated" alt="" -->
                        <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/HGfk2suwAlI" loop="1"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        <AboutUs></AboutUs>
        <Solution></Solution>
        <Architecture></Architecture>
        <Team></Team>
        <Contact></Contact>
    </div>
</template>

<script>
import AboutUs from "./AboutUs";
import Solution from "./Solution";
import Architecture from "./Architecture";
import Team from "./Team";
import Contact from "./Contact";
export default {
  name: 'Home',
  components: {
      AboutUs,
      Solution,
      Architecture,
      Team,
      Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
