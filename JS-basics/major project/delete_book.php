<?php
include('db_connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $bookID = $_POST['bookID'];

    $sql = "DELETE FROM books WHERE bookID = '$bookID'";
    if (mysqli_query($conn, $sql)) {
        echo "Book deleted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
