<?php
include('db_connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $borrowID = $_POST['borrowID'];
    $bookID = $_POST['bookID'];

    $sql = "UPDATE borrowed_books SET status = 'returned' WHERE borrowID = '$borrowID'";
    $update_sql = "UPDATE books SET availability = 1 WHERE bookID = '$bookID'";

    if (mysqli_query($conn, $sql) && mysqli_query($conn, $update_sql)) {
        echo "Book returned successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
