# 파일 구조


## app

### src

#### entity
  1. domain
     1. {domainName}/{modelName}.entity.ts
  2. transformer

#### libs
- 공용 라이브 개발용

#### modules

도메인 로직을 수행하는 컨트롤러, 서비스, 모듈이 모여있는 곳
   1. {domainName}
      1. ControllerFile
      2. ServiceClassFile
      3. RepositoryFile
      4. Request
         1. RequestNameFile
      5. Dto
         1. DtoFile
   2. main.ts

   3. ApplicationModule.ts

#### entities

### test


# 파일 이름 형식
 - Entity `이름.entity.js`
 - 

