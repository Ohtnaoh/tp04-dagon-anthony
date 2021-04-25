<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '../vendor/autoload.php';
require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/modeles/Catalogue.php';
require_once __DIR__ . '/modeles/User.php';

$app = AppFactory::create();

const JWT_SECRET = "AnthoDGN";



function addCorsHeaders (Response $response) : Response {

    $response =  $response
    //->withHeader("Access-Control-Allow-Origin", 'http://localhost:4200') // faire test Access-Control-Allow-Origin
    //->withHeader("Access-Control-Allow-Headers", 'Content-Type, Authorization')
    ->withHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    ->withHeader("Access-Control-Expose-Headers" , "Authorization");

    return $response;
}


// Middleware de validation du Jwt
$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/hello","/api/test","/api/login","/api/createUser"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        $response= $response->withHeader("Content-Type", "application/json");
        return $response->getBody()->write(json_encode($data));
    }
];
/*
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});
*/

// GET USER BY ID
$app->get('/api/user/{id}', function (Request $request, Response $response, $args) {
    global $entityManager;
    
    $u = $entityManager->find(User::class, $args['id']);  
    $response->getBody()->write(json_encode($u));
           
    $response = $response
        ->withHeader("Content-Type", "application/json;charset=utf-8");
    $response = addCorsHeaders($response);
    return $response;
});

// GET LIST OF USER
$app->get('/api/user', function (Request $request, Response $response, $args) {
    
    global $entityManager;
    
    $userRepository = $entityManager->getRepository(User::class);
    $user = $userRepository->findAll();
    
    $data = [];
    foreach ($user as $u) {
       
        array_push ($data,$u);
    }
    $response = addCorsHeaders($response);
    $response = $response
    ->withHeader("Content-Type", "application/json;charset=utf-8");
    $response->getBody()->write(json_encode($data));
    return $response;
});

// UPDATE USER
$app->put('/api/user', function (Request $request, Response $response, $args) {
    global $entityManager;
    $elem= [];
    $body = (array)json_decode($request->getBody());
    $u = $entityManager->find(User::class, $body['id']);

    $u->setSalutation($body['salutation']);
    $u->setFirstname($body['firstname']);
    $u->setLastname ($body['lastname']);
    $u->setLogin($body['login']);
    $u->setEmail($body['email']);
    $u->setTelephone($body['telephone']);
    $u->setPassword($body['password']);
    $u->setAdresse($body['adresse']);
    $u->setPostalcode($body['postalcode']);

    $entityManager->flush();
    $response = addCorsHeaders($response);
    $response = $response
        ->withHeader("Content-Type", "application/json;charset=utf-8");

    $response->getBody()->write(json_encode($u));
    return $response;
});

// CREATE USER
$app->post('/api/createUser', function (Request $request, Response $response, $args) {
    global $entityManager;
    $body = (array)json_decode($request->getBody());
    
    $u = new User();
    $u->setSalutation($body['salutation']);
    $u->setFirstname($body['firstname']);
    $u->setLastname ($body['lastname']);
    $u->setLogin($body['login']);
    $u->setEmail($body['email']);
    $u->setTelephone($body['telephone']);
    $u->setPassword($body['password']);
    $u->setAdresse($body['adresse']);
    $u->setPostalcode($body['postalcode']);
    $entityManager->persist($u);
    $entityManager->flush();

    $response = addCorsHeaders($response);
    $response = $response
        ->withHeader("Content-Type", "application/json;charset=utf-8");

    $response->getBody()->write(json_encode($u));
    return $response;
});

// CONNECT TO GET A TOKEN
$app->post('/api/login', function (Request $request, Response $response, $args) {    
    global $entityManager;
    $body = (array)json_decode($request->getBody());
    $userRepository = $entityManager->getRepository(User::class);
    $user = $userRepository->findOneBy(
        array('login' => $body['username'], 'password' => $body['password']));
    
        if($user != null){
            
            $issuedAt = time();
            $expirationTime = $issuedAt + 500;
            $payload = array(
                'userid' => $user->getId(),
                'email' => $user->getEmail(),
                'pseudo' => $user->getLogin(),
                'iat' => $issuedAt,
                'exp' => $expirationTime
            );
            $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
            $response = addCorsHeaders($response);
            $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
        }else{
            $response = $response->withStatus(302);
        }
    
        $response = $response
            ->withHeader("Content-Type", "application/json;charset=utf-8");
        return $response;
    
});

// GET LIST OF CATALOGUE OBJECT
$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    
    global $entityManager;
    
    $catalogueRepository = $entityManager->getRepository(Catalogue::class);
    $catalogue = $catalogueRepository->findAll();
    
    
    $data = [];
    foreach ($catalogue as $e) {
        array_push ($data,$e);
    }

    $response = $response
        ->withHeader("Content-Type", "application/json;charset=utf-8");
    $response->getBody()->write(json_encode($data));
    $response = addCorsHeaders($response);
    return $response;
});

// GET CATALOGUE BY ID
$app->get('/api/catalogue/{id}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $body = (array)json_decode($request->getBody());
    $c = $entityManager->find(Catalogue::class, $args['id']);


    
    $response->getBody()->write(json_encode($c));
       
    $response = $response
        ->withHeader("Content-Type", "application/json;charset=utf-8");
    $response = addCorsHeaders($response);      
    return $response;
});

// Route de test
$app->get('/api/test/{test}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["test"] = $args['test'];
    $response = addCorsHeaders($response);
    $response->getBody()->write(json_encode ($array));
    return $response;
});

// Chargement du Middleware
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();