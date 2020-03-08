<template>
  <div>
    <v-expansion-panels accordion :value="0">
      <HerbsAndDrugsPanel></HerbsAndDrugsPanel>
    </v-expansion-panels>
    <SearchResult></SearchResult>
  </div>
</template>

<script>
import HerbsAndDrugsPanel from "@/components/HerbsAndDrugsPanel";
import SearchResult from "@/components/SearchResult";

export default {
  name: "Search",
  components: {
    HerbsAndDrugsPanel,
    SearchResult
  }
};
</script>
