<template>
  <div class="home">
      <div id="left-login">
              <div id="logo-pic">
                    <img src="../assets/logo2.png"  alt="">
              </div>
               
              <div> 
                    <div id="welcom-text">
                        <p class="letter-44" >Welcome to your</p> 
                        <p class="letter-44 weight700" > professional chess</p> 
                        <p class="letter-44 weight700">community.</p>                        
                    </div>
                   
              </div>
             <div id="input-signup">
               
                <div>
                     <input type="email" name=""  v-bind:class="{mailin:isActive,'text-danger':hasError}" placeholder="Email" v-model="emailsignin">
                     <p id="reqpass">{{req2}}</p>
                </div> 
             
                <div style="padding:20px 0 20px 0;"> 
                     <input type="password" name="" v-bind:class="{mailin:isActive,'text-danger':hasError2,}" placeholder="Password" v-model="passsignin" >
                     <p id="reqpass">{{req}} </p>
                </div>
                

              <div id="forgot-text" >
                
                 <a href="" class="home-p blue">Forgot password?</a> 
              </div>
              <div id="butt1">
                 <button  type="button" @click="signin()"  class="text-join" style=" border: 1px solid #C8A07D;">Sign in</button> 
               
              </div>
              <p id="text-or">or</p>
                <button type="button" onclick="alert('Hello world!')"   class="text-join"  style="border: 1px solid #E8E8E8;"> <div id="google-cor1"> <div id="google-cor"> <img src="../assets/Group.svg" id="" alt="google"></div><p>Join with Google</p> </div></button>         
           </div>
 
        </div>
      
      <div id="right-login">
             
      </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
   data () {
      return {
         passsignin:"",
         emailsignin:"",
         req:"",
         req2:"",
         image1:"",
         isActive:true,
         hasError:false,
         hasError2:false,
         
      }
      
    },
    methods:{
    signin: function(){
      this.req=""
      this.req2="",
      this.hasError2=false,
      this.hasError=false;
      if(this.passsignin==""){
        this.req="Enter Password";
        this.hasError2=true;
      }
      if(this.emailsignin==""){
        this.req2=" Enter Email" ;
        this.hasError=true;
      }
      if(this.emailsignin!=="" && this.passsignin!==""){
        fetch('https://sah.fly.dev/api/v2/auth', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { email: this.emailsignin, password: this.passsignin } )
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong')
           
          }
          
        })
        .then((data) => {
          console.log("ok");
          // Do something with the response
          localStorage.setItem('token',  data?.token);
          this.$router.push('/profile');
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          
        });
      }

    } ,
  },
}
</script>
<style scoped>
p{
  padding:0;
}
a{
  text-decoration: none;
}

  .home{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    
  }

  .flex-center{
       display: flex;
       justify-content: center;
       align-items: center;
  }
 
    .letter-44{
          display:flex;
          color:#FFFFFF;
          font-size:44px;
    }
    
    .home-p{
      color:#707070;

      font-size: 12px;
      line-height: 12px;
      
    }
    .blue{
     color: #11C6D1;
    }
    .pass-in{
      border: 1px solid rgba(196, 196, 196, 0.5);
      box-sizing: border-box;
      border-radius: 4px;
      background-color: #1B1C1D;
      height: 40px;
      padding-left:15px;
      color:#FFFFFF;
     
    }
    
      .text-join{
    font-size: 14px;
    color:#FFFFFF;
    background-color: #1B1C1D;
    border-radius: 11px;
    width: 65%;
    box-sizing: border-box;
    border-radius: 6px;
    height: 44px;
    }
     .text-join:hover{
       opacity:0.7;
     }

  #right-login{
      
      background-image: url("../assets/loginphoto.jpg");
      width:100%;
      background-size:  cover;
      background-position: center;
      color:#707070;

  }
  #forgot-text{
    width:65%;
    padding-left:18%;
    padding-top:5px;
    display:flex;

    }
#welcom-text>p{
   margin:0;
   padding-left:29%;
}
#welcom-text{
  margin:30px 0 30px 0;
}
  #left-login{
    background-color: #1B1B1C;
  }
  #logo-pic{
    padding:50px 35px 0px 35px;
    display:flex;
    width:65%;
    margin-left:24%;
    
  }
  
  #input-signup{
    background-color: #1B1C1D;
    width: 65%;
    padding: 20px 0 20px 0;
    margin:auto;
    border-radius: 11px;
  }  
  #letter-16{
         color:#FFFFFF;
         font-size:16px;
    }
  
  .mailin{
     width:65%;
     border: 1px solid rgba(196, 196, 196, 0.5);
     box-sizing: border-box;
     border-radius: 4px;
     background-color: #1B1C1D;
     height: 40px;
     padding-left:15px;
     font-size:14px;
     color:#FFFFFF;
  }
  
  .text-danger{
     width:65%; 
     box-sizing: border-box;
     border-radius: 4px;
     background-color: #1B1C1D;
     height: 40px;
     padding-left:15px;
     font-size:14px;
     border: 1px solid #F2358D;
     color:#FFFFFF;
     color:#F2358D;
  }


  #text-or{
    font-size: 14px;
    color:#FFFFFF;
  }
  #butt1{
    padding-top:20px;
  }
 
  #google-cor1{
     display:flex;
      justify-content: center;
       align-items: center;
  }
   #google-cor{
     width:20px;
     margin:auto 0 auto 0;
     padding-right:7px;
   }
   #reqpass{
     color:#F2358D;
     text-align: left;
     padding-left:17.5%;
     font-size: 12px;
   }
</style>