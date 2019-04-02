<template>
     <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
        <v-flex xs12 sm5 md5 offset-xs0 offset-lg3  >
          <v-card light>
             <v-card-text>Tomato</v-card-text>
             <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>  
             
            <v-card>Price:123$
             <v-spacer></v-spacer>
             <v-checkbox v-model="selected" label="John" value="Jhon" class="adj"></v-checkbox>
             </v-card>
          </v-card>
        </v-flex>
        <v-flex xs12 sm5 md5 offset-xs0 offset-lg3 >
          <v-card light>
            <v-card-text>AND</v-card-text>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>  
            <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
          </v-card>
        </v-flex>

        <v-flex xs12 sm5 md5 offset-xs0 offset-lg3 >
          <v-card dark >
            <v-card-text>photao</v-card-text>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>  
            <v-checkbox v-model="selected" label="Okk" value="Okk"></v-checkbox>
          </v-card>
        </v-flex>

        <v-flex xs12 sm5 md5 offset-xs0 offset-lg3 >
          <v-card dark >
            <v-list>{{ selected }}</v-list>
          </v-card>
        </v-flex>
      </v-layout>
        <!-- <v-layout
            column 
            class="px-6 pb-3"      
        >
         <v-card>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>  
          <v-checkbox v-model="selected" label="John" value="Jhon" ></v-checkbox>
        </v-card>
     </v-layout>

     <v-layout class="px-6 pb-3"> 
        <v-card>
            <div class="subheading">Matching</div>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>  
            <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
        </v-card>
     </v-layout>

     <v-layout>  
        <v-card>
            <v-list>{{ selected }}</v-list>
        </v-card>
     </v-layout>
       -->
      
      
       
    </v-container>
</template>

<script>
export default {
    name: 'Menu',
    data () {
        return{
            selected:[]
        }
    }
}
</script>

<style>
.adj{
    float: right;
}
</style>

