<?php
// This script is your "Cron Job".
// It fetches data from the gov API and saves it to YOUR database.

// Go one level up (from scripts) to find the config folder
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db_config.php';

echo "Starting data update...\n";

// --- 1. Fetch Data from Government API ---
$baseURL = 'https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722';
$params = [
    'api-key' => GOV_API_KEY,
    'format' => 'json',
    'limit' => '100', // Can be small, Gujarat only has ~33 districts
    'filters[state_name]' => 'GUJARAT' // <-- This only fetches Gujarat
];
$apiURL = $baseURL . '?' . http_build_query($params);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
$response = curl_exec($ch);
curl_close($ch);

if (!$response) {
    die("Failed to fetch data from API.\n");
}

$data = json_decode($response);

if (!$data || !isset($data->records)) {
    die("Invalid JSON received from API.\n");
}

// Get the 'last updated' date from the API response
$lastUpdated = date('Y-m-d', strtotime($data->updated_date));
echo "Data fetched. Last updated on: $lastUpdated\n";

// --- 2. Prepare Database Statement ---
// This complex query will INSERT a new district, or UPDATE it if it already exists.
$sql = "INSERT INTO district_performance (
            state_name, district_name, fin_year, month, 
            Total_No_of_Active_Job_Cards, Total_Households_Worked, 
            Persondays_of_Central_Liability_so_far, percentage_payments_gererated_within_15_days, 
            Average_days_of_employment_provided_per_Household, Average_Wage_rate_per_day_per_person, 
            Number_of_Completed_Works, Number_of_Ongoing_Works, Women_Persondays, 
            SC_persondays, ST_persondays, last_api_update
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            fin_year = VALUES(fin_year),
            month = VALUES(month),
            Total_No_of_Active_Job_Cards = VALUES(Total_No_of_Active_Job_Cards),
            Total_Households_Worked = VALUES(Total_Households_Worked),
            Persondays_of_Central_Liability_so_far = VALUES(Persondays_of_Central_Liability_so_far),
            percentage_payments_gererated_within_15_days = VALUES(percentage_payments_gererated_within_15_days),
            Average_days_of_employment_provided_per_Household = VALUES(Average_days_of_employment_provided_per_Household),
            Average_Wage_rate_per_day_per_person = VALUES(Average_Wage_rate_per_day_per_person),
            Number_of_Completed_Works = VALUES(Number_of_Completed_Works),
            Number_of_Ongoing_Works = VALUES(Number_of_Ongoing_Works),
            Women_Persondays = VALUES(Women_Persondays),
            SC_persondays = VALUES(SC_persondays),
            ST_persondays = VALUES(ST_persondays),
            last_api_update = VALUES(last_api_update)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Failed to prepare statement: " . $conn->error . "\n");
}

// --- 3. Loop and Save Data ---
$count = 0;
foreach ($data->records as $record) {
    // Clean the data using trim() - this fixes your earlier space issue!
    $state = trim($record->state_name);
    $district = trim($record->district_name);

    // Bind parameters to the statement
    $stmt->bind_param(
        "ssssiiidddiiisss",
        $state,
        $district,
        $record->fin_year,
        $record->month,
        $record->Total_No_of_Active_Job_Cards,
        $record->Total_Households_Worked,
        $record->Persondays_of_Central_Liability_so_far,
        $record->percentage_payments_gererated_within_15_days,
        $record->Average_days_of_employment_provided_per_Household,
        $record->Average_Wage_rate_per_day_per_person,
        $record->Number_of_Completed_Works,
        $record->Number_of_Ongoing_Works,
        $record->Women_Persondays,
        $record->SC_persondays,
        $record->ST_persondays,
        $lastUpdated
    );

    // Execute the query
    if ($stmt->execute()) {
        $count++;
    }
}

echo "Successfully inserted/updated $count records.\n";

$stmt->close();
$conn->close();
?>