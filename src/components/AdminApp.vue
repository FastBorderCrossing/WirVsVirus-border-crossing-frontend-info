<template>
    <div>
        <section id="admin-app" class="py-5">
            <div class="container">
                <div class="section-title pb-3">
                    <h2 v-html="$t('adminAppTitle')"></h2>
                </div>
                <div class="row content">
                    <div class="col-lg-8">
                        <p class="pb-3" v-html="$t('adminAppParagraph')"></p>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-file-invoice"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('adminAppFeature1')"></h6>
                            </div>
                        </div> 
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-gavel"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('adminAppFeature2')"></h6>
                            </div>
                        </div>
                        <div class="row mb-5 d-flex">
                            <div class="col-auto justify-content-center align-self-center">
                                <span class="app-feature-with-icon"><i class="fas fa-chart-area"></i></span>
                            </div>
                            <div class="col justify-content-center align-self-center">
                                <h6 v-html="$t('adminAppFeature3')"></h6>
                            </div>
                        </div>                        
               
                    </div>
                    <div class="col-lg-4 mobile-bg infographic-bg">
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