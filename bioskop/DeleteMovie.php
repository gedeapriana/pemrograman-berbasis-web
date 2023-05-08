<?php include 'db.php';
session_start(); ?>
<?php
    if(isset($_POST['submit']) && !empty($_POST['submit']))
    {
        $MovieName=$_POST['MovieName'];

        if(!(empty($MovieName)))
        {
            echo "<script>alert(Movie Deleted);</script>";
            $var=new DeleteMovie();
            $var->movieDelete($db);
        }  
    }
    else{
        
    }
?>

<?php
    class DeleteMovie{
        public function movieDelete($db)
        {
            $sql="DELETE FROM movies WHERE MovieName=?;";
            if(($stmt=$db->prepare($sql)))
            {
                $stmt->bind_param("s",$Name);
            }
            else
            {
                var_dump($db->error);
            }
            $Name=$_POST['MovieName'];
            if($stmt->execute())
            {
                echo "<script>alert('Movie Successfully Deleted');</script>";
            }
            else{
                echo "<script>alert('Movie failed to delete');</script>";
            } 
            $stmt->close();
            header("Location: Admin.php");
        }
    }
?>
<!DOCTYPE html>
<html>
<head>

<style type="text/css">
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

        *h1{
            font-size: 30px;
            color:  beige;
        }



        .dell-movie{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .heading {
            margin-bottom: 60px;
            font-size: 30px;
            color: beige;
        }

        .movie-details {
            border-radius: 15px;
            padding: 25px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .back-to-admin button {
	  		padding: 20px;
	  		background-color: #b22222;
	  		color: white;
	  		font-size: 20px;
	  		margin-bottom: 20px;
	  		border: 2px solid #b22222;
	  		border-radius: 50px;
	  		cursor: pointer;
  		}

  		form {
	  		display: flex;
	    	flex-direction: column;
	    	background-color: rgba(88,88,88,.9);
	    	border-radius: 15px;
	    	padding: 20px;
	    	margin-bottom: 125px;
	    	width: 65%;
  		}

        .movie-name{
            display: flex;
	    	justify-content: space-between;
	    	align-items: center;
	    	padding: 20px;
	    	font-size: 25px;
        }

        .movie-name input{
            width: 50%;
            padding: 10px;
            border-radius: 10px;
            border: 2px solid #b22222;
            font-size: 20px;
        }

        .movie-name button{
            padding: 10px;
            border-radius: 10px;
            border: 2px solid #b22222;
            font-size: 20px;
            background-color: #b22222;
            color: white;
            cursor: pointer;
        }

        .movie-name button:hover{
            background-color: white;
            color: #b22222;
        }

        .movie-name input:hover{
            border: 2px solid white;
        }

        .movie-name input:focus{
            border: 2px solid white;
        }

        .movie-name input::placeholder{
            color: #b22222;
        }

        .error{
  			text-align: center;
  			color:red;
  			font-size: 15px;
		}

        .success{
  			text-align: center;
  			color:green;
  			font-size: 15px;
        }

        .back-to-admin button:hover{
            background-color: white;
            color: #b22222;
        }

        .submmit {
              display: flex;
              justify-content: center;
          }

        .btn-DelMovie{
            padding: 10px;
            border-radius: 10px;
            border: 2px solid #b22222;
            font-size: 20px;
            background-color: #b22222;
            color: white;
            cursor: pointer;

        }

        
</style>

<script type="text/javascript">
		function validateMovie() {
            var movieName = document.forms["movie-form"]["MovieName"].value;
            var movieNameError = document.getElementById("movieNameError");
            var movieNameSuccess = document.getElementById("movieNameSuccess");
            var movieNameRegex = /^[a-zA-Z ]{2,30}$/;

            if (movieName == "") {
                movieNameError.innerHTML = "Movie Name is required";
                return false;
            } else if (!movieNameRegex.test(movieName)) {
                movieNameError.innerHTML = "Movie Name must be between 2 and 30 characters";
                return false;
            } else {
                movieNameError.innerHTML = "";
                movieNameSuccess.innerHTML = "Movie Name is valid";
                return true;
            }
        }
</script>

</head>
<body>
<div class="overall-background">
    <?php include_once 'header1.php'; ?>
    <div class="dell-movie">
        <div class="heading">
            <h1>Delete Movie</h1>
        </div>
        <div class="movie-details">
            <form name="movie-form" action="DeleteMovie.php" method="POST" onsubmit="return validateMovie()">
                <div class="movie-name
                ">
                    <label>Movie Name</label>
                    <input type="text" name="MovieName" placeholder="Enter Movie Name">
                </div>
                <div class="error" id="movieNameError"></div>
                <div class="success" id="movieNameSuccess"></div>
                <div class="submit">
                    <button class = "btn-DelMovie" type="submit" onclick="return validateMovie()" name="submit">Delete Movie</button>
                </div>
            </form>

            <div class="back-to-admin">
                <button onclick="window.location.href='Admin.php'">Back to Admin</button>
            </div>
        </div>
    </div>
    <?php include 'footer.php'; ?>
</body>