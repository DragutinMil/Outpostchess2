<template>
  <div id="nav">
    <router-link to="/"></router-link> 
 <!--   <router-link to="/about">About</router-link>  -->
  </div>
  <router-view/>
 
</template>

 



<style>
#app {
  font-family: 'Red Hat Display', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.weight700{
  font-weight: 700;
}
.flex-center{
       display: flex;
       justify-content: center;
       align-items: center;
  }
</style>
