<?php

// 1. Process incoming form data
$product_data = [
    'name' => $_POST['name'],
    'type' => $_POST['type'],
    'price' => $_POST['price'],
    'quantity' => $_POST['quantity'],
    'status' => $_POST['status']
];

// 2. Save to products.json
$file = 'products.json';
$current_data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
$current_data[] = $product_data;
file_put_contents($file, json_encode($current_data));

// 3. Send back a JSON response
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Product added successfully']);
?>
