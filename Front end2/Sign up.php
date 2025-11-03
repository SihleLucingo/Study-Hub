<!DOCTYPE html>
<html lang="en">
<head>
  <title>Join the Family</title>
  <link rel="stylesheet" href="sign.css"/>
</head>
<body>
    <img src="2.png" alt="Study Hub" class="bottom-right-img">
	 <video autoplay muted loop playsinline class="bg-video">
    <source src="block.mp4" type="video/mp4" />
  </video>

 
  <nav class="navbar">
    <div class="nav-links">
      <a href="#" class="active">Home</a>
      <a href="#">Hub</a>
      <a href="#">Features</a>
    </div>
    <button class="login-btn">Log In</button>
  </nav>

  <div class="signup-container">
    <h1>JOIN THE FAMILY</h1>
    <form class="signup-form">
	<form method="POST" action= "register.php">
  <label for="name">Name:</label>
  <input id="name" type="text" required />

  <label for="surname">Surname:</label>
  <input id="surname" type="text" required />

  <label for="email">Email Address:</label>
  <input id="email" type="email" required />

  <label for="password">Password:</label>
  <input id="password" type="password" required />

  <label for="confirm-password">Confirm password:</label>
  <input id="confirm-password" type="password" required />

  <button type="submit" class="btn" value ="Sign Up" name ="signUp">
</form>

  </div>

</body>
</html>
