<template>
   <div class="profile">
      <SideBar />
       <div class="right-profile">

             <div></div>
             <div id="right-middle">
                <div>
                  <Searchpart />
                </div>
                <div>
                     <input type="search" name="" class="intelegent-filter" placeholder="Intelegent Filter">
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
.search-profile{
      border: 1px solid #393939;
      box-sizing: border-box;
      border-radius: 20px;
      background-color:#1B1C1D ;
      display:flex;
      height: 33px;
      background-image: url(../assets/search_24px.png);
      background-repeat:no-repeat;
      background-position-x: 15px;
      background-position-y: 6px;
      padding-left:40px;
      font-size: 14px;
      color:#C7C9D0;
      cursor:pointer;
      width:270px;
    }   
</style>