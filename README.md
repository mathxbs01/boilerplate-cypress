# BOILERPLATE CYPRESS

Apenas um boilerplate para apenas clonar e adaptar conforme o projeto demandar.


# Pré requisitos

- Interface para linha de comando (Windows Terminal, Cmder, etc.)
    https://cmder.app

- Java 8 ou superior.
    https://www.java.com/pt-BR/download/
    
- Git for Windows -  Versão: 2.33.1 ou superior
    https://gitforwindows.org
    
- Interface para escrita de código (Visual Studio Code)
    https://code.visualstudio.com
    
- Node.js - Versão: 19.6.1 ou versão LTS
    https://nodejs.org/pt-br/download


# Execução da Cypess:

Após clonar o repositório na sua máquina local, basta acessar a pasta em que o arquivo tenha sido clonado e executar o seguinte comando:
```
npm install
```

Ao final, para executar o cypress visualmente, basta executar o comando:
```
npm run test:local
```

Para execução CLI no ambiente de desenvolvimento, basta executar o comando:
```
npm run test:dev
```

Para execução CLI no ambiente de homologação, basta executar o comando:
```
npm run test:hom
```

Para geração do relatório HTML cucumber:
```
npm run report-cucumber
```


# Relatório

Para reporte dos testes que foram executados, será utilizado o cucumber-report para elaboração visual, onde será gerado o documento index.html através do comando:
```
node cucumber-html-report.js
	ou
npm run report-cucumber
```
E para o reporte dos testes CI, será utilizado as tasks “PublishCucumberReport@1” e “PublishTestResults@2”. 
A task PublishCucumberReport@1 criará um reporte simples, porém com a mesma base do Cucumber-report.
A task PublishTestResults@2 criará um reporte mais detalhado, contendo alguma informações para métrica dos teste em conjunto com Azure TestPlan.