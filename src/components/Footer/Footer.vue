<template>
  <FoSection bg="bg-orange-50">
    <div class="grid grid-cols-2 ml-10 py-0 px-12">
      <div class="p-16 flex items-center justify-center flex-col">
        <div>
          <LogSvg :logSvg="true"></LogSvg>
          <p class="mt-4">
            Join millions of people who organize work and life with Todoist.
          </p>
          <div class="flex my-6">
            <LogSvg :twitter="true" size="w-7 mx-2 text-zinc-500 hover:text-zinc-800 h-7" />
            <LogSvg :youtube="true" size="w-7 mx-2 text-zinc-500 hover:text-zinc-800 h-7" />
            <LogSvg :facebook="true" size="w-7 mx-2 text-zinc-500 hover:text-zinc-800 h-7" />
            <LogSvg :instagram="true" size="w-7 mx-2 text-zinc-500 hover:text-zinc-800 h-7" />
          </div>
        </div>
      </div>
      <div class="flex justify-between p-16 text-lg">
        <div>
          <p class="uppercase">features</p>
          <ListItems :items="features"></ListItems>
        </div>
        <div>
          <p class="uppercase">resources</p>
          <ListItems :items="Resources"></ListItems>
        </div>
        <div>
          <p class="uppercase">company</p>
          <ListItems :items="company"></ListItems>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-20 py-4 bg-slate-200">
      <div>
        <a href="#">security</a>| <a href="#">Privacy</a>|
        <a href="#">Terms</a>
        &copy; Doist Inc.
      </div>
      <div>
        <Selection/>
      </div>
    </div>
  </FoSection>
</template>

<script>
import FoSection from "./FoSection.vue";
import LogSvg from "../helpers/LogSvg.vue";
import ListItems from "../helpers/listItems.vue";
import Selection from "../helpers/Selection.vue"
export default {
  name: "Footer",
  components: {
    FoSection,
    LogSvg,
    ListItems,
    Selection,
  },
  data() {
    return {
      features: ["How it works", "For teams", "Pricing", "Templates"],
      Resources: [
        "Download Apps",
        "Help Center",
        "Productiviy Methods",
        "Refer a friend",
        "Integrations",
        "Channel Partners",
        "Devoloper API",
        "Status",
      ],
      company: ["About Us", "we are hiring!", "Blog", "Press", "Twist"],
    };
  },
};
</script>

<style>
</style>