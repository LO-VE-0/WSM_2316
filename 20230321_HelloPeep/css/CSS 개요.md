# Style 적용 3가지 방법
1. <... style="..."> in HTML
1. ```<style>...</style> ```in HTML```<head>```
1. __.css 파일 만들어서 link__

# 형식
```css
selector {
    attribute : value;   /* comment */
}
```

## selector

<pre>
   * : 전체 기본설정 수정용 
   id : 고유의 것(하나의 html 안에는 같은 이름의 id가 한개만 있어야함) , #을 앞에 붙임 
   class : 주어진 값을 class 속성 값으로 가진 html 요소를 찾아 선택한다, .을 앞에 붙임 (분류) 
   tag : 그냥 씀 (ex. a)     
   
selector1 selector2     : selector1 요소의 자손 selector2 요소를 선택한다 
selector1 > selector2   : selector1 요소의 자식 중 모든 selector2 
selector1, selector2    : selector1과 selector2를 모두 선택 
selector1 + selector2   : selector1의 첫째 자매 selector2 하나 선택 (!! selector1은 선택X)
selector1 ~ selector2   : selector1의 자매 중 모든 selelctor2 선택
selector:first-child()  : selector 요소 중 첫번째 ( = nth-child(1) )
selector:nth-child(n)   : selector의 모든 요소 중 n번째 요소 
selector:hover          : 요소의 마우스가 올라가는 동안 selector를 선택 

    [속성 = "값"]       <TAG 속성 = "값">인 모든 요소 선택
</pre>

    
# Selector의 우선순위
    1. !improtant : 가장 센 우선순위
    2. #id
    3. .class
    4. TAG
    5. *
<<<<<<< HEAD

=======
    
>>>>>>> 15443f5fe8ea458eef6441ef10a6df8368af7513
    * 구체 > 포괄
    *같은 우선순위일 때 나중에 쓴게 적용
    
    .md : 마크다운