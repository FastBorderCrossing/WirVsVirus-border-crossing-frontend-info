<template>
    <div>
        <section id="loesung" class="portfolio">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2 v-html="$t('solutionTitle')"></h2>
                    <p><img src="@/assets/fastborderx_logo_mit_text.svg" alt="" width="600" class="img-fluid"></p>
                </div>
                <div class="row content">
                    <div class="col-lg-6 d-flex justify-content-center">
                        <p v-html="$t('solutionParagraph1')"></p>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="https://driver.fastbordercrossing.org" class="btn-get-started scrollto" v-html="$t('driverAppTitle')"></a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <a href="https://checkpoint.fastbordercrossing.org" class="btn-get-started scrollto" v-html="$t('checkpointAppTitle')"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Solution"
    }
</script>

<style scoped>

</style>