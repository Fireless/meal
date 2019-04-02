
<template>
    <v-container >
     <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">have</v-btn>
            <v-btn flat color="orange">delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Homebody'
};
</script>

<style scoped>

</style>

