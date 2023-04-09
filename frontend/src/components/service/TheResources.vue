<template>
    <section>
        <header>
            <h1><span><BootstrapIcon icon="person-vcard-fill"/></span><span>Friend Contacts</span></h1>
        </header>
 <div class="wrapper">
    <div class="sidebar">
      <div class="profile">
        <img
          src="https://www.shutterstock.com/image-photo/grass-flowers-during-sunset-shadow-260nw-1433901557.jpg"/>
          <h3>Name</h3>
        <p>Email</p>
      </div>
      <div class="menu">
        <ul>
          <li>
             
            <router-link to="/theresources/friendcontacts"><span><BootstrapIcon icon="person"/></span><span>Friends</span></router-link>
          </li>
          <li>
            <router-link to="/theresources/addfriendcontact"><span><BootstrapIcon icon="person-add"/></span><span>Add Friend</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>      
        <router-view></router-view>
    </section>
</template>






<style scoped>
header{
    
    background-color:#020c22 ;
    height:4.5rem;
    color:#ffffff;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    max-width: 87%;
    margin-left:13%;
    padding:10px
}
a{
    text-decoration:none;
    color:#ffffff;
}
a :active,
a:hover,
a.router-link-active{
    background-color:rgba(255, 255, 255, 0.933) ;
    color:#0d2aab
}
.wrapper .sidebar {
  background: #020c22;
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  /* transition: all 0.5s ease; */
}

.wrapper .sidebar .profile img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

.wrapper .sidebar .profile h3 {
  color: #ffffff;
  margin: 10px 0 5px;
  font-size: 20px;
}

.wrapper .sidebar .profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.wrapper .sidebar .profile {
  /* margin-bottom: 10px  ; */
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  
}

.bi {
  margin-right: 10px;
}

.wrapper .sidebar  li{
    color: #dee4ec;
    width: 30px;
    display: block;
    width: 100%;
}

.wrapper .sidebar ul li a{
    display: block;
    padding: 13px 30px;
    border-bottom: 1px solid #055698;
    /* color: rgb(241, 237, 237); */
    font-size: 16px;
    position: relative;
    
}
.wrapper .sidebar .menu{
  margin-left:-45px;
}
</style>