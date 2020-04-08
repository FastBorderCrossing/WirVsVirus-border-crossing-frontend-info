<template>
    <div>
        <section id="contact" class="contact">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2 v-html="$t('contactTitle')"></h2>
                </div>
                <div class="row content">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                        <div class="contact-about">
                            <h3 v-html="$t('contactGeneralTitle')"></h3>
                            <p v-html="$t('contactGeneralParagraph1')"></p>
                            <div class="social-links">
                                <i v-html="$t('infoEmail')"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up"
                         data-aos-delay="300">
                        <div class="contact-about">
                            <h3 v-html="$t('contactPressTitle')"></h3>
                            <p v-html="$t('contactPressParagraph1')"></p>
                            <div class="social-links">
                                <i v-html="$t('pressEmail')"></i>
                            </div>
                            <p v-html="$t('contactPressParagraph2')"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>