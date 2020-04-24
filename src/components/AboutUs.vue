<template>
    <div>
        <section id="about" class="py-5 background-light-blue">
            <div class="container">
                <div class="section-title pb-3">
                    <h2 v-html="$t('aboutTitle')"></h2>
                </div>
                <div class="row pb-3">
                    <div class="col-md-8">
                        <p v-html="$t('aboutParagraph1')"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="member in team" :key="member.name">
                        <div class="team-member-box d-flex">
                            <div class="member-info w-100 justify-content-center align-self-center">
                                <h4>{{member.name}}</h4>
                                <span>{{member.role}}</span>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Team",
        data () {
            return {
                team: [
                    {
                    'name':'André Sünnemann',
                    'role':'Backend',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Ann-Kathrin Kotenbeutel',
                    'role':'Grafics & Design',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Christoph Strecker',
                    'role':'Product Management',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Ferdinand Martini',
                    'role':'Frontend',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Jens Fischer',
                    'role':'Database',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Michael Siebers',
                    'role':'Project Lead',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Roy Brannath',
                    'role':'Frontend & Backend',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Shéhérazade Benzerga',
                    'role':'Product Managment',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Timo Schubert',
                    'role':'Product Managment',
                    'img':'team.jpg',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
