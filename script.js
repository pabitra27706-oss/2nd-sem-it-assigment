// ================================
// APP STATE
// ================================
let currentQuestionId = null;
let currentFilter = 'all';

// ================================
// LOCAL STORAGE HELPERS
// ================================
function loadData() {
    const saved = localStorage.getItem('assignmentData');
    return saved ? JSON.parse(saved) : {};
}

function saveData(data) {
    localStorage.setItem('assignmentData', JSON.stringify(data));
}

function saveFileName() {
    const val = document.getElementById('fileName').value;
    localStorage.setItem('fileName', val);
}

// ================================
// THEME
// ================================
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
}

function applyTheme(theme) {
    const body       = document.body;
    const checkbox   = document.getElementById('themeCheckbox');
    const themeIcon  = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    const topnavBtn  = document.getElementById('topnavThemeBtn');

    if (theme === 'light') {
        body.classList.add('light');
        if (checkbox)   checkbox.checked = true;
        if (themeIcon)  themeIcon.className = 'fas fa-sun theme-icon';
        if (themeLabel) themeLabel.textContent = 'Light Mode';
        if (topnavBtn)  topnavBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light');
        if (checkbox)   checkbox.checked = false;
        if (themeIcon)  themeIcon.className = 'fas fa-moon theme-icon';
        if (themeLabel) themeLabel.textContent = 'Dark Mode';
        if (topnavBtn)  topnavBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const isLight = document.body.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
    showToast(isLight ? '🌙 Dark mode on' : '☀️ Light mode on');
}

// ================================
// TOAST
// ================================
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// ================================
// SIDEBAR
// ================================
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}

function buildSidebarList() {
    const container = document.getElementById('sidebarQuestionList');
    const savedData = loadData();
    container.innerHTML = '';

    questions.forEach(q => {
        const savedCode = savedData[q.id];
        const isDone    = savedCode && savedCode.trim();

        const item = document.createElement('div');
        item.className = 'sidebar-q-item';
        if (isDone)               item.classList.add('done');
        if (q.id === currentQuestionId) item.classList.add('active');

        item.innerHTML = `
            <div class="sq-num">${isDone ? '✓' : q.id}</div>
            <div class="sq-text">Q${q.id}: ${q.question.substring(0, 28)}...</div>
        `;

        item.onclick = () => {
            openEditor(q.id);
            toggleSidebar();
        };

        container.appendChild(item);
    });
}

// ================================
// STATS & PROGRESS
// ================================
function updateStats() {
    const savedData = loadData();
    const completed = Object.values(savedData)
        .filter(v => v && v.trim()).length;
    const pending = 26 - completed;
    const percent = Math.round((completed / 26) * 100);

    const el = id => document.getElementById(id);
    if (el('completedCount'))  el('completedCount').textContent  = completed;
    if (el('pendingCount'))    el('pendingCount').textContent    = pending;
    if (el('progressPercent')) el('progressPercent').textContent = percent + '%';
    if (el('progressFill'))    el('progressFill').style.width   = percent + '%';
}

// ================================
// AUTO SAVE SAMPLE ANSWERS
// ================================
function autoSaveSampleAnswers() {
    const savedData = loadData();
    let changed = false;

    questions.forEach(q => {
        if (!savedData[q.id] && sampleAnswers[q.id]) {
            savedData[q.id] = sampleAnswers[q.id];
            changed = true;
        }
    });

    if (changed) saveData(savedData);
}

// ================================
// FILTER
// ================================
function filterQuestions(type, btn) {
    currentFilter = type;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderQuestionGrid();
}

// ================================
// QUESTION GRID
// ================================
function renderQuestionGrid() {
    const grid      = document.getElementById('questionGrid');
    const savedData = loadData();
    grid.innerHTML  = '';

    let filtered = questions;

    if (currentFilter === 'html') {
        filtered = questions.filter(q => q.id <= 15);
    } else if (currentFilter === 'css') {
        filtered = questions.filter(q => q.id >= 16);
    } else if (currentFilter === 'done') {
        filtered = questions.filter(
            q => savedData[q.id] && savedData[q.id].trim()
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center;
                        padding:40px; color:var(--text-muted);">
                <i class="fas fa-inbox"
                   style="font-size:40px; opacity:0.3;
                          display:block; margin-bottom:12px;"></i>
                No questions found
            </div>`;
        return;
    }

    filtered.forEach(q => {
        const code     = savedData[q.id] || '';
        const isDone   = code.trim() !== '';
        const isCSS    = q.id >= 16;
        const isCustom = isDone && code !== sampleAnswers[q.id];

        const card = document.createElement('div');
        card.className = 'q-card' + (isDone ? ' done' : '');

        card.innerHTML = `
            <div class="q-card-top">
                <span class="q-num-badge">Q${q.id}</span>
                <div style="display:flex; gap:5px; align-items:center;">
                    ${isCustom
                        ? `<span class="q-tag"
                               style="color:#667eea;
                                      border-color:#667eea40;">
                               Custom
                           </span>`
                        : `<span class="q-tag">Sample</span>`
                    }
                    <span class="q-tag">${isCSS ? 'CSS' : 'HTML'}</span>
                </div>
            </div>
            <div class="q-card-text">
                ${q.question.substring(0, 90)}...
            </div>
            <div class="q-card-footer">
                <span class="q-status ${isDone ? 'done' : 'pending'}">
                    <i class="fas fa-${isDone
                        ? 'check-circle' : 'circle'}"></i>
                    ${isDone
                        ? (isCustom ? 'Custom Answer' : 'Sample Answer')
                        : 'Not started'}
                </span>
                <i class="fas fa-chevron-right q-arrow"></i>
            </div>
        `;

        card.onclick = () => openEditor(q.id);
        grid.appendChild(card);
    });
}

// ================================
// VIEWS
// ================================
function showListView() {
    document.getElementById('listView').classList.add('active');
    document.getElementById('editorView').classList.remove('active');

    document.getElementById('topnavTitle').innerHTML =
        '<i class="fas fa-home"></i> All Questions';

    document.getElementById('topnavActions').innerHTML = `
        <button class="topnav-theme" onclick="toggleTheme()"
                id="topnavThemeBtn" title="Toggle Theme">
            <i class="fas fa-${
                document.body.classList.contains('light') ? 'sun' : 'moon'
            }"></i>
        </button>
        <button onclick="generatePDF()" class="btn-icon-primary">
            <i class="fas fa-file-pdf"></i>
            <span>Generate PDF</span>
        </button>`;

    currentQuestionId = null;
    updateStats();
    renderQuestionGrid();
    buildSidebarList();
}

function openEditor(questionId) {
    currentQuestionId = questionId;
    const question  = questions.find(q => q.id === questionId);
    const savedData = loadData();

    document.getElementById('listView').classList.remove('active');
    document.getElementById('editorView').classList.add('active');

    document.getElementById('editorQNum').textContent =
        `Question ${questionId} of 26`;
    document.getElementById('questionText').textContent = question.question;

    document.getElementById('topnavTitle').innerHTML =
        `<i class="fas fa-code"></i> Question ${questionId}`;

    document.getElementById('topnavActions').innerHTML = `
        <button class="topnav-theme" onclick="toggleTheme()"
                id="topnavThemeBtn" title="Toggle Theme">
            <i class="fas fa-${
                document.body.classList.contains('light') ? 'sun' : 'moon'
            }"></i>
        </button>
        <button onclick="runCode()" class="btn-icon-primary">
            <i class="fas fa-play"></i>
            <span>Run</span>
        </button>`;

    const codeToLoad = savedData[questionId] ||
                       sampleAnswers[questionId] || '';
    document.getElementById('codeEditor').value = codeToLoad;

    if (codeToLoad.trim()) {
        document.getElementById('preview').srcdoc = codeToLoad;
        document.getElementById('previewStatus').innerHTML =
            `<span class="status-dot active"></span><span>Running</span>`;
    } else {
        document.getElementById('preview').srcdoc = '';
        document.getElementById('previewStatus').innerHTML =
            `<span class="status-dot"></span><span>Ready</span>`;
    }

    buildSidebarList();
}

// ================================
// CODE ACTIONS
// ================================
function runCode() {
    const code = document.getElementById('codeEditor').value;

    if (!code.trim()) {
        showToast('⚠️ Please write some code first');
        return;
    }

    document.getElementById('preview').srcdoc = code;
    document.getElementById('previewStatus').innerHTML =
        `<span class="status-dot active"></span><span>Running</span>`;

    const savedData = loadData();
    savedData[currentQuestionId] = code;
    saveData(savedData);

    showToast('✅ Code executed successfully');
    updateStats();
    buildSidebarList();
}

function loadSample() {
    if (!currentQuestionId) return;
    const sample = sampleAnswers[currentQuestionId];
    if (sample) {
        document.getElementById('codeEditor').value = sample;
        showToast('📄 Sample answer loaded');
        runCode();
    }
}

function clearCode() {
    if (!currentQuestionId) return;
    if (!confirm('Clear this answer? Sample answer will be restored.')) return;

    const sample = sampleAnswers[currentQuestionId] || '';
    document.getElementById('codeEditor').value = sample;
    document.getElementById('preview').srcdoc   = sample;

    const savedData = loadData();
    savedData[currentQuestionId] = sample;
    saveData(savedData);

    document.getElementById('previewStatus').innerHTML =
        `<span class="status-dot active"></span><span>Running</span>`;

    showToast('🔄 Restored to sample answer');
    updateStats();
    buildSidebarList();
}

function copyCode() {
    const code = document.getElementById('codeEditor').value;
    if (!code.trim()) {
        showToast('⚠️ Nothing to copy');
        return;
    }
    navigator.clipboard.writeText(code)
        .then(() => showToast('📋 Code copied to clipboard'))
        .catch(() => showToast('❌ Copy failed'));
}

// ================================
// NAVIGATION
// ================================
function prevQuestion() {
    if (!currentQuestionId || currentQuestionId <= 1) {
        showToast('⚠️ Already at first question');
        return;
    }
    openEditor(currentQuestionId - 1);
}

function nextQuestion() {
    if (!currentQuestionId || currentQuestionId >= 26) {
        showToast('⚠️ Already at last question');
        return;
    }
    openEditor(currentQuestionId + 1);
}

// ================================
// GENERATE PDF
// ================================
function generatePDF() {
    saveFileName();
    window.open('output.html', '_blank');
}

// ================================
// RESET ALL
// ================================
function resetAll() {
    if (confirm(
        'Reset all answers? Sample answers will be restored for all questions.'
    )) {
        localStorage.removeItem('assignmentData');
        autoSaveSampleAnswers();
        showToast('🔄 All answers reset to sample');
        showListView();

        if (document.getElementById('sidebar').classList.contains('open')) {
            toggleSidebar();
        }
    }
}

// ================================
// AUTO SAVE WHILE TYPING
// ================================
function setupAutoSave() {
    const codeEditor = document.getElementById('codeEditor');
    if (!codeEditor) return;

    let saveTimeout;
    codeEditor.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            if (!currentQuestionId) return;
            const savedData = loadData();
            savedData[currentQuestionId] = codeEditor.value;
            saveData(savedData);
        }, 500);
    });
}

// ================================
// INIT
// ================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const fileNameInput = document.getElementById('fileName');
    if (fileNameInput) {
        const saved = localStorage.getItem('fileName');
        if (saved) fileNameInput.value = saved;
        fileNameInput.addEventListener('input', saveFileName);
    }

    autoSaveSampleAnswers();
    setupAutoSave();
    updateStats();
    renderQuestionGrid();
    buildSidebarList();
});