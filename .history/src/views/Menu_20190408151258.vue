<template>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <div>SumPrice = <span>{{SumPrice}}</span></div>
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
                    <v-btn icon v-on:click="addmealAction(card)">
                      <v-icon>mdi-silverware</v-icon>
                    </v-btn>
                    <v-btn icon @click="deleteAction(card)">
                      <v-icon>mdi-close-box-outline </v-icon>
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
        <v-btn flat color="teal" @click.stop="list1 = !list1"> 
        <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn color="black">Pay</v-btn>


      </v-bottom-nav>
    </v-card>
  
    <v-navigation-drawer
      class="blue"
      hidden-sm-and-up
      absolute
      v-model="list1"
      temporary
      app
      >
      <v-list>
        <v-list-tile-content>{{SumPrice}}</v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
      </v-flex>


      
    </v-layout>

      
       
    
</template>

<script>
/***
 * current user ?
 * 
 * active cart
 * [
 *  ...
 * 
 * ] 
 * 
 ****/

export default {
    name: 'Menu',
    data () {
        return{
            selected:[],
            username: 'username',
            cart: [], // meal in the cart
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
//            SumPrice: 0,
            activeBtn: 1,
            showNav: true
        }
    },
    computed : {
      CartCount: function(){
        return this.cart.length;
      },
      SumPrice: function(){
        const c = this.cart;
        var sum = 0;

        for(var i=0,len=c.length;i<len;i++) {
          const price = c[i].price.replace('$','')
          sum += (price*1);
        }

        // vuex.state.tax percent
        // sum += sum * (vuex.state.tax)
        return sum;
      },
      addmeal :function(a, b, c ) {

        console.log("a = " + a)
        console.log("b = " + b)
        console.log("c = " + c)

        this.SumPrice +=item.price 
        return SumPrice 
      }
    },
    methods :{
      addmealAction: function(card) {
        this.cart.push(card)
//        this.SumPrice +=item.price 
//        return SumPrice 

        // SumPrice logical here!！
      },
      deleteAction: function(card) {
        this.cart.pop()
      }
    }
}
</script>

<style>
.adj{
    float: right;
}
</style>

