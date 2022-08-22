---
slug: spring-test
title: "@SpringBootTest, @WebMvcTest, @MockBean"
authors: [jay]
tags: [web, spring, test]
---

## @SpringBootTest
- **전체 컨텍스트**를 로드하여 빈을 주입, **속도가 느리고 통합 테스트**를 할 경우 많이 사용됨
- 필요한 빈 만을 등록하여 테스트를 진행하고자 할 경우, @WebMvcTest 사용

## @WebMvcTest
- 보통 컨트롤러 하나만 테스트 하고 싶을 경우 사용
- @WebMvcTest() 의 프로퍼티로 테스트를 원하는 컨트롤러 클래스를 전달 해 준다
