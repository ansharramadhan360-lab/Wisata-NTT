// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeLogout();
    checkAdminAuth();
});

// Sidebar Toggle
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.admin-sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Navigation Active State
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Logout Functionality
function initializeLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin logout?')) {

                localStorage.removeItem('adminRemember');
                localStorage.removeItem('adminUsername');
                sessionStorage.removeItem('adminLoggedIn');

                window.location.href = 'login.html';
            }
        });
    }
}

// Check Admin Authentication
function checkAdminAuth() {
    const adminLoggedIn = sessionStorage.getItem('adminLoggedIn');
    
    if (!adminLoggedIn) {

        const adminRemember = localStorage.getItem('adminRemember');
        const adminUsername = localStorage.getItem('adminUsername');
        
        if (!adminRemember || !adminUsername) {
            window.location.href = 'login.html';
            return;
        } else {
            sessionStorage.setItem('adminLoggedIn', 'true');
        }
    }
}
