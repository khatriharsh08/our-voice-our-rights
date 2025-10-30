# Our Voice, Our Rights (આપણો અવાજ, આપણા અધિકાર)
### MGNREGA Performance Dashboard

"Our Voice, Our Rights" is a simple, accessible web application that transforms complex government data from the MGNREGA program into an easy-to-understand dashboard. It is designed for rural citizens in India, especially those with low data literacy, by providing performance metrics, simple ratings, and audio readouts in their local language (Gujarati).

This project was built to solve the problem that official government APIs (like `data.gov.in`), while open, are not accessible to a non-technical audience.

## 🚀 Live Demo

> our-voice-our-rights.great-site.net
> lwm-ris.free.nf

## ✨ Features

* **At-a-Glance Dashboard:** Uses simple ratings (e.g., "😐 ઠીક છે") and clear visuals to summarize district performance.
* **Multi-language Support:** Fully translated into Gujarati and English to serve the local population.
* **Text-to-Speech (Accessibility):** Includes a "Listen to Summary" button for all key metrics, designed for a low-literacy audience.
* **Geolocation (Bonus):** Automatically detects the user's district to show relevant data immediately.
* **Reliable & Fast (Cache):** Caches government data in a local database. This ensures the app is always fast and highly available, even if the official `data.gov.in` API is slow or offline.
* **Historical Data:** Shows performance for the current month and a 6-month historical chart.

## 🛠️ Technical Architecture

This project is built with a secure, scalable, and production-ready architecture.

* **Frontend:** JavaScript (ES6+), HTML5, CSS3, Chart.js (via CDN)
* **Backend:** PHP
* **Database:** MySQL

The app uses a **secure public folder structure (`/public`)** to serve all user-facing files. All sensitive files, like database credentials (`/config`) and server-side utilities (`/scripts`), are kept outside the web root, making them inaccessible from a browser.

A daily **cron job** (`scripts/update_data.php`) fetches data from the `data.gov.in` API and populates a local MySQL database. The user-facing app (`public/api.php`) reads from this fast, local database. This design ensures high availability, speed, and prevents the app from being rate-limited by the government API.

## 🔧 Setup & Installation

Here’s how to set up the project on your local machine.

### 1. Clone the Repository
```sh
git clone https://github.com/khatriharsh08/our-voice-our-rights.git
cd our-voice-our-rights
````

### 2\. Set Up the Database

1.  Open MySQL Workbench (or any MySQL client) and connect to your local MySQL server.

2.  Create a new database (schema) named `mgnrega_app`.

3.  Run the following SQL query to create the necessary table:

    ```sql
    USE mgnrega_app;

    CREATE TABLE `district_performance` (
      `state_name` VARCHAR(100) NOT NULL,
      `district_name` VARCHAR(100) NOT NULL,
      `fin_year` VARCHAR(20) NULL,
      `month` VARCHAR(50) NULL,
      `Total_No_of_Active_Job_Cards` INT NULL,
      `Total_Households_Worked` INT NULL,
      `Persondays_of_Central_Liability_so_far` INT NULL,
      `percentage_payments_gererated_within_15_days` DECIMAL(10, 2) NULL,
      `Average_days_of_employment_provided_per_Household` DECIMAL(5, 2) NULL,
      `Average_Wage_rate_per_day_per_person` DECIMAL(10, 2) NULL,
      `Number_of_Completed_Works` INT NULL,
      `Number_of_Ongoing_Works` INT NULL,
      `Women_Persondays` INT NULL,
      `SC_persondays` INT NULL,
      `ST_persondays` INT NULL,
      `last_api_update` DATE NULL,
      PRIMARY KEY (`state_name`, `district_name`)
    );
    ```

### 3\. Configure Environment

1.  Go to the `/config` folder.

2.  Rename `config.php.example` to **`config.php`**. Open it and add your `data.gov.in` API key.

3.  Rename `db_config.php.example` to **`db_config.php`**. Open it and add your Database Configuration (username, password, etc.).

    *If you don't have the `.example` file, just create `db_config.php` and copy the code below.*

    **Contents for `db_config.php`:**

    ```php
    <?php
    // Database Configuration
    define('DB_HOST', '127.0.0.1'); // Or 'localhost'
    define('DB_USERNAME', 'root');      // Your MySQL username
    define('DB_PASSWORD', 'your_password'); // Your MySQL password
    define('DB_NAME', 'mgnrega_app');   // The database name

    // Create a connection
    $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->set_charset("utf8");
    ?>
    ```

### 4\. Populate the Database (First-Time Run)

Run the update script from your terminal. This will fetch the data from the API and fill your new database.

```sh
php scripts/update_data.php
```

You should see a message like `Starting data update... Data fetched... Successfully inserted/updated 33 records.`

## 🚀 Running the Project (Local Development)

We use PHP's built-in web server. This command serves the site from the `public/` directory, which is the correct and secure way to run it.

1.  From the **root project folder** (not the `public` folder), run:
    ```sh
    php -S localhost:8000 -t public
    ```
2.  Open `http://localhost:8000` in your browser.

## 📦 Production Deployment (Cron Job)

On a live server, you must set up a cron job to run the `update_data.php` script automatically once per day to keep your data fresh.

Add the following line to your server's crontab (e.g., via `crontab -e` or a cPanel):

```sh
# Run the update script every day at 3:00 AM
0 3 * * * php /path/to/your/project/scripts/update_data.php > /dev/null 2>&1
```

## ⚙️ Adapting for a Different State

This project is currently configured for 'GUJARAT'. To change it to a different state (e.g., 'MAHARASHTRA'):

1.  **Update Cron Job (`scripts/update_data.php`):**

      * Change the `filters[state_name]` parameter to your new state:
        ```php
        $params = [
            'api-key' => GOV_API_KEY,
            'format' => 'json',
            'limit' => '100', 
            'filters[state_name]' => 'MAHARASHTRA' // <-- Change this
        ];
        ```

2.  **Update Public API (`public/api.php`):**

      * Change the default `$state` variable:
        ```php
        $state = $_GET['state'] ?? 'MAHARASHTRA'; // <-- Change this
        ```

3.  **Update Frontend (`public/src/app.js`):**

      * Change the `selectedState` variable to match:
        ```javascript
        let selectedState = 'MAHARASHTRA'; // <-- Change this
        ```
      * **Crucially, you MUST update the `DISTRICT_TRANSLATIONS` object** with the new state's districts and their local translations.

4.  **Re-run the Cron Job:**

      * Clear the old data from your database: `DELETE FROM district_performance;`
      * Run the update script again to fetch the new state's data: `php scripts/update_data.php`

## 📄 License

This project is licensed under the MIT License.
