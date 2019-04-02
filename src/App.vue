<template>
  <v-app>
    <HomeHead></HomeHead>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomeHead from '@/components/HomeHead'

export default {
  name: 'App',
  components: {
    HomeHead
  },
  data () {
    return {
      //
    }
  }
}
</script>
