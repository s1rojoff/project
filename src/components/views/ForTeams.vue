<template>
  <div>
    <ForTeamsText/>
    <TeamImg/>
    <SecTeamImg/>
    <ThirdTeamImg/>
    <FourthTeamImg/>
    
  </div>
</template>

<script>
import ForTeamsText from "../ForTeamsViews/ForTeamsText.vue"
import TeamImg from "../ForTeamsViews/TeamImg.vue"
import SecTeamImg from "../ForTeamsViews/SecTeamImg.vue"
import ThirdTeamImg from "../ForTeamsViews/ThirdTeamImg.vue"
import FourthTeamImg from "../ForTeamsViews/FourthTeamImg.vue"
export default {
    name: "ForTeams",
    components: {ForTeamsText, TeamImg, SecTeamImg, ThirdTeamImg, FourthTeamImg}
}
</script>

<style>

</style>