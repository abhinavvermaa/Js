<?php
include('db_connect.php');
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = $_SESSION['userID'];
    $bookID = $_POST['bookID'];
    $borrow_date = date('Y-m-d');
    $return_date = date('Y-m-d', strtotime('+14 days'));
    $status = 'borrowed';

    $sql = "INSERT INTO borrowed_books (userID, bookID, borrow_date, return_date, status) VALUES ('$userID', '$bookID', '$borrow_date', '$return_date', '$status')";
    $update_sql = "UPDATE books SET availability = 0 WHERE bookID = '$bookID'";

    if (mysqli_query($conn, $sql) && mysqli_query($conn, $update_sql)) {
        echo "Book borrowed successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
