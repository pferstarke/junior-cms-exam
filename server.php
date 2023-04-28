<?php
$email = $_POST['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response = array(
    'error' => false,
    'message' => 'Email validated'
  );
} else {
  $response = array(
    'error' => true,
    'message' => 'Email is not valid'
  );
}

echo json_encode($response);
?>
