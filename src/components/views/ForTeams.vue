<template>
  <div>
    <ForTeamsText/>
    <TeamImg/>
    <SecTeamImg/>
  </div>
</template>

<script>
import ForTeamsText from "../ForTeamsViews/ForTeamsText.vue"
import TeamImg from "../ForTeamsViews/TeamImg.vue"
import SecTeamImg from "../ForTeamsViews/SecTeamImg.vue"
export default {
    name: "ForTeams",
    components: {ForTeamsText, TeamImg, SecTeamImg}
}
</script>

<style>

</style>