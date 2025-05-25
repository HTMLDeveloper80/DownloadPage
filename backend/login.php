<?php
require 'db.php';
require 'jwt.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"] ?? "");
$password = trim($data["password"] ?? "");

$stmt = $pdo->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user["password"])) {
    http_response_code(401);
    echo json_encode(["error" => "Błędne dane logowania"]);
    exit;
}

$accessToken = createToken($user["id"], "access");
$refreshToken= createToken($user["id"], "refresh");

echo json_encode([
    "accessToken" => $accessToken,
    "refreshToken" => $refreshToken
]);