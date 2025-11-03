<?php

include 'connect.php';

if(isset($_POST['signUp'])){
	$name=$_POST['name'];
	$surname=$_POST['surname'];
	$email=$_POST['email'];
	$password=$_POST['password'];
	$password =md5($password);
		
	$checkEmail = "SELECT * From users where email = '$email'";
	$result =$conn->query($checkEmail);
	if($result->num_rows>0){
		echo"Email Address Already Exists !";
	}
	else{
		$insertQuery="INSERT INTO users(name, surname, email, password)
		VALUES('$name','$surname', '$email','$password')";
		if($conn->query($insertQuery)==TRUE){
			header("location: Sign up.php");
		}
		else{
			echo "Eroor: ".$conn->error;
		}
	}
	
}
if(isset($_POST['signUp])){
	$email = $_POST['email'];
	$password=$_POST['password'];
	$password=md5($password);
	
	$sql="SELECT *FROM users WHERE email='$email' and password='$password';
	$result=$conn->query($sql);	
	if($result->num_rows>0){
		session_start();
		$row=$result->fetch_assoc();
		$_SESSION['email']=$row['email];
		header("Location: Landing page.php");
		exit();
	}
	else{
		echo "Not Found, Incorrect Email or Password";
	}

}
?>
	
	