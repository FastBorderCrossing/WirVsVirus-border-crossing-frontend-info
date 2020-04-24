<template>
    <div>
        <section id="driver-app" class="py-5">
            <div class="container">

                <div class="section-title pb-3">
                    <h2 v-html="$t('driverAppTitle')"></h2>
                </div>
                <div class="row content">
                    <div class="col-lg-8">
                        
                        <p class="pb-3" v-html="$t('driverAppParagraph')"></p>

                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-globe-europe"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('driverAppFeature1')"></h6>
                            </div>
                        </div>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-coffee"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('driverAppFeature2')"></h6>
                            </div>
                        </div>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-qrcode"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('driverAppFeature3')"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mobile-bg driver-bg">
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