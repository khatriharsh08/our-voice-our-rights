// --- I18N (Translations) ---
const translations = {
    'guj': {
        'lang_code': 'gu-IN',
        'page_title': 'આપણો અવાજ, આપણા અધિકાર',
        'header_title': 'આપણો અવાજ, આપણા અધિકાર',
        'header_subtitle': 'MGNREGA પ્રદર્શન ડેશબોર્ડ',
        'loading_title': 'ડેટા લોડ થઈ રહ્યો છે...',
        'loading_subtitle': 'કૃપા કરી રાહ જુઓ...',
        'loading_error': 'ડેટા લોડ કરી શકાયો નથી.',
        'retry': 'ફરીથી પ્રયાસ કરો',
        'state_select_title': 'તમારું રાજ્ય પસંદ કરો',
        'district_select_title': 'તમારો જિલ્લો પસંદ કરો',
        'district_back_btn': '← રાજ્ય બદલો',
        'dash_back_btn': 'બદલો',
        'dash_subtitle': 'માસિક રિપોર્ટ કાર્ડ',
        'overall_rating_title': 'કુલ પ્રદર્શન',
        'listen_summary': 'સંપૂર્ણ સારાંશ સાંભળો',
        'tab_current': 'આ મહિનો',
        'tab_history': 'છેલ્લા 6 મહિના',
        'history_chart_title': 'છેલ્લા 6 મહિનામાં પ્રદર્શન',
        'chart_label_work': 'કામ મેળવનાર ઘર (%)',
        'chart_label_payment': 'સમયસર ચુકવણી (%)',
        'metric_title_employment': 'રોજગાર (Employment)',
        'metric_subtitle_employment': 'જોબ કાર્ડ ધારકોને કામ મળ્યું',
        'metric_title_payment': 'ચુકવણી (Payment)',
        'metric_subtitle_payment': 'ચુકવણી 15 દિવસમાં કરવામાં આવી',
        'metric_title_work': 'કામ (Work Done)',
        'metric_subtitle_work': 'કુલ વ્યક્તિ-દિવસનું કામ થયું',
        'comp_good': 'સારું',
        'comp_bad': 'સુધારાની જરૂર છે',
        'comp_neutral': 'ઠીક છે',
        'comp_vs_state': (val) => `રાજ્યની સરેરાશ (${val}%) કરતાં વધારે`,
        'comp_vs_state_lower': (val) => `રાજ્યની સરેરાશ (${val}%) કરતાં ઓછું`,
        'comp_vs_last_month_up': (val) => `ગયા મહિના (${val}) કરતાં વધારે`,
        'comp_vs_last_month_down': (val) => `ગયા મહિના (${val}) કરતાં ઓછું`,
        'more_details': 'વધુ માહિતી જુઓ',
        'rating_vgood': 'ખૂબ જ સારું',
        'rating_good': 'સારું',
        'rating_ok': 'ઠીક છે',
        'rating_bad': 'સુધારાની જરૂર છે',
        'summary_vgood': (dist) => `${dist}નું પ્રદર્શન ખૂબ જ સારું છે. કામ અને ચુકવણી બંનેમાં રાજ્યની સરેરાશથી ઘણું વધારે.`,
        'summary_good': (dist) => `${dist}નું પ્રદર્શન સારું છે. મોટાભાગની બાબતો સાચી દિશામાં છે.`,
        'summary_ok': (dist) => `${dist}નું પ્રદર્શન ઠીક છે. કેટલીક બાબતોમાં સુધારાની જરૂર છે, ખાસ કરીને ચુકવણીમાં.`,
        'summary_bad': (dist) => `${dist}ના પ્રદર્શનમાં ઘણા સુધારાની જરૂર છે. કામ મળવામાં અને ચુકવણીમાં ઘણો વિલંબ થઈ રહ્યો છે.`,
        'footer_line1': 'આ માહિતી MGNREGA ના અધિકૃત data.gov.in પોર્ટલ પરથી લેવામાં આવી છે.',
        'footer_line2': (date) => `ડેટા છેલ્લે ${date} ના રોજ અપડેટ કરવામાં આવ્યો.`,
        'speak_label': 'સાંભળો',
        'location_not_found': 'માફ કરશો, તમારા સ્થાન માટે ડેટા ઉપલબ્ધ નથી',
        'detected_location': 'શોધાયેલું સ્થાન',
        'please_select_manually': 'કૃપા કરી મેન્યુઅલી પસંદ કરો',
    },
    'en': {
        'lang_code': 'en-US',
        'page_title': 'Our Voice, Our Rights',
        'header_title': 'Our Voice, Our Rights',
        'header_subtitle': 'MGNREGA Performance Dashboard',
        'loading_title': 'Loading data...',
        'loading_subtitle': 'Please wait...',
        'loading_error': 'Could not load data.',
        'retry': 'Retry',
        'state_select_title': 'Select Your State',
        'district_select_title': 'Select Your District',
        'district_back_btn': '← Change State',
        'dash_back_btn': 'Change',
        'dash_subtitle': 'Monthly Report Card',
        'overall_rating_title': 'Overall Performance',
        'listen_summary': 'Listen to Full Summary',
        'tab_current': 'This Month',
        'tab_history': 'Past 6 Months',
        'history_chart_title': 'Performance (Past 6 Months)',
        'chart_label_work': 'Households Worked (%)',
        'chart_label_payment': 'Timely Payment (%)',
        'metric_title_employment': 'Employment',
        'metric_subtitle_employment': 'Job card holders who got work',
        'metric_title_payment': 'Payment',
        'metric_subtitle_payment': 'Payments made within 15 days',
        'metric_title_work': 'Work Done',
        'metric_subtitle_work': 'Total person-days of work',
        'comp_good': 'Good',
        'comp_bad': 'Needs Improvement',
        'comp_neutral': 'Okay',
        'comp_vs_state': (val) => `Better than state average (${val}%)`,
        'comp_vs_state_lower': (val) => `Below state average (${val}%)`,
        'comp_vs_last_month_up': (val) => `Up from last month (${val})`,
        'comp_vs_last_month_down': (val) => `Down from last month (${val})`,
        'more_details': 'View More Details',
        'rating_vgood': 'Very Good',
        'rating_good': 'Good',
        'rating_ok': 'Okay',
        'rating_bad': 'Needs Improvement',
        'summary_vgood': (dist) => `${dist} is performing very well. Both work and payments are well above the state average.`,
        'summary_good': (dist) => `${dist} is performing well. Most metrics are in the right direction.`,
        'summary_ok': (dist) => `${dist}'s performance is okay. Some areas need improvement, especially payments.`,
        'summary_bad': (dist) => `${dist}'s performance needs significant improvement. Work allotment and payments are lagging.`,
        'footer_line1': 'This information is from the official MGNREGA data.gov.in portal.',
        'footer_line2': (date) => `Data last updated on ${date}.`,
        'speak_label': 'Listen',
        'location_not_found': 'Sorry, data not available for your location',
        'detected_location': 'Detected Location',
        'please_select_manually': 'Please select manually',
    }
};

// --- NEW: District Name Translations ---
// The key (left side) MUST match the district_name from the API EXACTLY.
const DISTRICT_TRANSLATIONS = {
'GUJARAT': {
        'AHMADABAD': 'અમદાવાદ',
        'AMRELI': 'અમરેલી',
        'ANAND': 'આણંદ',
        'ARVALLI': 'અરવલ્લી',
        'BANAS KANTHA': 'બનાસકાંઠા',
        'BHARUCH': 'ભરૂચ',
        'BHAVNAGAR': 'ભાવનગર',
        'Botad': 'બોટાદ',
        'Chhotaudepur': 'છોટાઉદેપુર',
        'DANG': 'ડાંગ',
        'DEVBHUMI DWARKA': 'દેવભૂમિ દ્વારકા',
        'DOHAD': 'દાહોદ',
        'GANDHINAGAR': 'ગાંધીનગર',
        'GIR SOMNATH': 'ગીર સોમનાથ',
        'JAMNAGAR': 'જામનગર',
        'JUNAGADH': 'જૂનાગઢ',
        'KACHCHH': 'કચ્છ',
        'KHEDA': 'ખેડા',
        'MAHESANA': 'મહેસાણા',
        'MAHISAGAR': 'મહીસાગર',
        'Morbi': 'મોરબી',
        'NARMADA': 'નર્મદા',
        'NAVSARI': 'નવસારી',
        'PANCH MAHALS': 'પંચમહાલ',
        'PATAN': 'પાટણ',
        'PORBANDAR': 'પોરબંદર',
        'RAJKOT': 'રાજકોટ',
        'SABAR KANTHA': 'સાબરકાંઠા',
        'SURAT': 'સુરત',
        'SURENDRANAGAR': 'સુરેન્દ્રનગર',
        'TAPI': 'તાપી',
        'VADODARA': 'વડોદરા',
        'VALSAD': 'વલસાડ'
    }
    // You could add other states here if you expand the app later
};

let currentLang = 'guj';
let selectedState = 'GUJARAT';
let currentUtterance = null;
let apiData = null; // Cache for API data
let historicalChart = null; // To store the Chart.js instance

// --- DOM Elements ---
const languageSelector = document.getElementById('language-selector');
const loadingScreen = document.getElementById('loading-screen');
const loadingError = document.getElementById('loading-error');
const loadingErrorText = document.getElementById('loading-error-text');
const districtSelector = document.getElementById('district-selector');
const dashboard = document.getElementById('dashboard');

// --- Icons (NEW) ---
const ICONS = {
    up: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.03 9.83a.75.75 0 01-1.06-1.06l5.25-5.25a.75.75 0 011.06 0l5.25 5.25a.75.75 0 11-1.06 1.06L10.75 5.612V16.25a.75.75 0 01-.75.75z" clip-rule="evenodd" /></svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l4.22-4.22a.75.75 0 111.06 1.06l-5.25 5.25a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 111.06-1.06l4.22 4.22V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>`,
    neutral: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon"><path fill-rule="evenodd" d="M3.75 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg>`,
    audio: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5 5 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>`
};

// --- MOCK DATA (NEW) ---
// In a real app, your server/database would provide this comparison data.
// We simulate it here to build the UI.
const mockComparisonData = {
    state_avg_payment: 78.5,
    state_avg_employment_pc: 42.0,
    last_month_person_days: 1850000,
    // Mock historical data for the chart
    historical: [
        { month: 'Apr', work_pc: 45, payment_pc: 70 },
        { month: 'May', work_pc: 50, payment_pc: 72 },
        { month: 'Jun', work_pc: 55, payment_pc: 68 },
        { month: 'Jul', work_pc: 52, payment_pc: 75 },
        { month: 'Aug', work_pc: 48, payment_pc: 80 },
    ]
};

// --- API Functions (MODIFIED) ---
async function fetchMGNREGAData(stateName = null, limit = 1000) {
    try {
        const params = new URLSearchParams({
            'limit': limit,
            'offset': '0'
        });

        // --- THIS IS THE NEW LINE ---
        if (stateName) params.append('state', stateName);
        // -----------------------------
               
        const url = `${API_CONFIG.BASE_URL}?${params.toString()}`;
        
        console.log('Fetching from:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response received');
        
        if (data.records && data.records.length > 0) {
            console.log('First record sample:', data.records[0]);
        }
        return data;
    } catch (error) {
        console.error('Error fetching MGNREGA data:', error);
        throw error;
    }
}

// --- Data Processing (MODIFIED) ---
function processAPIData(apiResponse) {
    const processed = {};
    
    if (!apiResponse.records || apiResponse.records.length === 0) {
        console.error('No records found in API response');
        return processed;
    }
    
    apiResponse.records.forEach(record => {
        const stateName = record.state_name;
        // Use .trim() to remove any extra spaces from the API data
        const districtName = record.district_name ? record.district_name.trim() : null;
        
        if (!stateName || !districtName) return;
        
        if (!processed[stateName]) {
            processed[stateName] = {};
        }
        
        const activeJobCards = parseInt(record.Total_No_of_Active_Job_Cards || 0);
        const householdsWorked = parseInt(record.Total_Households_Worked || 0);
        const personDays = parseInt(record.Persondays_of_Central_Liability_so_far || 0);
        const paymentOnTime = parseFloat(record.percentage_payments_gererated_within_15_days || 0);
        
        // --- NEW CALCULATIONS ---
        const employmentPc = activeJobCards > 0 ? Math.round((householdsWorked / activeJobCards) * 100) : 0;
        
        // --- NEW: Get Gujarati Name ---
        let gujName = districtName; // Default to English name
        if (DISTRICT_TRANSLATIONS[stateName] && DISTRICT_TRANSLATIONS[stateName][districtName]) {
            gujName = DISTRICT_TRANSLATIONS[stateName][districtName];
        }
        // -----------------------------

        processed[stateName][districtName] = {
            displayName_guj: gujName, // Use the mapped Gujarati name
            displayName_en: districtName,
            
            // Primary metrics
            activeJobCards: activeJobCards,
            householdsWorked: householdsWorked,
            personDays: personDays,
            paymentOnTime: Math.round(paymentOnTime),
            employmentPc: employmentPc,
            
            // Other details for the accordion
            avgDays: parseFloat(record.Average_days_of_employment_provided_per_Household || 0),
            avgWage: parseFloat(record.Average_Wage_rate_per_day_per_person || 0),
            completedWorks: parseInt(record.Number_of_Completed_Works || 0),
            ongoingWorks: parseInt(record.Number_of_Ongoing_Works || 0),
            womenPersonDays: parseInt(record.Women_Persondays || 0),
            womenPercentage: personDays > 0 ? Math.round((parseInt(record.Women_Persondays || 0) / personDays) * 100) : 0,
            scPercentage: personDays > 0 ? Math.round((parseInt(record.SC_persondays || 0) / personDays) * 100) : 0,
            stPercentage: personDays > 0 ? Math.round((parseInt(record.ST_persondays || 0) / personDays) * 100) : 0,

            // Meta
            finYear: record.fin_year || 'N/A',
            month: record.month || 'N/A',
            lastUpdated: apiResponse.updated_date || new Date().toLocaleDateString('en-CA') // Use API's updated_date
        };
    });
    
    console.log('Processed data:', processed);
    return processed;
}

// --- Text-to-Speech (TTS) Function (Unchanged) ---
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = translations[currentLang].lang_code;
            utterance.pitch = 1;
            utterance.rate = 0.9;
            currentUtterance = utterance;
            utterance.onend = () => { currentUtterance = null; };
            utterance.onerror = (e) => { console.error('TTS error:', e); currentUtterance = null; };
            window.speechSynthesis.speak(utterance);
        }, 100);
    }
}

// --- App Logic ---

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all static text
    updateStaticText();
    
    // Hide language selector, show loading screen
    languageSelector.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    loadingError.classList.add('hidden');
    
    // Load data
    loadInitialData();
}

// NEW: Separate function for loading data
async function loadInitialData() {
    const t = translations[currentLang];
    try {
        // Fetch data from API (MODIFIED to only fetch GUJARAT)
        const apiResponse = await fetchMGNREGAData('GUJARAT');
        apiData = processAPIData(apiResponse);
        
        if (Object.keys(apiData).length === 0) {
            throw new Error('No data available');
        }
        
        // Try location detection
        checkLocation();
    } catch (error) {
        console.error('Failed to load data:', error);
        showError(t.loading_error);
    }
}

// NEW: Update static text
function updateStaticText() {
    const t = translations[currentLang];
    document.title = t.page_title;
    document.getElementById('header-title').textContent = t.header_title;
    document.getElementById('header-subtitle').textContent = t.header_subtitle;
    document.getElementById('loading-title').textContent = t.loading_title;
    document.getElementById('loading-subtitle').textContent = t.loading_subtitle;
    document.getElementById('retry-btn').textContent = t.retry;
    document.getElementById('district-select-title').textContent = t.district_select_title;
    document.getElementById('district-back-btn').textContent = t.district_back_btn;
    document.getElementById('dash-back-btn').textContent = t.dash_back_btn;
    document.getElementById('dash-subtitle').textContent = t.dash_subtitle;
    document.getElementById('overall-rating-title').textContent = t.overall_rating_title;
    document.getElementById('overall-audio-btn-text').textContent = t.listen_summary;
    document.getElementById('tab-current').textContent = t.tab_current;
    document.getElementById('tab-history').textContent = t.tab_history;
    document.getElementById('metric-title-employment').textContent = t.metric_title_employment;
    document.getElementById('metric-subtitle-employment').textContent = t.metric_subtitle_employment;
    document.getElementById('metric-title-payment').textContent = t.metric_title_payment;
    document.getElementById('metric-subtitle-payment').textContent = t.metric_subtitle_payment;
    document.getElementById('metric-title-work').textContent = t.metric_title_work;
    document.getElementById('metric-subtitle-work').textContent = t.metric_subtitle_work;
    document.getElementById('history-chart-title').textContent = t.history_chart_title;
    document.getElementById('more-details-title').textContent = t.more_details;
    document.getElementById('footer-line1').textContent = t.footer_line1;
}

// NEW: Show error on loading screen
function showError(message) {
    loadingErrorText.textContent = message;
    loadingError.classList.remove('hidden');
    document.querySelector('#loading-screen .spinner').classList.add('hidden');
    document.getElementById('loading-title').classList.add('hidden');
    document.getElementById('loading-subtitle').classList.add('hidden');
}

// NEW: Retry button logic
function retryLoad() {
    const t = translations[currentLang];
    loadingError.classList.add('hidden');
    document.querySelector('#loading-screen .spinner').classList.remove('hidden');
    document.getElementById('loading-title').classList.remove('hidden');
    document.getElementById('loading-subtitle').classList.remove('hidden');
    document.getElementById('loading-title').textContent = t.loading_title;
    document.getElementById('loading-subtitle').textContent = t.loading_subtitle;
    loadInitialData();
}

// --- Location Logic (Mostly Unchanged) ---

function checkLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
            timeout: 10000
        });
    } else {
        locationError();
    }
}

async function locationSuccess(position) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&accept-language=en`);
        const data = await response.json();
        
        let detectedState = data.address.state;
        let detectedDistrict = data.address.state_district || data.address.county;

        if (detectedState && detectedDistrict) {
            detectedDistrict = detectedDistrict.replace(" District", "").trim();
            
            console.log("Detected:", detectedDistrict, ",", detectedState);
            
            // Find matching state and district
            const matchedState = Object.keys(apiData).find(state => 
                state.toLowerCase() === detectedState.toLowerCase()
            );
            
            if (matchedState) {
                const matchedDistrict = Object.keys(apiData[matchedState]).find(district => 
                    district.toLowerCase() === detectedDistrict.toLowerCase()
                );
                
                if (matchedDistrict) {
                    console.log("Location matched! Showing dashboard.");
                    renderDashboard(matchedState, matchedDistrict);
                    loadingScreen.classList.add('hidden');
                    dashboard.classList.remove('hidden');
                    return;
                }
            }
            // If match fails, show the "not found" message and selector
            showLocationNotFound(detectedState, detectedDistrict);
        } else {
            locationError();
        }
    } catch (error) {
        console.error("Geocoding failed:", error);
        locationError();
    }
}

function locationError() {
    // MODIFIED: Skip state selection and go directly to Gujarat districts
    selectedState = 'GUJARAT';
    populateDistrictSelector(selectedState);
    loadingScreen.classList.add('hidden');
    districtSelector.classList.remove('hidden');
}

function showStateSelector() {
    window.speechSynthesis.cancel();
    dashboard.classList.add('hidden');
    districtSelector.classList.add('hidden');
    
    // MODIFIED: Always show Gujarat districts
    selectedState = 'GUJARAT';
    populateDistrictSelector(selectedState);
    districtSelector.classList.remove('hidden');

    // Ensure location message is visible if it was shown before
    const locationMessage = document.getElementById('location-message');
    if (locationMessage.textContent.trim() !== "") {
        locationMessage.classList.remove('hidden');
    }
}


function populateDistrictSelector(stateName) {
    const container = document.getElementById('district-grid');
    const districts = Object.keys(apiData[stateName]).sort();
    
    document.getElementById('district-select-title').textContent = `${translations[currentLang].district_select_title} (${stateName})`;
    
    container.innerHTML = '';
    districts.forEach(districtKey => {
        const district = apiData[stateName][districtKey];
        const displayName = (currentLang === 'guj') ? district.displayName_guj : district.displayName_en;
        
        const button = document.createElement('button');
        button.className = "btn-grid";
        button.textContent = displayName;
        button.onclick = () => selectDistrict(stateName, districtKey);
        container.appendChild(button);
    });
}

function selectDistrict(stateName, districtKey) {
    districtSelector.classList.add('hidden');
    renderDashboard(stateName, districtKey);
    dashboard.classList.remove('hidden');
}

// --- Dashboard Rendering (NEW) ---

function renderDashboard(stateName, districtKey) {
    const t = translations[currentLang];
    const current = apiData[stateName][districtKey];
    
    // --- 1. District Info ---
    const displayName = (currentLang === 'guj') ? current.displayName_guj : current.displayName_en;
    document.getElementById('district-name').textContent = displayName;
    document.getElementById('dash-subtitle').textContent = t.dash_subtitle;
    
    // Format the date
    const updatedDate = new Date(current.lastUpdated).toLocaleDateString(t.lang_code, {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('dash-period').textContent = `${current.month} ${current.finYear}`;
    document.getElementById('footer-line2').textContent = t.footer_line2(updatedDate);

    // --- 2. Overall Rating ---
    const rating = getRating(current);
    document.getElementById('overall-rating-content').innerHTML = `
        <div class="rating-emoji">${rating.emoji}</div>
        <div class="rating-text ${rating.class}">${rating.text}</div>
    `;
    const summaryText = rating.summary(displayName);
    document.getElementById('overall-rating-summary').textContent = summaryText;
    document.getElementById('overall-audio-btn').onclick = () => speak(summaryText);

    // --- 3. Metric Card 1: Employment ---
    document.getElementById('metric-value-employment').textContent = `${current.employmentPc}%`;
    const compEmp = renderComparison('employment', current.employmentPc, mockComparisonData.state_avg_employment_pc, t);
    document.getElementById('metric-comp-employment').innerHTML = compEmp.html;
    const empText = `${t.metric_title_employment}: ${current.employmentPc}%. ${compEmp.text}`;
    document.getElementById('metric-audio-employment').innerHTML = ICONS.audio;
    document.getElementById('metric-audio-employment').onclick = () => speak(empText);

    // --- 4. Metric Card 2: Payment ---
    document.getElementById('metric-value-payment').textContent = `${current.paymentOnTime}%`;
    const compPay = renderComparison('payment', current.paymentOnTime, mockComparisonData.state_avg_payment, t);
    document.getElementById('metric-comp-payment').innerHTML = compPay.html;
    const payText = `${t.metric_title_payment}: ${current.paymentOnTime}%. ${compPay.text}`;
    document.getElementById('metric-audio-payment').innerHTML = ICONS.audio;
    document.getElementById('metric-audio-payment').onclick = () => speak(payText);

    // --- 5. Metric Card 3: Work Done ---
    const personDaysFormatted = current.personDays.toLocaleString(t.lang_code);
    document.getElementById('metric-value-work').textContent = personDaysFormatted;
    const compWork = renderComparison('work', current.personDays, mockComparisonData.last_month_person_days, t);
    document.getElementById('metric-comp-work').innerHTML = compWork.html;
    const workText = `${t.metric_title_work}: ${personDaysFormatted}. ${compWork.text}`;
    document.getElementById('metric-audio-work').innerHTML = ICONS.audio;
    document.getElementById('metric-audio-work').onclick = () => speak(workText);

    // --- 6. Historical Chart ---
    // Add current month's data to the mock history
    const allHistory = [
        ...mockComparisonData.historical, 
        { 
            month: current.month.slice(0, 3), 
            work_pc: current.employmentPc, 
            payment_pc: current.paymentOnTime 
        }
    ];
    renderHistoricalChart(allHistory, t);

    // --- 7. Detailed Stats Accordion ---
    renderDetailedStats(current, t);

    // --- 8. Reset to first tab ---
    showTab('current');
}

// NEW: Renders the comparison box
function renderComparison(type, value, comparisonValue, t) {
    let html = '';
    let text = '';
    
    if (type === 'employment' || type === 'payment') {
        const diff = value - comparisonValue;
        if (diff > 2) {
            html = `<div class="comparison-good">${ICONS.up} ${t.comp_vs_state(comparisonValue)}</div>`;
            text = t.comp_vs_state(comparisonValue);
        } else if (diff < -2) {
            html = `<div class="comparison-bad">${ICONS.down} ${t.comp_vs_state_lower(comparisonValue)}</div>`;
            text = t.comp_vs_state_lower(comparisonValue);
        } else {
            html = `<div class="comparison-neutral">${ICONS.neutral} ${t.comp_neutral}</div>`;
            text = t.comp_neutral;
        }
    } else if (type === 'work') {
        const diff = value - comparisonValue;
        const compValFormatted = comparisonValue.toLocaleString(t.lang_code);
        if (diff > 0) {
            html = `<div class="comparison-good">${ICONS.up} ${t.comp_vs_last_month_up(compValFormatted)}</div>`;
            text = t.comp_vs_last_month_up(compValFormatted);
        } else {
            html = `<div class="comparison-bad">${ICONS.down} ${t.comp_vs_last_month_down(compValFormatted)}</div>`;
            text = t.comp_vs_last_month_down(compValFormatted);
        }
    }
    return { html, text };
}

// NEW: Renders the detailed stats accordion
function renderDetailedStats(current, t) {
    const format = (num) => num.toLocaleString(t.lang_code);
    const container = document.getElementById('stats-details-container');
    
    const stats = [
        { label: 'Active Job Cards', value: format(current.activeJobCards) },
        { label: 'Households Worked', value: format(current.householdsWorked) },
        { label: 'Avg. Employment Days', value: current.avgDays.toFixed(1) },
        { label: 'Avg. Wage (₹)', value: current.avgWage.toFixed(2) },
        { label: 'Completed Works', value: format(current.completedWorks) },
        { label: 'Ongoing Works', value: format(current.ongoingWorks) },
        { label: 'Women (%)', value: `${current.womenPercentage}%` },
        { label: 'SC (%)', value: `${current.scPercentage}%` },
        { label: 'ST (%)', value: `${current.stPercentage}%` },
    ];
    
    // Simple i18n for labels - in a real app, these labels would be in the t object
    const labels_guj = {
        'Active Job Cards': 'સક્રિય જોબ કાર્ડ',
        'Households Worked': 'કામ મેળવનાર ઘર',
        'Avg. Employment Days': 'સરેરાશ રોજગાર દિવસ',
        'Avg. Wage (₹)': 'સરેરાશ મજૂરી (₹)',
        'Completed Works': 'પૂર્ણ થયેલ કામ',
        'Ongoing Works': 'ચાલુ કામ',
        'Women (%)': 'મહિલા (%)',
        'SC (%)': 'SC (%)',
        'ST (%)': 'ST (%)',
    };

    container.innerHTML = stats.map(stat => {
        const label = (currentLang === 'guj' && labels_guj[stat.label]) ? labels_guj[stat.label] : stat.label;
        return `
            <div class="detail-stat-item">
                <div class="detail-stat-label">${label}</div>
                <div class="detail-stat-value">${stat.value}</div>
            </div>
        `;
    }).join('');
}

// NEW: Gets the overall rating
function getRating(stats) {
    const t = translations[currentLang];
    const workScore = stats.employmentPc; // % of job card holders who got work
    const paymentScore = stats.paymentOnTime; // % of timely payments

    if (workScore > 60 && paymentScore > 90) {
        return { text: t.rating_vgood, emoji: "👍", class: "rating-vgood", summary: t.summary_vgood };
    } else if (workScore > 50 && paymentScore > 80) {
        return { text: t.rating_good, emoji: "🙂", class: "rating-good", summary: t.summary_good };
    } else if (workScore > 40 || paymentScore > 70) {
        return { text: t.rating_ok, emoji: "😐", class: "rating-ok", summary: t.summary_ok };
    }
    return { text: t.rating_bad, emoji: "👎", class: "rating-bad", summary: t.summary_bad };
}

// NEW: Renders the historical chart
function renderHistoricalChart(historyData, t) {
    const ctx = document.getElementById('historical-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (historicalChart) {
        historicalChart.destroy();
    }
    
    const labels = historyData.map(d => d.month);
    
    historicalChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: t.chart_label_work,
                    data: historyData.map(d => d.work_pc),
                    borderColor: '#0d6efd',
                    backgroundColor: '#0d6efd',
                    tension: 0.1,
                    yAxisID: 'y'
                },
                {
                    label: t.chart_label_payment,
                    data: historyData.map(d => d.payment_pc),
                    borderColor: '#198754',
                    backgroundColor: '#198754',
                    tension: 0.1,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// NEW: Tab switching logic
function showTab(tabName) {
    if (tabName === 'current') {
        document.getElementById('tab-content-current').classList.remove('hidden');
        document.getElementById('tab-content-history').classList.add('hidden');
        document.getElementById('tab-current').classList.add('active');
        document.getElementById('tab-history').classList.remove('active');
    } else {
        document.getElementById('tab-content-current').classList.add('hidden');
        document.getElementById('tab-content-history').classList.remove('hidden');
        document.getElementById('tab-current').classList.remove('active');
        document.getElementById('tab-history').classList.add('active');
    }
}
