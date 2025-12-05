<?php
// login.php
session_start();
header('Content-Type: application/json; charset=utf-8');

// Helper for JSON response
function respond($success, $message = '', $redirect = '', $data = []) {
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'redirect' => $redirect,
        'data' => $data
    ]);
    exit;
}

// POST values
$type = $_POST['type'] ?? '';
$username = trim($_POST['username'] ?? '');
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

// Demo DATABASE (backup login)
$demoUsers = [
    [
        'email' => 'user@nttexplorer.com',
        'password' => 'user123',
        'name' => 'Ansari Ramadhan',
        'role' => 'Travel Enthusiast',
        'plan' => 'Explorer Plus'
    ]
];

$demoAdmins = [
    [
        'username' => 'admin',
        'password' => 'admin123',
        'name' => 'Administrator Utama',
        'role' => 'Super Admin',
        'level' => 'Full Access',
        'email' => 'admin@nttexplorer.com'
    ]
];

// Validate type
if ($type !== 'user' && $type !== 'admin') {
    respond(false, 'Tipe login tidak valid');
}

// ---------------------- USER LOGIN ----------------------
if ($type === 'user') {

    if (!$email || !$password) {
        respond(false, 'Email dan password harus diisi');
    }

    // Find user in demo data
    $found = null;
    foreach ($demoUsers as $u) {
        if (strcasecmp($u['email'], $email) === 0 && $u['password'] === $password) {
            $found = $u;
            break;
        }
    }

    if (!$found) {
        respond(false, 'Email atau password salah');
    }

    // Success
    $data = [
        'email' => $found['email'],
        'name' => $found['name'],
        'role' => $found['role'],
        'plan' => $found['plan'],
        'lastLogin' => date('Y-m-d H:i:s')
    ];

    $_SESSION['user'] = $data;

    respond(true, 'Login user berhasil', 'index.html', $data);
}

// ---------------------- ADMIN LOGIN ----------------------
if ($type === 'admin') {

    if (!$username || !$password) {
        respond(false, 'Username dan password harus diisi');
    }

    $found = null;
    foreach ($demoAdmins as $a) {
        if (strcasecmp($a['username'], $username) === 0 && $a['password'] === $password) {
            $found = $a;
            break;
        }
    }

    if (!$found) {
        respond(false, 'Username atau password admin salah');
    }

    // Success session
    $_SESSION['adminLoggedIn'] = true;

    $data = [
        'username' => $found['username'],
        'name' => $found['name'],
        'role' => $found['role'],
        'level' => $found['level'],      // new fix
        'email' => $found['email'],      // new fix
        'lastLogin' => date('Y-m-d H:i:s')
    ];

    $_SESSION['adminUser'] = $data;

    respond(true, 'Login admin berhasil', 'admin-dashboard.html', $data);
}

?>
