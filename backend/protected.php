<?php
require 'jwt.php';

$headers = getallheaders();
$authHeader = $headers["Authorization"] ?? "";

if (!str_starts_with($authHeader, "Bearer ")) {
    http_response_code(401);
    echo json_encode(["error" => "Brak tokena"]);
    exit;
}

$accessToken = substr($authHeader, 7);
$decoded = validateToken($accessToken, "access");

if (!$decoded) {
    http_response_code(401);
    echo json_encode(["error" => "Token nieprawidłowy lub wygasł"]);
    exit;
}

echo json_encode(["message" => "Dostęp OK", "userId" => $decoded["sub"]]);
?>