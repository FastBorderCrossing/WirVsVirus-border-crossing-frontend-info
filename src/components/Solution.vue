<template>
    <div>
        <section id="loesung" class="py-5 background-light-blue">
            <div class="container">
                <div class="section-title pb-3">
                    <h2 v-html="$t('solutionTitle')"></h2>
                </div>
                <div class="row pb-3">
                    <div class="col-lg-6 d-flex justify-content-center">
                        <p v-html="$t('solutionParagraph1')"></p>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center">

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 pb-3">
                        <span class="circle-with-text mb-3">1</span>
                        <h5 v-html="$t('solutionStepTitle1')"></h5>
                        <p v-html="$t('solutionStepText1')"></p>
                        <ul class="fa-ul" v-html="$t('solutionStepList1')">
                        </ul>
                    </div>
                    <div class="col-lg-6 pb-5">
                        <span class="circle-with-text mb-3">2</span>
                        <h5 v-html="$t('solutionStepTitle2')"></h5>
                        <p v-html="$t('solutionStepText2')"></p>
                        <img src="@/assets/img/qr-code.svg" height="130"/>
                    </div>
                    <div class="col-lg-6 pb-5">
                        <span class="circle-with-text mb-3">3</span>
                        <h5 v-html="$t('solutionStepTitle3')"></h5>
                        <p v-html="$t('solutionStepText3')"></p>
                        <ul class="fa-ul" v-html="$t('solutionStepList3')">
                        </ul>
                    </div>
                    <div class="col-lg-6 pb-5">
                        <span class="circle-with-text mb-3">4</span>
                        <h5 v-html="$t('solutionStepTitle4')"></h5>
                        <p v-html="$t('solutionStepText4')"></p>
                        <ul class="fa-ul" v-html="$t('solutionStepList4')">
                        </ul>
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