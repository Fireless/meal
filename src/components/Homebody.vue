<template>
   <v-layout>
      <v-flex xs10 sm6 offset-sm3 offset-xs1 >
        <router-link to="/menu">
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="n in 9"
                :key="n"
                xs4
                d-flex
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        </router-link>
      </v-flex>
    </v-layout>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'Homebody',
    // data () {
    //   return {
    //     info: ''
    //   }
    // },
    // mounted () {
    //   Axios
    //   .get( 'https://cnodejs.org/api/v1/topics')
    //   .then(Response => (this.info = Response))
    //   .catch(error => console.log(error))
    // }
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
