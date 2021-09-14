# tsLogin

## 프로젝트 목표

1. 쿠키-세션 로그인 구현
   1. ` jwt `  로그인 방식과의 차이점
   2. ` stateful ` 한 이유 알아보기
2. ` Nest.js `  의 장/단점 파악해보기
3. ` Typescript `  의 장점 파악해보기
4. 유저가 탈퇴하면 유저의 아바타는 모두 삭제된다
   1. 유저 탈퇴가 실패하면, 삭제된 아바타  DB는 `트랜잭션` 에 의해 롤백되어야한다.

----

## 사용한 툴

### Database

1. MySQL
   1. 그동안 Nosql인 mongoDB만 사용해봤기 때문에, 관계형 DB의 장점이나 특징에 대해서 알아보고싶었음
2. TypeORM
   1. Nest.js 문서를 순서대로 따라하다보니 자연스럽게 TypeORM을 쓰게되었음. TypeORM은 타입스크립트 기반의 ORM이기 때문에 Nest.js, Typescript와 상성이 좋다고 함.