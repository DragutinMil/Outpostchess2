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
                <div class="search">
                    <div class="search-header">No.</div>
                    <div class="search-header">Name&Surname</div>
                    <div class="search-header">Country</div>
                    <div class="search-header">City</div>
                    <div class="search-header">Age</div>
                    <div class="search-header">Gender</div>
                    <div class="search-header">Rating</div>
                    <div class="search-header">Title</div>
                    <div class="search-header">Interested in</div>
                </div>
                <div class="search-res">

                </div>
                <div class="search-res"></div>
                <div class="search-res"></div>
                <div class="search-res"></div>
                <div class="search-res"></div>
               
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
      height: 46px;
      padding-left:20px;
      border-radius: 0 26px 26px 0;
      width:15%; 
      color:#6F7381;
      cursor:pointer;
    }
     #second-part:hover{
       opacity: 0.7;
     }
    #img-category{
      height: 15px;
      margin:0px 0 0 20px; 
    }
    .search{
      display:grid;
      grid-template-columns:8% 24% 10% 10% 8% 10% 8% 8% 14% ;
      background-color:#202122;
      height: 62px;
      margin:40px 0 20px 0;
      color:#FFFFFF;
      align-items: center;

    }
    .search-res{
      background-color:#202122;
      height: 54px;
      margin:20px 0 20px 0;
    }
    .search-header{
      font-size: 14px

    }
</style>