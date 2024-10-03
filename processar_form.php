<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    $to = "contato@softwavesl.com.br";  // Endereço de email de destino
    $subject = "Nova Submissão de Formulário";
    $message = "Nome: " . $nome . "\nEmail: " . $email;

    // Enviar email
    if (mail($to, $subject, $message)) {
        echo "Formulário enviado com sucesso!";
    } else {
        echo "Falha no envio do formulário.";
    }
}
?>