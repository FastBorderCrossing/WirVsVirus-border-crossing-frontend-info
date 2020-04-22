<template>
    <div>
        <section id="hero">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center" id="hero-block">
                        <h1 v-html="$t('homeTitle')"></h1>
                        <p class="lead" v-html="$t('homeParagraph1')"></p>
                        <div>
                            <button type="button" class="btn btn-primary mr-2">Zur Fahrer-App</button>
                            <button type="button" class="btn btn-success">Zur Checkpoint-App</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 d-flex video-bg">                       
                         <a id="video-link" href="#" @click.prevent="showVideoModal = !showVideoModal">
                         <span class="circle d-flex align-items-center justify-content-center">
                            <i class="fas fa-play"></i>
                            <span class="circle circle-border"></span> 
                        </span>          
                                       
                        </a>
                    </div>
                </div>
                <div class="row mt-5 pt-5">
                    <div class="col-md-4 home-box">
                        <h4 class="pr-3" v-html="$t('homeBoxTitle1')"></h4>
                        <p class="pr-3" v-html="$t('homeBox1')"></p>
                    </div>
                    <div class="col-md-4 home-box">
                        <h4 v-html="$t('homeBoxTitle2')"></h4>
                        <p v-html="$t('homeBox2')"></p>
                    </div>
                    <div class="col-md-4 home-box">
                        <h4 v-html="$t('homeBoxTitle3')"></h4>
                        <p v-html="$t('homeBox3')"></p>
                    </div>
                </div>
                <hr />
                <div class="d-flex align-items-center justify-content-center">
                    <h2>Ein Projekt des <img src="@/assets/img/wirvsvirus_logo.svg" height="130"/></h2>
                    
                </div>
            </div>
        </section>

        <Solution></Solution>

        <AboutUs></AboutUs>
        <Contact></Contact>
        <VideoModal v-if="showVideoModal" @close="showVideoModal = false"></VideoModal>
    </div>
</template>


<script>
import Solution from "./Solution";

import AboutUs from "./AboutUs";
import Contact from "./Contact";
import VideoModal from "./VideoModal";
export default {
  name: 'Home',
  components: {
      
      Solution,
      AboutUs,
      Contact,
      VideoModal
  },
  data() {
    return {
        showVideoModal: false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


