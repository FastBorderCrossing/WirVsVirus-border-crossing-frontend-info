<template>
    <div>
        <section id="checkpoint-app" class="py-5 background-light-blue">
            <div class="container">
                <div class="section-title row pb-3">
                    <div class="col-lg-8 order-md-2">
                         <h2 v-html="$t('checkpointAppTitle')"></h2>
                    </div>
                    <div class="col-lg-4 order-md-1">
                       
                    </div>
                </div>
                <div class="row content">
                    <div class="col-lg-8 order-md-2">

                        <p class="pb-3" v-html="$t('checkpointAppParagraph')"></p>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-tasks"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('checkpointAppFeature1')"></h6>
                            </div>
                        </div>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-notes-medical"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('checkpointAppFeature2')"></h6>
                            </div>
                        </div>                        
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-database"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('checkpointAppFeature3')"></h6>
                            </div>
                        </div> 
               
                    </div>
                    <div class="col-lg-4 mobile-bg checkpoint-bg order-md-1">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import carousel from 'vue-owl-carousel'
    export default {
        name: "CheckpointApp",
        components: {
            // carousel 
        }
    }
</script>

<style scoped>

</style>