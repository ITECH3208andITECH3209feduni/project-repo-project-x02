<?php
include("auth_session.php");
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.card {
   background-color: white;
  max-width: 300px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  font-family: arial;
  border: 2px dotted white;
  padding: 20px;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
</head>
<body style="background: #000;">



<div class="card">
    <i class="fa fa-user" style="font-size:70px; padding: 20px 15px;" ></i>
    <h2><?php
    echo "Welcome ", $_SESSION['username'];
    ?></h2>
    
 
  <p><button class="button" onclick="window.location.href='logout.php';" >Sign out</button>
    </p>
</div>

</body>
</html>
