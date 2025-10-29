<?php
// This script now reads from YOUR fast, local database.

require_once __DIR__ . '/../config/db_config.php';

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

// Get the requested state, default to 'GUJARAT'
$state = $_GET['state'] ?? 'GUJARAT';

// --- 1. Prepare and Execute Database Query ---
$records = [];
$last_updated = date('Y-m-d'); // Default updated date

// Select all columns for the requested state
$sql = "SELECT * FROM district_performance WHERE state_name = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $state);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Fetch all results into an associative array
    $records = $result->fetch_all(MYSQLI_ASSOC);
    
    // Get the last update date from the first record
    $last_updated = $records[0]['last_api_update'];
}

$stmt->close();
$conn->close();

// --- 2. Return Data in the EXACT same format as the original API ---
// By doing this, your 'app.js' file needs NO CHANGES.
$response = [
    'records' => $records,
    'updated_date' => $last_updated
];

echo json_encode($response);
?>