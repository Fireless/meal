<template>
    <v-app>
     <Homebody></Homebody>

    
    </v-app>
</template>

<script>
import HomeHead from '@/components/HomeHead'
import Homebody from '@/components/Homebody'

export default {
  name: 'Home',
  components: {
    HomeHead,
    Homebody
  }
}
</script>
