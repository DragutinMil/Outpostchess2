<template>
    <div class="profile">
        <SideBar />
        
        <div class="right-profile">
             <div></div>  
             <div id="right-middle">
                  <Searchpart />
                 <div id="middle2">
                      <div>
                          <img id="profile-pic" src="../assets/magnus.png" alt="">
                      </div>
                      <div id="middle2-1">
                          <p id="profile-name">Magnus Carlsen</p>
                          <div class="profile-info1">
                              <div class="profile-info1-1">
                                  <img src="../assets/Vector-1.svg" alt="">  
                                  <p>Chicago</p>
                              </div>
                              <p class="padd-text">28 years old</p>
                              <p class="padd-text" style="color:#FFFFFF">Male</p>
                          </div>
                          <div class="profile-info1-1">
                              <p style="margin:0;padding:0">Federation:</p>
                              <img id="middle2-flag" src="../assets/flag.png" alt="">
                          
                              <p style="margin:0;padding:0">Fide ID:</p>
                              <p style="margin:0;padding:0 0 0 10px  ;color:#C8A07D">942553</p>
                          </div>
                      </div>
                      <div id="middle2-button-container">
                          <button class="middle2-buttons"  type="button" >Connect</button>
                          <button class="middle2-buttons" type="button" >Message</button>
                      </div>
                 </div>
                 <div id="middle3">
                      <div class="middle3-1" >
                          <p style="color:#6F7381">Title:</p>
                          <div class="titles">GM</div>
                          <div class="titles">IO</div>
                          <div class="titles">FA</div>
                          <div class="titles">FI</div>
                      </div>
                      <div class="middle3-1">
                           <p style="color:#6F7381">Rating:</p>
                          <div class="ratings"><p class="text-ratings">Standard:</p> 1534 </div>
                          <div class="ratings"><p class="text-ratings">Rapid:</p> 2543</div>
                          <div class="ratings"><p class="text-ratings">Blitz:</p> 1842</div>
                             
                      </div>
                 </div>
                 <div id="middle4">
                     <div class="middle3-1">
                       <router-link  to="/profile/chesscv" @click="cvdairycal1()" > <p  v-bind:class="{'middle4-1':isActive,'ratings':clickActive1,}"  > CHESS CV</p></router-link> 
                        <router-link  to="/profile/chessdiary"> <p v-bind:class="{'middle4-1':isActive,'ratings':clickActive2,}" @click="cvdairycal2()" >CHESS DIARY</p></router-link> 
                        <router-link   to="/profile/"><p v-bind:class="{'middle4-1':isActive,'ratings':clickActive3,}" @click="cvdairycal3()"  >CALENDAR</p></router-link> 
                     </div>
                      <div class="middle3-1">
                        <p class="middle4-1" style="color:#6F7381">Player</p>
                        <p class="middle4-1" style="color:#6F7381">Admin</p>
                        <p class="middle4-1"  style="color:#6F7381">Organizer</p>
                        <p class="middle4-1"  style="color:#6F7381">Arbiter</p>
                        <p class="middle4-1"  style="color:#6F7381">Trainer</p>
                        <p class="middle4-1"  style="color:#6F7381">Other</p>
                     </div>
                 </div>
                 <div id="middle5">
                         <div id="middle5-left">
                                  
                              <router-view/>

                         </div>
                      <div>
                          <div class="middle5-right-grid">
                              <div>
                                  <p class="middle5-text">Current club:</p>
                                  <p class="gold">Jelica PEP, Jelica PEP Woman</p>
                              </div>
                              <div>
                                  <p class="middle5-text">Current league:</p>
                                  <p class="gold">Name</p>
                              </div>
                          </div>
                          <div class="middle5-right-grid">
                              <div>
                                    <p class="middle5-text">Currently playing:</p>
                                    <p class="gold">www.chessbomb/prvenstvosrbije</p>
                              </div>
                              <div>
                                  <p class="middle5-text">Player form:</p>
                                  <div id="form-middle5">
                                        <img style="height:25px" src="../assets/form.svg" alt="" >
                                        <p style="margin:0;padding:0">Weak</p>
                                  </div>
                              </div>
                          </div>
                          <div class="middle5-right-grid">
                              <div>
                                  <p class="middle5-text">Open to new engagements</p>
                                  <p class="gold2">Club</p>
                                  <p class="gold2">Tournaments</p>
                              </div>
                              <div>
                                  <p class="middle5-text">Current club:</p>
                                  <p class="gold">Jelica PEP, Jelica PEP Woman</p>
                              </div>
                          </div>
                          <div id="middle5-right-end">
                              <p class="middle5-text">Desired club compensation</p>
                          </div>
                      </div>
                 </div>
             </div>    
             <div></div>
        </div>
    </div>
    
</template>
 <script>

import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'
import Calendar from './profile/Calendar.vue'

export default {
  name: 'Profile',
  components: {
    SideBar,
    Calendar,
    Searchpart
  },
  data () {
      return {
         isActive:true,
         clickActive1:false,
         clickActive2:false,
         clickActive3:true,       
      }
},
mounted(){
  fetch('https//sah.fly.dev/api/v2/test', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
    "authorization":`Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify( { param1: "....", param2: "..." } )
})
.then(response => response.json())
.then(data => console.log(data));

},
methods:{
    cvdairycal1: function(){
      this.clickActive1=true;
      this.clickActive2=false;
      this.clickActive3=false;
    } ,
     cvdairycal2: function(){
      this.clickActive1=false;
      this.clickActive2=true;
      this.clickActive3=false;
    } ,
    cvdairycal3: function(){
      this.clickActive1=false;
      this.clickActive2=false;
      this.clickActive3=true;
    } ,
  }
}
 </script>
<style scoped>

hr{
    border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%
}
.profile{
    display:grid;
    grid-template-columns: 259px auto;
}  

.right-profile{
   background-color:  #171819;
   display:grid;
    grid-template-columns: minmax(15px, auto)  minmax(15px, auto);
    background-color: #1B1C1D;
}

.left-sidetext{
    padding-left:15px;
    cursor: pointer;
}
.diffcol{
    color:rgba(199, 201, 208, 0.2);
}


    #right-middle{
        width: 1200px;
    }
/*--------------------------MIDLE1-------------------------------------- */


/*--------------------------MIDLE2-------------------------------------- */
#middle2{
    height: 129px;
    background-color: #202122;
    margin-top:20px;
    display: grid;
    padding:15px;
    grid-template-columns: 15% 60% 25%;
    color:#6F7381;
}
.profile-info1{
    display: flex;
}
.profile-info1-1{
    display: flex;
    margin:0;
    padding:0;
    
   
}
.profile-info1-1>img{
     padding-right:7px;
}
#profile-pic{
    border-radius: 50%;
    width:96px ;
    padding-top:20px;
}
#profile-name{
   font-weight: 700;
   font-style: normal;
   font-weight: bold;
   color: #C8A07D;
   display: flex;
   margin:15px 0 0 0 ;
   
}
#middle2-1{
    padding-left:20px;
}
.padd-text{
    padding-left:17px;
}
#middle2-flag{
    height: 16px;
    padding: 0 30px 0 10px;
    
}
.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 14px;
  width: 130px;
  height: 46px;
  margin-right: 15px
   
}
.middle2-buttons:hover{
    opacity: 0.7;
}
#middle2-button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

/*--------------------------MIDDLE3-------------------------------------- */
#middle3{
display:grid;
grid-template-columns: 58% 42%;
height: 80px;
}
::placeholder{
    color:#C7C9D0;

}
.titles{
    background: #C8A07D;
    border-radius: 20px;
    width:82px;
    height: 31px;
    margin-left:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    font-size: 14px;
}
.middle3-1{
    display:flex;
    align-items: center;
   
}

.ratings{
    background: #C8A07D;
    border-radius: 20px;
    width:120px;
    height: 31px;
    margin-left:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF; 
    font-size: 14px;
    
}

.text-ratings{
    color:#513C2A;
    padding-right:10px
}
/*--------------------------MIDDLE4-------------------------------------- */
#middle4{
    height: 63px;
  
     background-color: #202122;
     display:grid;
     grid-template-columns: 55% 45%;
}
.middle4-1  {
   color:#6F7381;
   padding:0 10px 0 10px;
   font-size:14px;
}
.middle4-1:hover{
    opacity: 0.7;
    cursor: pointer;
}

/*--------------------------MIDDLE5-------------------------------------- */

#middle5{
    display:grid;
    grid-template-columns: 54.5% 44.5%;
    gap:1%;   
    height: auto;
    margin:1% 0 30px 0;
    color:#FFFFFF;
}

.middle5-right-grid{
    display:grid; 
    grid-template-columns: 49% 49%;
    gap:2%;
    height:153px;
    margin-bottom: 2%;
    text-align: left;
   
 }
.middle5-right-grid>div{
    background-color: #202122;
}
#middle5-left{
    background-color: #202122;
}
#middle5-right-end{
    height: 153px;
    background-color: #202122;
}
.gold{
    color:#C8A07D;
    font-size: 14px;
    margin-top:20%;
    padding-left:20px;
}
.gold2{
    color:#C8A07D;
    font-size: 14px;
    padding-left:20px;
}
.middle5-text{
    padding:10px 0 0 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.15px;
}
#form-middle5{
    color:#F2358D;
    text-align: center;
}
</style>