<template>
    <div>
        <section id="loesung" class="py-5">
            <div class="container">
                <div class="section-title">
                    <h2 v-html="$t('solutionTitle')"></h2>
                    <p class="lead" v-html="$t('solutionSubtitle')"></p>
                </div>
                <div class="row">
                    <div class="col-lg-6 d-flex justify-content-center">
                        <p v-html="$t('solutionParagraph1')"></p>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center">

                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <span class="circle-with-text mb-3">1</span>
                        <h5 v-html="$t('solutionStepTitle1')"></h5>
                        <p v-html="$t('solutionStepText1')"></p>
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Fahrer und Passagiere</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Unternehmen</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Ladung</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Fahrzeug</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Tour</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <span class="circle-with-text mb-3">2</span>
                        <h5 v-html="$t('solutionStepTitle2')"></h5>
                        <p v-html="$t('solutionStepText2')"></p>
                        <img src="@/assets/img/qr-code.svg" height="130"/>
                    </div>
                    <div class="col-lg-6">
                        <span class="circle-with-text mb-3">3</span>
                        <h5 v-html="$t('solutionStepTitle3')"></h5>
                        <p v-html="$t('solutionStepText3')"></p>
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Wer überquert die Grenze?</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Was wird transportiert?</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Welche Route verfolgt das Fahrzeug?</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <span class="circle-with-text mb-3">4</span>
                        <h5 v-html="$t('solutionStepTitle4')"></h5>
                        <p v-html="$t('solutionStepText4')"></p>
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Infektionsschutz für Grenzbeamte und Fahrer</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Vermeidung von langen Staus durch schnelle Grenzkontrolle</li>
                            <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Wichtige Versorgungsgüter können prioritär behandelt werden</li>
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