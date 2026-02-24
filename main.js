// Navigation active state management
function setActiveNav(page) {
  document.querySelectorAll('.topnav-link, .menu-item').forEach(link => {
    link.classList.remove('active');
  });
  
  const topLink = document.querySelector(`[href="${page}.html"]`);
  const sideLink = document.querySelector(`.menu-item[href="${page}.html"]`);
  
  if (topLink) topLink.classList.add('active');
  if (sideLink) sideLink.classList.add('active');
}

// Page navigation functions
function openPage(page) {
  window.location.href = `${page}.html`;
}

// Subject click
function openSubject(subject) {
  alert(`Opening ${subject.toUpperCase()} notes page!`);
  // window.location.href = `subjects.html?type=${subject}`;
}

// Note click
function openNote(noteId) {
  alert(`Opening note: ${noteId.toUpperCase()}`);
  // window.location.href = `note.html?id=${noteId}`;
}

// Announcement click
function openAnnouncement(type) {
  if (type === 'midterm') {
    alert('Mid-term exam details page');
  } else {
    alert('Assignment submission page');
  }
}

// Button functions
function getStarted() {
  window.location.href = 'courses.html';
}

function openChat() {
  alert('Chat support opened!');
  // window.open('chat.html', '_blank');
}

function goPremium() {
  alert('Premium upgrade page!');
  // window.location.href = 'premium.html';
}

function searchNotes() {
  const query = document.getElementById('searchInput').value;
  if (query) {
    alert(`Searching for: ${query}`);
  }
}

// Quick access buttons
document.querySelectorAll('.qa-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.qa-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

// Note rows clickable
document.querySelectorAll('.note-row').forEach(row => {
  row.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-outline')) {
      const title = this.querySelector('.note-title').textContent;
      openNote(title.toLowerCase().replace(/[^a-z]/g, ''));
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setActiveNav('dashboard');
});
// Downloads filtering
function filterDownloads() {
  const search = document.getElementById('downloadsSearch').value.toLowerCase();
  const typeFilter = document.getElementById('typeFilter').value;
  const dateFilter = document.getElementById('dateFilter').value;
  
  const cards = document.querySelectorAll('.download-card');
  
  cards.forEach(card => {
    const name = card.dataset.name;
    const type = card.dataset.type;
    const date = card.dataset.date;
    
    let show = true;
    if (search && !name.includes(search)) show = false;
    if (typeFilter !== 'all' && type !== typeFilter) show = false;
    if (dateFilter !== 'all' && date !== dateFilter) show = false;
    
    card.style.display = show ? 'block' : 'none';
  });
}

function openFile(filename) {
  alert(`Opening file: ${filename}`);
}

function shareFile(filename) {
  if (navigator.share) {
    navigator.share({
      title: filename,
      text: 'Check out this file from ApnaSEM!',
      url: window.location.href
    });
  } else {
    alert(`Share: ${filename}`);
  }
}

function deleteFile(button) {
  if (confirm('Delete this file?')) {
    button.closest('.download-card').style.display = 'none';
    alert('File deleted!');
  }
}

function toggleSelect(checkbox) {
  const card = checkbox.closest('.download-card');
  const bulkActions = document.getElementById('bulkActions');
  const selectedCount = document.querySelectorAll('.file-checkbox input:checked').length;
  
  document.getElementById('selectedCount').textContent = `${selectedCount} selected`;
  bulkActions.style.display = selectedCount > 0 ? 'flex' : 'none';
}

function clearAll() {
  if (confirm('Clear all downloads? This cannot be undone.')) {
    document.querySelectorAll('.download-card').forEach(card => {
      card.style.display = 'none';
    });
  }
}

function deleteSelected() {
  const selected = document.querySelectorAll('.file-checkbox input:checked');
  selected.forEach(cb => {
    cb.closest('.download-card').style.display = 'none';
  });
  document.getElementById('bulkActions').style.display = 'none';
}

function downloadSelected() {
  const selected = document.querySelectorAll('.file-checkbox input:checked');
  alert(`${selected.length} files queued for re-download!`);
}
// Exam filtering
function filterExams() {
  const search = document.getElementById('examSearch').value.toLowerCase();
  const typeFilter = document.getElementById('examTypeFilter').value;
  const subjectFilter = document.getElementById('subjectFilter').value;
  
  const cards = document.querySelectorAll('.exam-card');
  
  cards.forEach(card => {
    const name = card.dataset.name;
    const type = card.dataset.type;
    const subject = card.dataset.subject;
    
    let show = true;
    if (search && !name.includes(search)) show = false;
    if (typeFilter !== 'all' && type !== typeFilter) show = false;
    if (subjectFilter !== 'all' && subject !== subjectFilter) show = false;
    
    card.style.display = show ? 'block' : 'none';
  });
}

function prepareExam(examName) {
  alert(`Starting preparation for ${examName}!`);
}

function startMockTest() {
  alert('Starting full-length mock test!');
}

function viewSyllabus(subject) {
  alert(`Syllabus for ${subject}`);
}

function practiceQuestions(subject) {
  alert(`Practice questions for ${subject}`);
}

function startQuiz(subject) {
  alert(`Starting ${subject} quiz!`);
}

function reviewNotes(subject) {
  window.location.href = 'notes.html';
}

function mockTest(subject) {
  alert(`Mock test for ${subject}`);
}

function togglePriority(button) {
  button.classList.toggle('active');
  alert('Priority toggled!');
}
// Community functions
function filterPosts() {
  const search = document.getElementById('communitySearch').value.toLowerCase();
  const cards = document.querySelectorAll('.post-card');
  
  cards.forEach(card => {
    const tags = card.dataset.tags;
    let show = true;
    if (search && !tags.includes(search)) show = false;
    card.style.display = show ? 'block' : 'none';
  });
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter posts by type
  const cards = document.querySelectorAll('.post-card');
  cards.forEach(card => {
    if (tab === 'all' || card.dataset.type === tab) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function openPostModal() {
  alert('New post modal (Premium feature!)');
}

function likePost(button) {
  const count = button.querySelector('.count');
  const current = parseInt(count.textContent);
  button.classList.toggle('liked');
  count.textContent = button.classList.contains('liked') ? current + 1 : current - 1;
}

function commentPost(button) {
  const count = button.querySelector('.count');
  const current = parseInt(count.textContent);
  count.textContent = current + 1;
  alert('Open comments!');
}

function sharePost(button) {
  const count = button.querySelector('.count');
  const current = parseInt(count.textContent);
  count.textContent = current + 1;
  if (navigator.share) {
    navigator.share({ title: 'Check this post on ApnaSEM!' });
  }
}

function joinGroup(button) {
  button.textContent = 'Joined ✓';
  button.style.background = '#10b981';
  button.style.color = 'white';
}

function toggleOptions(button) {
  alert('Post options menu');
}

function loadMorePosts() {
  alert('Loading more posts...');
}
// Assignments filtering
function filterAssignments() {
  const search = document.getElementById('assignmentSearch').value.toLowerCase();
  const subjectFilter = document.getElementById('subjectFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  
  const cards = document.querySelectorAll('.assignment-card');
  
  cards.forEach(card => {
    const name = card.dataset.name;
    const subject = card.dataset.subject;
    const status = card.dataset.status;
    
    let show = true;
    if (search && !name.includes(search)) show = false;
    if (subjectFilter !== 'all' && subject !== subjectFilter) show = false;
    if (statusFilter !== 'all' && status !== statusFilter) show = false;
    
    card.style.display = show ? 'block' : 'none';
  });
}

function openAssignment(assignmentName) {
  alert(`Opening ${assignmentName}`);
}

function uploadAssignment() {
  document.getElementById('fileUpload').click();
}

function uploadFile(assignmentName) {
  alert(`Uploading file for ${assignmentName}`);
}

function viewFeedback(assignmentName) {
  alert(`Feedback for ${assignmentName}`);
}

function viewDetailedFeedback(assignmentName) {
  alert(`Detailed feedback for ${assignmentName}`);
}

function downloadFile(assignmentName) {
  alert(`Downloading ${assignmentName}`);
}

function requestExtension(assignmentName) {
  alert(`Requesting extension for ${assignmentName}`);
}

function shareGrade(assignmentName) {
  if (navigator.share) {
    navigator.share({
      title: `Got A+ in ${assignmentName}!`,
      text: 'Check my assignment grade!'
    });
  }
}

function togglePriority(button) {
  button.classList.toggle('active');
}

function handleFileUpload(event) {
  const files = event.target.files;
  if (files.length > 0) {
    alert(`${files.length} files selected for upload!`);
  }
}

function submitBulk() {
  alert('Submitting selected assignments!');
}

function deleteBulk() {
  if (confirm('Delete selected assignments?')) {
    alert('Assignments deleted!');
  }
}
// Saved filtering & functions
function filterSaved() {
  const search = document.getElementById('savedSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.saved-card');
  
  cards.forEach(card => {
    const name = card.dataset.name;
    let show = true;
    if (search && !name.includes(search)) show = false;
    card.style.display = show ? 'flex' : 'none';
  });
}

function switchSavedTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  const cards = document.querySelectorAll('.saved-card');
  cards.forEach(card => {
    if (tab === 'all' || card.dataset.type === tab) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleSelect(checkbox) {
  const card = checkbox.closest('.saved-card');
  card.classList.toggle('selected', checkbox.checked);
  
  const selectedCount = document.querySelectorAll('.saved-card.selected').length;
  document.getElementById('bulkActionBtn').style.display = selectedCount > 0 ? 'inline-flex' : 'none';
}

function selectAll() {
  const checkboxes = document.querySelectorAll('.saved-checkbox input');
  const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
  
  checkboxes.forEach(cb => {
    cb.checked = !anyChecked;
    toggleSelect(cb);
  });
}

function openSavedNote(noteName) {
  window.location.href = 'notes.html';
}

function openSavedAssignment(assignmentName) {
  window.location.href = 'assignments.html';
}

function openSavedPost(postName) {
  window.location.href = 'community.html';
}

function openCollection(collectionName) {
  alert(`Opening ${collectionName}`);
}

function removeSaved(button) {
  if (confirm('Remove from saved?')) {
    button.closest('.saved-card').style.display = 'none';
  }
}

function createCollection() {
  const name = prompt('Enter collection name:');
  if (name) {
    alert(`Created collection: ${name}`);
  }
}
