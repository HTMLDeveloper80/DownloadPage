<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = "key";
$access_exp = 900;
$refresh_exp = 604800;

function createToken ($userId, $type = "access") {
    global $key, $access_exp, $refresh_exp;

    $now = time();
    $exp = $now + ($type === "access" ? $access_exp : $refresh_exp);

    $payload = [
        "sub" => $userId,
        "type" => $type,
        "iat" => $now,
        "exp" => $exp
    ];

    return JWT::encode($payload, $key, 'HS256');
}

function validateToken($token, $type = "access") {
    global $key;
    try {
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        if ($decoded->type !== $type) return false;
        return (array) $decoded;
    } catch (Exception $e) {
        return false;
    }
}