# Vending Machine

## 1. 소개

- Vending Machine은 소지금을 입금한 후 음료를 선택하면 구매할 수 있는 자판기 서비스입니다.

- 사용자는 버튼을 눌러 상품이 1개씩 추가할 수 있습니다.

- 돈의 입금과 음료의 선택 시점은 자유롭지만 돈이 모자라면 음료가 나오지 않습니다.

- 거스름돈 반환 버튼을 클릭하면 거스름돈이 나옵니다.

<br>

## 2. 개발 규칙

### 📍 개발 규칙 선정 이유

- 체계적인 프로젝트 관리를 위해 Udacity의 커밋 메세지 스타일 가이드를 참고하여 정하였습니다.

### 📍 커밋 컨벤션

```plain text
type: short summary

# type: 커밋 타입
# short summary: 커밋에 대한 간단한 설명
```

- 예시

```bash
feat: 라이트 모드 기능 추가
```

### 📍 커밋 타입

| 커밋     | 타입 설명                                                                                        |
| :------- | :----------------------------------------------------------------------------------------------- |
| docs     | 문서 수정(md 파일 등)                                                                            |
| feat     | 새로운 기능 추가                                                                                 |
| design   | UI 디자인 변경 (css 등)                                                                          |
| style    | 스타일 변경 (포매팅 수정, 들어쓰기 추가, 빈칸 제거, 스펠링 오류 등)                              |
| refactor | 리팩토링 작업(코드 동작은 유지하되, 코드의 가독성 및 유지보수성을 향상시키기 위한 내부구조 변경) |
| fix      | 버그 수정                                                                                        |
| revert   | 커밋 취소(reset 사용금지)                                                                        |
| test     | 테스트 코드 추가, 기존 테스트 수정                                                               |
| build    | 빌드 관련 파일 수정 (패키지 매니저 설정등 개발코드와 무관한 부분)                                |

<br>

### 📍 커밋 설명 규칙

- 명령조의 현재시제를 사용한다 (과거형이나 3인칭 사용X)
  - changed(x), changes(x)
  - change(o)
- 첫 글자는 항상 소문자로 기재한다
- 마침표를 찍지 않는다
- 커밋 메시지의 각 줄은 50자를 넘기지 않는다

<br>

## 3. 구현 기능

<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/108205639/215694121-07fab63e-d0c3-4b48-8174-f7159d4ac54e.gif"
                  width="430px"  alt=""></td>
            <td>벤딩머신 음료 선택 기능<ul>
                    <li>벤딩머신의 음료를 클릭하면 하단에 선택한 음료와 갯수가 목록으로 나타납니다.</li>
                    <li>클릭한 음료의 금액만큼 잔액이 차감됩니다.</li>
                    <li>음료가 소진되면 품절 처리됩니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/108205639/215695775-b3de6305-a9b4-4e1f-a41c-9eab9999fc64.gif"
                  width="430px"  alt=""></td>
            <td>입금 기능
              <ul>
                <li>입금액을 입력하고 입금 버튼을 클릭하면 입력한 입금액만큼 잔액에 충전됩니다.</li>
              </ul>
            </td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/108205639/215694161-f32fc745-e583-4e9b-982a-fdd96d0993b8.gif"
            width="430px"
                    alt=""></td>
            <td>획득 기능<ul>
                    <li>획득 버튼을 클릭하면 획득한 음료 리스트에 선택한 음료 리스트와 총금액이 나타납니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/108205639/215694143-bd79f298-181e-4a42-adf7-ff80415dfc6f.gif"
                  width="430px"  alt=""></td>
            <td>거스름돈 반환 기능
                <ul>
                  <li>거스름돈 반환 버튼을 클릭하면 잔액을 소지금으로 반환합니다.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
    
<br>
