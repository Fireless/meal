<template>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        
        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex
                v-for="card in meal"
                :key="card.name"
                v-bind="{ [`xs${card.flex}`]: true }"
              >
                <v-card>
                  <v-img
                    :src="card.pic"
                    height="200px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.name"></span>
                        </v-flex>
                       

                      </v-layout>
                    </v-container>
                  </v-img>
  
                  <v-card-actions>
                     Price: {{ card.price}}
                    <v-spacer></v-spacer>
                    <v-btn icon @click="addmeal(cart)">
                      <v-icon>mdi-silverware</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-close-box-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-fire</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
<!--菜单列表-->
      <v-card
      class="hide-overflow"
      height="200px"
      app
    >
    
        <v-bottom-nav
        :active.sync="activeBtn"
        :value="showNav"
        absolute
        color="transparent"
      >
        <v-btn flat color="teal" @click.stop="cart = !cart"> 
        <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn color="black">Pay</v-btn>


      </v-bottom-nav>
    </v-card>
  
    <v-navigation-drawer
      class="blue"
      hidden-sm-and-up
      

      absolute
      temporary
      app
      >
      <v-list>
        <v-list-tile-content>{{SumPrice}}</v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
      </v-flex>


      
    </v-layout>

        <!-- <v-layout row wrap>
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
      </v-layout> -->
       
      
      
       
    
</template>

<script>
export default {
    name: 'Menu',
    data () {
        return{
            selected:[],
            meal:[
              {name: 'tea', price: '10$', pic:'https://picsum.photos/300/200?random${index * 5 + 10}',flex:6,choose: false},
              {name: 'meet', price: '50$', pic:'https://picsum.photos/300/200?random${index * 5 + 9}',flex:6,choose: false},
              {name: 'cream', price: '30$', pic:'https://picsum.photos/300/200?random${index * 5 + 8}',flex:6,choose: false},
              {name: 'crea', price: '30$', pic:'https://picsum.photos/300/200?random${index * 5 + 1}',flex:6,choose: false},
              {name: 'cre', price: '30$', pic:'https://picsum.photos/300/200?random${index * 5 + 17}',flex:6,choose: false},
              {name: 'cr', price: '30$', pic:'https://picsum.photos/300/200?random${index * 5 + 5}',flex:6,choose: false},
            ],
            mune:[
              {}
            ],
            SumPrice: 0,
            activeBtn: 1,
            showNav: true
        }
    },
    computed : {
      addmeal :function(a, b, c ) {

        console.log("a = " + a)
        console.log("b = " + b)
        console.log("c = " + c)

        this.SumPrice +=item.price 
        return SumPrice 
      }
    }
}
</script>

<style>
.adj{
    float: right;
}
</style>

