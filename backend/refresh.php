<?php
require 'jwt.php';

$data = json_decode(file_get_contents("php://input"), true);
$refreshToken = $data["refreshToken"] ?? "";

$decoded = validateToken($refreshToken, "refresh");

if (!$decoded) {
    http_response_code(401);
    echo json_encode(["error" => "Nieprawidłowy refresh token"]);
    exit;
}

$newAccessToken = createToken($decoded["sub"], "access");

echo json_encode(["accessToken" => $newAccessToken]);