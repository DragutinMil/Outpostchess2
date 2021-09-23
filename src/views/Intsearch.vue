<template>
   <div class="profile">
      <SideBar />
       <div class="right-profile">

             <div></div>
             <div id="right-middle">
                <div style="padding-bottom:40px">
                  <Searchpart />
                </div>
                <div id="input-filter">
                     <input type="search" name="" class="intelegent-filter" placeholder="INTELEGENT FILTER">
                     <div id="second-part"> <p  id="category-text">Category</p>  <img id="img-category" src="../assets/linije.png" alt=""> </div>
                    
                </div>
              </div>
            <div></div>
      </div>   
</div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Searchpart from '../components/Searchpart.vue'
export default {
  name: 'Intsearch',
  components: {
    SideBar,
    Searchpart
  },
}
</script>


<style scoped>

.profile{
    display:grid;
    grid-template-columns: 259px auto;
}  

#right-middle{
        width: 1200px;
    }
.right-profile{
   background-color:  #171819;
   display:grid;
    grid-template-columns: minmax(15px, auto)  minmax(15px, auto);
    background-color: #1B1C1D;
} 
.intelegent-filter{
      
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      box-sizing: border-box;
      border-radius: 26px 0 0 26px;
      background-color:#1B1C1D ;
      display:flex;
      height: 48px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 22px;
      background-position-y: 14px;
      padding-left:60px;
      font-size: 14px;
      color:#6F7381;
      cursor:pointer;
      width:85%;
    }   
    #input-filter{
      display:flex;
    }
    #second-part{
      
      display:flex;
      justify-content: center;
       align-items: center;
  
      border: 0.5px solid rgba(111, 115, 129, 0.5);
      height: 45px;
      padding-left:20px;
      border-radius: 0 26px 26px 0;
      width:15%;
     
      color:#6F7381;
      cursor:pointer;
    }
    #img-category{
      height: 15px;
      margin:0px 0 0 20px; 
    }
    
</style>