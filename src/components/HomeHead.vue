<template>
  <v-container grid-list-xl> 
     <v-navigation-drawer
      class="blue lighten-3"
      hidden-sm-and-up
      v-model="drawer"
      absolute
      temporary
      >
      <v-list>
        <v-list-tile
          v-for="item in drawers"
          :key="item.title"
          
        >
          <v-list-tile-action>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title><router-link class="router" :to="{path:item.route}">{{ item.title }}</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

        
      <v-toolbar color="blue">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
          <v-toolbar-title>
           <v-btn flat class="hidden-sm-and-down nav-menu" to="Menu">MENU</v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        <v-toolbar-items v-for="item in items" :key="item.text" class="hidden-sm-and-down">
           <v-btn flat>{{ item.text }}</v-btn>
        </v-toolbar-items>
     </v-toolbar>
     </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Login'
        },
        {
          text: 'Register'
        }
      ],
      drawers: [
        { title: 'Home', icon: 'mdi-home',route: "/" },
        { title: 'Menu', icon: 'mdi-tor', route: '/Menu' },
        { title: 'Admin', icon: 'mdi-tree' }
      ],
      drawer: null
    }
  }
}
</script>

<style scoped>
.router{
  text-decoration: none;
}
</style>



