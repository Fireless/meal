<template>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <div>SumPrice = <span>{{SumPrice}}</span></div>
        <!-- <v-flex v-for="item in cart" :key="index">
         <v-list>
           <span>{{ cart.name }}</span>
         </v-list>
       </v-flex> -->
        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>. 2
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
                     <span>{{ mealCount(card) }}</span>
                    <v-spacer></v-spacer>
                    <v-btn icon v-on:click="addmealAction(card)">
                      <v-icon>mdi-silverware</v-icon>
                    </v-btn>
                    <v-btn icon v-on:click="removemealAction(card)">
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
      
      <div>SumPrice = <span>{{SumPrice}}</span></div>
        <v-btn flat color="teal" @click.stop="cartx = !cartx"> 
        <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn color="black">Pay</v-btn>


      </v-bottom-nav>
    </v-card>
  
    <v-navigation-drawer
      class="blue"
      hidden-sm-and-up
      absolute
      v-model='cartx'
      temporary
      app
      >
     <v-list>
       <v-list-tile>
         <v-list-tile-title>
         {{SumPrice}}
         </v-list-tile-title>
       </v-list-tile>
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
import _ from 'lodash'
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
            showNav: true,
            cartx: 1,
      mealCount: function(m){
        console.log('m.name = ' + m.name)
        const vc = this; 
        const group = _.groupBy(this.cart, "name")
        const f = group[m.name];

        return f?f.length:'';

      },

        }
    },
    computed : {
      CartCount: function(){
        return this.cart.length;
      },
      SumPrice: function(){
        const c = this.cart;
        var sum = 0;

console.log('sum = ' + sum)

        for(var i=0,len=c.length;i<len;i++) {
          const price = c[i].price.replace('$','')
          sum += (price*1);
        }

console.log('sum = ' + sum)
        // vuex.state.tax percent
        // sum += sum * (vuex.state.tax)

        return sum;
      },
      // addmeal :function(a, b, c ) {

      //   console.log("a = " + a)
      //   console.log("b = " + b)
      //   console.log("c = " + c)

      //   this.SumPrice +=item.price 
      //   return SumPrice 
      // }
    },
    methods :{
      addmealAction: function(card) {
        this.cart.push(card)
//        this.SumPrice +=item.price 
//        return SumPrice 

        // SumPrice logical here!！
      },
       removemealAction: function(card) {
        let exist = _.find(this.cart, { name: card.name })

        if( exist ){
          console.log( 'will be remove ' + card.name )

//          let removed = 0
//
//          _.remove(this.cart, (c) => {
//            if( c.name === card.name ){
//              removed ++;
//            }
//            return removed === 1;
//          })


          const index = this.cart.findIndex(function(val,idx){
            return val.name ===  card.name;
          })
          if( typeof index !== 'undefined'){
            this.cart.splice(index, 1)

          }

//          exist = _.find(this.cart, { name: card.name })
//          if(exist === 0){
//            alert('this is logical error, not remove ' + card.name )
//          }
        }

      }
    }
     
}
</script>

<style>
.adj{
    float: right;
}
</style>

