<template>
    <div class="side-bar">
                    <img src="../assets/logo2.png" alt="">
                    <div class="side-options">
                           <div class="flex-center"><img src="../assets/home_24px.png" alt=""></div>
                          <p class="left-sidetext diffcol" >Home</p>
                    </div>
                    <div class="side-options">
                          <div class="flex-center"><img src="../assets/Vector1.png" alt=""></div>
                          <p class="left-sidetext">Chess Portfolio</p>
                    </div>
                    <div class="side-options">
                          <div class="flex-center"><img src="../assets/mail_outline_24px.png" alt=""></div>
                           <p class="left-sidetext">Inbox</p>
                    </div>
                    <div class="side-options"> 
                             <div class="flex-center"><img src="../assets/Vector5.png" alt=""></div>
                              <router-link to="../intsearch" style="color:#C7C9D0"> <p  class="left-sidetext">Intelegent search</p></router-link> 
                    </div>
                    <div class="side-options"> 
                            <div class="flex-center"><img src="../assets/hands.png" alt=""></div>
                             <p class="left-sidetext diffcol">My connections</p>
                    </div>
                    
                    <hr>
                    <div class="side-options"> 
                             <div class="flex-center"><img src="../assets/book.png" alt=""></div>
                             <p class="left-sidetext diffcol">Blog</p>
                    </div>
                    <hr>
                     <div class="side-options" style="margin-top:174px"> 
                            <div class="flex-center"><img src="../assets/settings_24px_rounded.svg" alt=""></div>
                            <p class="left-sidetext">Settings</p>
                    </div>
                    <div class="side-options"> 
                            <div class="flex-center"><img src="../assets/Vector7.png" alt=""></div>
                            <p class="left-sidetext">Help</p>
                    </div>
                    <a href=""> <div class="side-options" style="margin-bottom:30px"> 
                            <div class="flex-center"><img src="../assets/Vector4.png" alt=""></div>
                             <p class="left-sidetext">Contact Us</p>
                    </div></a>
                    
        </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.side-bar{
    background-color: #202122;
    
}
.side-bar>img{
    width: 128px;
    padding: 15% 10% 50px 0;
}
.side-options{
display:flex;
color:#C7C9D0;
padding: 0 0 10px 53px;
}
.side-options:hover{
    opacity: 0.7;
}
.left-sidetext{
    padding-left:15px;
    cursor: pointer;
}
.diffcol{
    color:rgba(199, 201, 208, 0.2);
}
hr{
    border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%
}
</style>
