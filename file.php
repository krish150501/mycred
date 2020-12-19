<?php 
$servername='localhost';
$username='root';
$password='';
$database='file';

$conn=new mysqli($servername,$username,$password,$database);

if($conn->connect_error){
	die("Connection error : ". $conn->connect_error);
}

$items=array();

$SqlQry="SELECT * FROM file;";

$stmt=$conn->prepare($SqlQry);

$stmt->execute();

$stmt->bind_result($title,$category,$price,$desc,$img);

while($stmt->fetch()){
	$temp=[
		'title'=>$title,
		'category'=>$category,
		'price'=>$price,
		'desc'=>$desc,
		'img'=>$img
	];

	array_push($items, $temp);
}
echo json_encode($items);
?>