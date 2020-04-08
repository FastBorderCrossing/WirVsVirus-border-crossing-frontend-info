<template>
    <div>
        <section id="about" class="about section-bg">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2>{{ $t('aboutTitle') }}</h2>
                </div>
                <div class="row content">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                        <p>{{ $t('aboutParagraph1') }}</p>
                        <p><i>{{ $t('aboutParagraph2') }}</i></p>
                        <p>{{ $t('aboutParagraph3') }}</p>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <img src="@/assets/img/winners.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>

</style>