


## Teste backend

```bash
$ cd backend
$  ../mvnw spring-boot:run
```

Backend kjøres på localhost:8000



## Teste frontend

Krever at Yarn er installert:
https://yarnpkg.com/en/docs/install

For å installere alle dependencies:
```bash
cd frontend
../mvnw frontend:install-node-and-yarn frontend:yarn
```

Start med:
```bash
 yarn start
```

frontend kjøres på localhost:4200



## Bygg og kjør applikasjonen

Bygg:
```
./mvnw clean install
```

Og kjøres ved:
```bash
$ java -jar backend/target/ngboot-app.jar
```

Hele applikasjonen kjører på localhost:8000




## Kjente dependencies
* Java SDK 8 [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html]
* Yarn [https://yarnpkg.com/en/docs/install]
* NodeJS LTS (8.9.4) [https://nodejs.org/en/]
* Chrome (for testing) [https://www.google.com/chrome/browser/desktop/index.html]
* Angular CLI [https://cli.angular.io/]