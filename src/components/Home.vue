<template>
    <div>
        <section id="hero">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center" id="hero-block">
                        <h1 v-html="$t('homeTitle')"></h1>
                        <p class="lead" v-html="$t('homeParagraph1')"></p>
                        <div>
                            <a target="_blank" href="https://driver.fastbordercrossing.org" type="button" class="btn btn-primary mr-2" v-html="$t('linkTextDriverApp')"></a>
                            <a target="_blank" href="https://checkpoint.fastbordercrossing.org" type="button" class="btn btn-success" v-html="$t('linkTextCheckpointApp')"></a>
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
                    <h2><span v-html="$t('projectOf')"></span><img src="@/assets/img/wirvsvirus_logo.svg" height="130"/></h2>
                    
                </div>
            </div>
        </section>

        <Solution></Solution>
        <DriverApp></DriverApp>
        <CheckpointApp></CheckpointApp>
        <AdminApp></AdminApp>
        <AboutUs></AboutUs>
        <Contact></Contact>
        <VideoModal v-if="showVideoModal" @close="showVideoModal = false"></VideoModal>
    </div>
</template>


<script>
import Solution from "./Solution";
import DriverApp from "./DriverApp";
import CheckpointApp from "./CheckpointApp";
import AdminApp from "./AdminApp";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import VideoModal from "./VideoModal";
export default {
  name: 'Home',
  components: {
      
      Solution,
      DriverApp,
      CheckpointApp,
      AdminApp,
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


