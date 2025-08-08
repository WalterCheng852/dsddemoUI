// ===== GLOBAL VARIABLES & DATA =====

// Sample data - 模擬 React 應用程式嘅數據結構
const sampleWorkers = [
    {
        id: "1",
        serialNumber: "001",
        name: "Chen Liping",
        phone: "52663018",
        greenCardNumber: "HRM00319579",
        location: "MPS2-B1 1/F",
        workType: "密閉空間工作",
        status: "Active",
        workContent: "安裝伺服器機架和電源插座",
        company: "XXXX工程服務有限公司",
        supervisor: "CHAN TAI MAN",
        supervisorTel: "12345678",
        workerCount: 2,
        onSiteWorkerInfo: "工人 1",
        permitNumber: "WO-00457",
        additionalWorker: "額外工人 12345678",
        workTypes: "無密閉空間工作\n無熱工作\n無高空工作",
        dsdOfficer: "陳小文 12345678",
        tokenNumber: "1",
        walkieTalkieCount: 0,
        cctvInfo: "",
        gasDetectorCount: 0,
        checkInPerson: "LEE TAI MAN",
        confirmEntryPerson: "LEE TAI MAN",
        mps2ConfirmPerson: "Yuk Huen",
        timestamps: {
            registration: "2025-07-11 08:55",
            check: "07-11 08:59",
            entry: "07-11 08:59",
            mps2Entry: "07-11 09:21",
        },
    },
    {
        id: "2",
        serialNumber: "002",
        name: "CHOW Yuk Huen",
        phone: "57203103",
        greenCardNumber: "ATA7354",
        location: "MPS2-B1 2/F",
        workType: "離地工作",
        status: "Active",
        workContent: "高架平台維護工作",
        company: "ABC建築有限公司",
        supervisor: "WONG KAM WAH",
        supervisorTel: "98765432",
        workerCount: 1,
        onSiteWorkerInfo: "CHOW Yuk Huen",
        permitNumber: "WO-00456",
        additionalWorker: "",
        workTypes: "僅高空工作",
        dsdOfficer: "LEE TAI MAN",
        tokenNumber: "2",
        walkieTalkieCount: 1,
        cctvInfo: "CCTV-002",
        gasDetectorCount: 1,
        checkInPerson: "LEE TAI MAN",
        confirmEntryPerson: "LEE TAI MAN",
        mps2ConfirmPerson: "Yuk Huen",
        timestamps: {
            registration: "2025-07-11 09:15",
            check: "07-11 09:20",
            entry: "07-11 09:25",
            mps2Entry: "07-11 09:45",
        },
    },
    {
        id: "3",
        serialNumber: "003",
        name: "Wong Tai Man",
        phone: "55555555",
        greenCardNumber: "GRM12345",
        location: "MPS2-B1 3/F",
        workType: "熱工作",
        status: "Pending Checkout",
        expectedOut: "15:30",
        workContent: "焊接和熱切割作業",
        company: "熱工作專家",
        supervisor: "CHAN SIU MING",
        supervisorTel: "11111111",
        workerCount: 2,
        onSiteWorkerInfo: "Wong Tai Man ",
        permitNumber: "HW-789",
        additionalWorker: "SIU MING 22222222",
        workTypes: "需要熱工作許可證",
        dsdOfficer: "TSANG HOI SHAN",
        tokenNumber: "3",
        walkieTalkieCount: 2,
        cctvInfo: "CCTV-003",
        gasDetectorCount: 2,
        checkInPerson: "TSANG HOI SHAN",
        confirmEntryPerson: "TSANG HOI SHAN",
        mps2ConfirmPerson: "監督員02",
        timestamps: {
            registration: "2025-07-11 07:30",
            check: "07-11 07:35",
            entry: "07-11 07:40",
            mps2Entry: "07-11 08:00",
        },
    },
];

const deviceAssignments = [
    {
        deviceId: "WT-001",
        team: "隊伍 A",
        worker: "Chen Liping",
        borrowedTime: "08:30",
        returnedTime: "12:30",
    },
    {
        deviceId: "WT-002",
        team: "隊伍 A",
        worker: "CHOW Yuk Huen",
        borrowedTime: "08:35",
    },
    {
        deviceId: "WT-003",
        team: "隊伍 B",
        worker: "Wong Tai Man",
        borrowedTime: "09:00",
    },
    {
        deviceId: "WT-004",
        team: "隊伍 B",
        worker: "Li Ming",
        borrowedTime: "09:15",
    },
    {
        deviceId: "WT-005",
        team: "隊伍 C",
        worker: "Chen Liping",
        borrowedTime: "10:00",
    },
    {
        deviceId: "CCTV-001",
        team: "隊伍 A",
        worker: "Chen Liping",
        borrowedTime: "08:30",
    },
    {
        deviceId: "CCTV-002",
        team: "隊伍 B",
        worker: "Wong Tai Man",
        borrowedTime: "09:00",
    },
];

const swacRecords = [
    {
        id: "1",
        number: "Q366",
        workOrderNumber: "WO-00234",
        contractTitle: "新界西區多個污水處理廠和泵站的 EBM 工程",
        term: "2025-07-10",
        emm: "EMM-001",
        location: "MPS2-B1",
        startTime: "08:00",
        endTime: "17:30",
    },
    {
        id: "2",
        number: "Q367",
        workOrderNumber: "WO-00235",
        contractTitle: "網絡基礎設施安裝和維護",
        term: "2025-07-11",
        emm: "EMM-002",
        location: "MPS2-B2",
        startTime: "09:00",
        endTime: "18:00",
    },
    {
        id: "3",
        number: "Q368",
        workOrderNumber: "WO-00236",
        contractTitle: "密閉空間清潔和檢查服務",
        term: "2025-07-11",
        emm: "EMM-003",
        location: "MPS2-B3",
        startTime: "07:00",
        endTime: "16:00",
    },
];

// Application state
let currentPage = 'dashboard';
let selectedSwacRecord = '';
let isNewUser = null;
let formWorkers = [
    {
        id: "1",
        name: "Chen Liping",
        phone: "52663018",
        greenCardNumber: "HRM00319579",
        checked: false,
    },
    {
        id: "2",
        name: "CHOW Yuk Huen",
        phone: "57203103",
        greenCardNumber: "ATA7354",
        checked: false,
    },
];

// ===== UTILITY FUNCTIONS =====

// Format current time for Hong Kong timezone
function formatCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-HK", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Hong_Kong",
    });
    const dateString = now.toLocaleDateString("en-HK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Hong_Kong",
    });
    return `${timeString} HKT, ${dateString}`;
}

// Get status badge HTML
function getStatusBadge(status) {
    switch (status) {
        case "Active":
            return '<span class="badge badge-success"><i data-lucide="check-circle"></i>進行中</span>';
        case "Issues":
            return '<span class="badge badge-error"><i data-lucide="x-circle"></i>問題</span>';
        case "Pending Checkout":
            return '<span class="badge badge-warning"><i data-lucide="alert-triangle"></i>待離場</span>';
        default:
            return `<span class="badge badge-secondary">${status}</span>`;
    }
}

// Initialize Lucide icons
function initializeIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Show loading overlay
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

// Hide loading overlay
function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Show toast notification
function showToast(message, type = 'info') {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#333333'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// ===== PAGE NAVIGATION =====

function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    document.getElementById(`${pageName}-page`).classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('nav-btn-active');
    });
    document.querySelector(`[data-page="${pageName}"]`).classList.add('nav-btn-active');
    
    currentPage = pageName;
    
    // Initialize page-specific content
    if (pageName === 'dashboard') {
        initializeDashboard();
    } else if (pageName === 'form-registration') {
        initializeFormRegistration();
        // Reset form registration to user selection screen
        resetFormRegistration();
    }
}

// ===== DASHBOARD FUNCTIONS =====

function initializeDashboard() {
    populateWorkersTable();
    populateDeviceTracking();
    updateCurrentTime();
    
    // Set up real-time updates
    setInterval(updateCurrentTime, 60000); // Update every minute
}

function populateWorkersTable() {
    const tbody = document.getElementById('workersTableBody');
    tbody.innerHTML = '';
    
    sampleWorkers.forEach(worker => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${worker.serialNumber}</td>
            <td>
                <div style="font-size: 0.75rem;">
                    <div><strong>工作內容:</strong> ${worker.workContent}</div>
                    <div><strong>工作地點:</strong> ${worker.location}</div>
                    <div><strong>公司:</strong> ${worker.company}</div>
                    <div><strong>承辦商現場負責人:</strong> ${worker.supervisor} Tel:${worker.supervisorTel}</div>
                    <div><strong>工人數目:</strong> ${worker.workerCount}</div>
                    <div><strong>現場開工工人稱呼及電話:</strong> ${worker.onSiteWorkerInfo}</div>
                    <div><strong>許可證號:</strong> ${worker.permitNumber}</div>
                </div>
            </td>
            <td>${worker.dsdOfficer}</td>
            <td><span class="badge badge-secondary">${worker.workType}</span></td>
            <td>
                <div style="font-size: 0.75rem;">
                    <div>籌號: ${worker.tokenNumber}</div>
                    <div>對講機: ${worker.walkieTalkieCount}</div>
                    <div>CCTV: ${worker.cctvInfo || "無"}</div>
                    <div>氣體機: ${worker.gasDetectorCount}</div>
                </div>
            </td>
            <td>
                <div style="font-size: 0.75rem;">
                    <div>查核入場: ${worker.checkInPerson}</div>
                    <div>確認入場: ${worker.confirmEntryPerson}</div>
                    <div>MPS2確認入場: ${worker.mps2ConfirmPerson}</div>
                    <div>確認小休: ${worker.timestamps.breakOut || "未完成"}</div>
                    <div>確認返回: 未完成</div>
                    <div>MPS2確認離場: ${worker.timestamps.mps2Out || "未完成"}</div>
                    <div>確認離場: ${worker.timestamps.confirmOut || "未完成"}</div>
                </div>
            </td>
            <td>${getStatusBadge(worker.status)}</td>
            <td>
                <div style="display: flex; flex-direction: column; gap: 4px;">
                    <div style="display: flex; gap: 4px; justify-content: center;">
                        <button class="btn btn-outline btn-sm" onclick="handleActionClick('${worker.id}', '小休離場')" ${worker.timestamps.breakOut ? 'disabled' : ''}>
                            ${worker.timestamps.breakOut || "小休離場"}
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="handleActionClick('${worker.id}', '確認離場')" ${worker.timestamps.confirmOut ? 'disabled' : ''}>
                            ${worker.timestamps.confirmOut || "確認離場"}
                        </button>
                    </div>
                    <div style="display: flex; gap: 4px; justify-content: center;">
                        <button class="btn btn-outline btn-sm" onclick="handleActionClick('${worker.id}', 'MPS2確認離場')" ${worker.timestamps.mps2Out ? 'disabled' : ''}>
                            ${worker.timestamps.mps2Out || "MPS2確認離場"}
                        </button>
                                                        <button class="btn btn-danger btn-sm" onclick="showRejectionModal()">
                                    拒絕
                                </button>
                    </div>
                    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #D1D5DB; font-size: 0.75rem; color: rgba(44, 44, 44, 0.6);">
                        <div>登記: ${worker.timestamps.registration}</div>
                        <div>查核: ${worker.timestamps.check}</div>
                        <div>進場: ${worker.timestamps.entry}</div>
                        <div>MPS2進場: ${worker.timestamps.mps2Entry}</div>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    initializeIcons();
}

function populateDeviceTracking() {
    // Calculate device statistics
    const walkieTalkieAssignments = deviceAssignments.filter(d => d.deviceId.startsWith("WT-"));
    const cctvAssignments = deviceAssignments.filter(d => d.deviceId.startsWith("CCTV-"));
    
    const walkieTalkies = {
        borrowed: walkieTalkieAssignments.length,
        returned: walkieTalkieAssignments.filter(d => d.returnedTime).length,
    };
    const cctvDevices = {
        borrowed: cctvAssignments.length,
        returned: cctvAssignments.filter(d => d.returnedTime).length,
    };
    
    const walkieStatus = walkieTalkies.borrowed === walkieTalkies.returned;
    const cctvStatus = cctvDevices.borrowed === cctvDevices.returned;
    
    // Update statistics
    document.getElementById('walkieBorrowed').textContent = walkieTalkies.borrowed;
    document.getElementById('walkieReturned').textContent = walkieTalkies.returned;
    document.getElementById('walkieStatus').textContent = walkieStatus ? "全部歸還" : "尚有借出設備";
    document.getElementById('walkieStatus').className = walkieStatus ? "badge badge-success" : "badge badge-error";
    
    document.getElementById('cctvBorrowed').textContent = cctvDevices.borrowed;
    document.getElementById('cctvReturned').textContent = cctvDevices.returned;
    document.getElementById('cctvStatus').textContent = cctvStatus ? "全部歸還" : "尚有借出設備";
    document.getElementById('cctvStatus').className = cctvStatus ? "badge badge-success" : "badge badge-error";
    
    // Populate device details
    const walkieDetails = document.getElementById('walkieDetails');
    const cctvDetails = document.getElementById('cctvDetails');
    
    walkieDetails.innerHTML = '';
    cctvDetails.innerHTML = '';
    
    walkieTalkieAssignments.forEach(device => {
        const deviceItem = document.createElement('div');
        deviceItem.className = 'device-item';
        deviceItem.innerHTML = `
            <span>${device.deviceId}</span>
            <span>${device.team} - ${device.worker}</span>
            <span>${device.returnedTime ? 
                '<span class="badge badge-success">已歸還</span>' : 
                '<span class="badge badge-warning">借用中</span>'
            }</span>
        `;
        walkieDetails.appendChild(deviceItem);
    });
    
    cctvAssignments.forEach(device => {
        const deviceItem = document.createElement('div');
        deviceItem.className = 'device-item';
        deviceItem.innerHTML = `
            <span>${device.deviceId}</span>
            <span>${device.team} - ${device.worker}</span>
            <span>${device.returnedTime ? 
                '<span class="badge badge-success">已歸還</span>' : 
                '<span class="badge badge-warning">借用中</span>'
            }</span>
        `;
        cctvDetails.appendChild(deviceItem);
    });
}

function updateCurrentTime() {
    document.getElementById('currentTime').textContent = formatCurrentTime();
}

function handleActionClick(workerId, action) {
    const currentTime = new Date().toLocaleString("en-HK", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Hong_Kong",
    });
    
    // Update worker data
    const worker = sampleWorkers.find(w => w.id === workerId);
    if (worker) {
        switch (action) {
            case "小休離場":
                worker.timestamps.breakOut = currentTime;
                break;
            case "確認離場":
                worker.timestamps.confirmOut = currentTime;
                break;
            case "MPS2確認離場":
                worker.timestamps.mps2Out = currentTime;
                break;
        }
        
        // Re-render the table
        populateWorkersTable();
        showToast(`操作 "${action}" 已完成 - ${worker.name}`, 'success');
    }
}

// ===== FORM REGISTRATION FUNCTIONS =====

function initializeFormRegistration() {
    populateSwacTable();
    setupFormEventListeners();
}

function resetFormRegistration() {
    // Reset to user selection screen
    isNewUser = null;
    selectedSwacRecord = '';
    
    // Show user selection, hide form content
    document.getElementById('user-selection').style.display = 'block';
    document.getElementById('form-content').style.display = 'none';
    
    // Reset form fields
    clearFormData();
}

function populateSwacTable() {
    const tbody = document.getElementById('swacTableBody');
    tbody.innerHTML = '';
    
    swacRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input type="radio" name="swacRecord" value="${record.id}" ${selectedSwacRecord === record.id ? 'checked' : ''}>
            </td>
            <td>${record.number}</td>
            <td>${record.workOrderNumber}</td>
            <td title="${record.contractTitle}">${record.contractTitle}</td>
            <td>${record.term}</td>
            <td>${record.emm}</td>
            <td>${record.location}</td>
            <td>${record.startTime}</td>
            <td>${record.endTime}</td>
        `;
        tbody.appendChild(row);
    });
}

function setupFormEventListeners() {
    // SWAC record selection
    document.querySelectorAll('input[name="swacRecord"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedSwacRecord = this.value;
            showFormSections();
        });
    });
    
    // User selection buttons
    document.querySelectorAll('.selection-option button').forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.closest('.selection-option').dataset.option;
            handleUserSelection(option);
        });
    });
    
    // Add worker button
    document.getElementById('addWorkerBtn').addEventListener('click', addNewWorker);
    
    // Form submission
    document.querySelector('.btn-primary').addEventListener('click', handleSave);
    document.querySelector('.btn-danger').addEventListener('click', showRejectionModal);
    
    // Modal events
    document.getElementById('closeModal').addEventListener('click', hideRejectionModal);
    document.getElementById('cancelRejection').addEventListener('click', hideRejectionModal);
    document.getElementById('confirmRejection').addEventListener('click', handleRejection);
}

function handleUserSelection(option) {
    isNewUser = option === 'new';
    
    if (option === 'existing') {
        // Quick load - populate with sample data for existing user
        selectedSwacRecord = "1";
        // Pre-load data will happen when contract is selected
    } else {
        // New user - clear all fields
        selectedSwacRecord = "1";
        // Clear data will happen when contract is selected
    }
    
    // Hide user selection and show form content
    document.getElementById('user-selection').style.display = 'none';
    document.getElementById('form-content').style.display = 'block';
    
    // Show SWAC table first, wait for contract selection
    document.getElementById('swac-daily').style.display = 'none';
    document.getElementById('workers-section').style.display = 'none';
    document.getElementById('additional-fields').style.display = 'none';
    document.getElementById('submission-section').style.display = 'none';
    
    // Update SWAC table
    populateSwacTable();
}

function showFormSections() {
    if (selectedSwacRecord || isNewUser !== null) {
        document.getElementById('swac-daily').style.display = 'block';
        document.getElementById('workers-section').style.display = 'block';
        document.getElementById('additional-fields').style.display = 'block';
        document.getElementById('submission-section').style.display = 'block';
        
        // Load data based on user type and selected contract
        if (isNewUser === false) {
            // Existing user - load sample data
            loadExistingUserData();
        } else if (isNewUser === true) {
            // New user - clear all fields
            clearFormData();
        }
        
        populateWorkersFormTable();
    }
}

function loadExistingUserData() {
    // Load sample data for existing user
            document.getElementById('todayWorkContent').value = "安裝伺服器機架和電源插座";
    document.getElementById('workLocation').value = "MPS2-B1 1/F";
    document.getElementById('supervisor').value = "supervisor1";
    document.getElementById('expectedDepartureTime').value = "18:00";
            document.getElementById('siteWorkerInfo').value = "工人 1";
    document.getElementById('cctvInfo').value = "URL: CCTV-001.com \nUsername:cctv01\nPassword:abc123";



    document.getElementById('consultant').value = "consultant1";
    document.getElementById('personInCharge').value = "person1";
    document.getElementById('walkieTalkie').value = "assigned";
    document.getElementById('signatureConfirmation').value = "已簽署";
    document.getElementById('numbersOfDevice').value = "2";
    document.getElementById('chouNumber').value = "1";
    
    // Check work types
    document.querySelector('input[value="高空工作"]').checked = true;
    
    // Check workers
    formWorkers.forEach(worker => {
        worker.checked = true;
    });
}

function clearFormData() {
    // Clear all form fields for new user
    document.getElementById('todayWorkContent').value = "";
    document.getElementById('workLocation').value = "";
    document.getElementById('supervisor').value = "";
    document.getElementById('expectedDepartureTime').value = "18:00";
    document.getElementById('siteWorkerInfo').value = "";
    document.getElementById('cctvInfo').value = "";
    document.getElementById('consultant').value = "";
    document.getElementById('personInCharge').value = "";
    document.getElementById('walkieTalkie').value = "";
    document.getElementById('signatureConfirmation').value = "";
    document.getElementById('numbersOfDevice').value = "";
    document.getElementById('chouNumber').value = "";
    
    // Uncheck work types
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Uncheck workers
    formWorkers.forEach(worker => {
        worker.checked = false;
    });
}

function populateWorkersFormTable() {
    const tbody = document.getElementById('workersFormTableBody');
    tbody.innerHTML = '';
    
    formWorkers.forEach(worker => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input type="checkbox" ${worker.checked ? 'checked' : ''} onchange="handleWorkerCheck('${worker.id}', this.checked)">
            </td>
            <td>
                <input type="text" class="form-input" value="${worker.name}" placeholder="輸入姓名" onchange="updateWorkerInfo('${worker.id}', 'name', this.value)">
            </td>
            <td>
                <input type="text" class="form-input" value="${worker.phone}" placeholder="輸入電話" onchange="updateWorkerInfo('${worker.id}', 'phone', this.value)">
            </td>
            <td>
                <input type="text" class="form-input" value="${worker.greenCardNumber}" placeholder="輸入綠卡號碼" onchange="updateWorkerInfo('${worker.id}', 'greenCardNumber', this.value)">
            </td>
            <td>
                ${formWorkers.length > 1 ? 
                    `<button class="btn btn-outline btn-sm" onclick="removeWorker('${worker.id}')" style="color: #EF4444; border-color: #EF4444;">删除</button>` : 
                    ''
                }
            </td>
        `;
        tbody.appendChild(row);
    });
    
    updateWorkerCount();
}

function handleWorkerCheck(workerId, checked) {
    const worker = formWorkers.find(w => w.id === workerId);
    if (worker) {
        worker.checked = checked;
        updateWorkerCount();
    }
}

function updateWorkerInfo(workerId, field, value) {
    const worker = formWorkers.find(w => w.id === workerId);
    if (worker) {
        worker[field] = value;
    }
}

function addNewWorker() {
    const newWorkerId = (formWorkers.length + 1).toString();
    const newWorker = {
        id: newWorkerId,
        name: "",
        phone: "",
        greenCardNumber: "",
        checked: false,
    };
    formWorkers.push(newWorker);
    populateWorkersFormTable();
}

function removeWorker(workerId) {
    formWorkers = formWorkers.filter(w => w.id !== workerId);
    populateWorkersFormTable();
}

function updateWorkerCount() {
    const checkedCount = formWorkers.filter(w => w.checked).length;
    document.getElementById('workerCount').textContent = checkedCount;
}

// ===== MODAL FUNCTIONS =====

function showRejectionModal() {
    document.getElementById('rejectionModal').style.display = 'flex';
}

function hideRejectionModal() {
    document.getElementById('rejectionModal').style.display = 'none';
    document.getElementById('rejectionReason').value = '';
}

function handleRejection() {
    const reason = document.getElementById('rejectionReason').value.trim();
    if (reason) {
        console.log('Rejection reason:', reason);
        hideRejectionModal();
        showToast('登記已成功拒絕', 'success');
    } else {
        showToast('請輸入拒絕原因', 'error');
    }
}

// ===== FORM HANDLING =====

function handleSave() {
    // Validate required fields
    const requiredFields = ['todayWorkContent', 'workLocation', 'supervisor'];
    const missingFields = [];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            missingFields.push(fieldId);
        }
    });
    

    

    
    // Save data (in real app, this would send to server)
    const formData = {
        swacRecord: selectedSwacRecord,
        todayWorkContent: document.getElementById('todayWorkContent').value,
        workLocation: document.getElementById('workLocation').value,
        supervisor: document.getElementById('supervisor').value,
        expectedDepartureTime: document.getElementById('expectedDepartureTime').value,
        workers: checkedWorkers,
        // Add other form fields as needed
    };
    
    console.log('Saving form data:', formData);
    showToast('表單保存成功！', 'success');
    
    // In a real app, you might redirect or show confirmation
}

// ===== REFRESH FUNCTION =====

function handleRefresh() {
    showLoading();
    
    // Simulate API call
    setTimeout(() => {
        if (currentPage === 'dashboard') {
            populateWorkersTable();
            populateDeviceTracking();
        } else if (currentPage === 'form-registration') {
            populateSwacTable();
        }
        
        hideLoading();
        showToast('數據刷新成功', 'success');
    }, 1000);
}

// ===== EVENT LISTENERS =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize icons
    initializeIcons();
    
    // Set up navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Set up refresh button
    document.getElementById('refreshBtn').addEventListener('click', handleRefresh);
    
    // Initialize dashboard by default
    initializeDashboard();
    
    // Set up SWAC record selection event listeners
    document.addEventListener('change', function(e) {
        if (e.target.name === 'swacRecord') {
            selectedSwacRecord = e.target.value;
            showFormSections();
        }
    });
    
    // Set up global event listeners
    document.addEventListener('click', function(e) {
        // Handle modal backdrop click
        if (e.target.classList.contains('modal')) {
            hideRejectionModal();
        }
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// ===== COMMENTS FOR FUTURE DEVELOPMENT =====

/*
FUTURE DEVELOPMENT NOTES:

1. BACKEND INTEGRATION:
   - Replace sample data with real API calls
   - Implement proper error handling
   - Add loading states for all async operations
   - Implement proper form validation with server-side validation

2. STATE MANAGEMENT:
   - Consider using a state management library for complex state
   - Implement proper data persistence
   - Add undo/redo functionality for form changes

3. PERFORMANCE OPTIMIZATIONS:
   - Implement virtual scrolling for large tables
   - Add pagination for worker lists
   - Optimize re-renders with proper event delegation
   - Implement lazy loading for non-critical components

4. ACCESSIBILITY IMPROVEMENTS:
   - Add proper ARIA labels
   - Implement keyboard navigation
   - Add screen reader support
   - Ensure proper focus management

5. SECURITY CONSIDERATIONS:
   - Implement proper input sanitization
   - Add CSRF protection
   - Implement proper authentication/authorization
   - Add rate limiting for API calls

6. TESTING:
   - Add unit tests for utility functions
   - Implement integration tests for form workflows
   - Add end-to-end tests for critical user journeys
   - Implement visual regression testing

7. INTERNATIONALIZATION:
   - Extract all text to translation files
   - Implement proper date/time formatting for different locales
   - Add RTL support if needed

8. MOBILE OPTIMIZATIONS:
   - Implement touch-friendly interactions
   - Add swipe gestures for navigation
   - Optimize table layouts for mobile
   - Add offline support with service workers

9. MONITORING & ANALYTICS:
   - Add error tracking
   - Implement user analytics
   - Add performance monitoring
   - Implement A/B testing framework

10. DEPLOYMENT:
    - Set up CI/CD pipeline
    - Implement proper environment configuration
    - Add health checks
    - Set up monitoring and alerting
*/ 