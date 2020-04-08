<template>
    <div>
        <section id="architektur" class="team section-bg">
            <div class="container">

                <div class="section-title" data-aos="fade-up">
                    <h2>{{ $t('architectureTitle') }}</h2>
                </div>
                <div class="row content">
                    <div class="col-lg-6 order-1 order-lg-2 hero-img"
                         data-aos="fade-left" data-aos-delay="200">
                        <img src="assets/img/portfolio/Architektur.jpg"
                             class="img-fluid animated" alt="">
                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                        <p>{{ $t('architectureParagraph1') }}</p>
                        <ul>
                            <li><i class="ri-check-double-line"></i>{{ $t('architectureLi1') }}</li>
                            <li><i class="ri-check-double-line"></i>{{ $t('architectureLi2') }}</li>
                            <li><i class="ri-check-double-line"></i>{{ $t('architectureLi3') }}</li>
                            <li><i class="ri-check-double-line"></i>{{ $t('architectureLi4') }}</li>
                            <li><i class="ri-check-double-line"></i>{{ $t('architectureLi5') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Architecture"
    }
</script>

<style scoped>

</style>