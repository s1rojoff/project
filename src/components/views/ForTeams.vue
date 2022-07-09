<template>
  <div>
    <ForTeamsText/>
    <TeamImg/>
    <SecTeamImg/>
    <ThirdTeamImg/>
  </div>
</template>

<script>
import ForTeamsText from "../ForTeamsViews/ForTeamsText.vue"
import TeamImg from "../ForTeamsViews/TeamImg.vue"
import SecTeamImg from "../ForTeamsViews/SecTeamImg.vue"
import ThirdTeamImg from "../ForTeamsViews/ThirdTeamImg.vue"
export default {
    name: "ForTeams",
    components: {ForTeamsText, TeamImg, SecTeamImg, ThirdTeamImg}
}
</script>

<style>

</style>