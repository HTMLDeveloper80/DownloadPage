<?php
require_once __DIR__ . '/jwt.php';

function requireAuth(string $type = 'access'): array
{
    $headers = getallheaders();
    $auth = $headers['Authorization']
        ?? $headers ['authorization']
        ?? '';

    if(!preg_match('/^Bearer\s+(\S+)/', $auth, $m)) {
        http_response_code(401);
        echo json_encode(['error' => 'Brak tokena']);
        exit;
    }

    $token = $m[1];
    $payload = validateToken($token, $type);

    if(!$payload) {
        http_response_code(401);
        echo json_encode(['error' => 'Token nieprawidłowy lub wygasł']);
        exit;
    }

    return (array)$payload;
}