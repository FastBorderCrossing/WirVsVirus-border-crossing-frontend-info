<template>
    <div>
        <section id="team" class="py-5">
            <div class="container">
                <div class="section-title">
                    <h2 v-html="$t('teamTitle')"></h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p v-html="$t('teamParagraph1')"></p>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-lg-3 col-md-6" v-for="member in team" :key="member.name">
                        <div class="member" data-aos="fade-up" data-aos-delay="100">
                            <div class="member-img">
                                <img src="@/assets/img/team/team.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="member-info">
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
                    'role':'Grafik und Design',
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
                    'role':'Datenbank',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Michael Siebers',
                    'role':'Project Lead',
                    'img':'team.jpg',
                    },
                    {
                    'name':'Roy Brannath',
                    'role':'Frontend und Backend',
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
