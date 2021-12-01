<template>
  <div class="Checker">
    <check />
  </div>
</template>

<script>
// @ is an alias to /src
import check from "@/components/check.vue"

export default {
  name: "Checker",
  components: {
    check,
  },
}
</script>
