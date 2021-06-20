module.exports = {
    extends: [
        "airbnb",
        "airbnb-typescript",
        "prettier",
        "prettier/react",
        "plugin:react/recommended", // eslint-plugin-react에서 추천하는 리액트 린팅 설정
        "plugin:@typescript-eslint/recommended", // @typescript-eslint/recommended의 추천 룰 사용
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "react", "@typescript-eslint"], // 해당 플러그인을 사용할것이라고 등록
    env: {
        // 프로젝트 사용 환경
        browser: true,
        es6: true,
        jest: true,
    },
    parser: "@typescript-eslint/parser", // eslint가 TypeScript를 린팅할 수 있도록 parser 지정
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // jsx 활성화
        },
        ecmaVersion: 2021, // ECMAScript syntax 버젼
        sourceType: "module", // import 사용
        project: "./tsconfig.json",
    },
    rules: {
        "no-underscore-dangle": "off", // _언더스코어 식별자 사용 관련 룰 비활성화
        "no-alert": "off", // alert 자주 사용하므로 비활성화
        "react-hooks/exhaustive-deps": "warn", // dependency 관련 에러는 경고(노란줄)로 바꿈
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ], // js도 확장자 가능하게끔 설정
        "@typescript-eslint/naming-convention": "off", // snake_case, camelCase 혼용해서 사용중이므로 비활성화
        "prettier/prettier": "error", // eslint-plugin-prettier의 룰을 활성화
        "arrow-body-style": "off", // eslint-plugin-prettier와 충돌하는 ESLint 코어 룰을 비활성화
        "prefer-arrow-callback": "off", // eslint-plugin-prettier와 충돌하는 ESLint 코어 룰을 비활성화
        "import/no-unresolved": "off", // src 폴더 밑에 있는 이미지 file을 임포트하는 과정에서 에러로 표기되는 이슈 방지
        "jsx-a11y/anchor-is-valid": "warn", // a tag에 href 사용하도록 경고하는 룰
        "jsx-a11y/click-events-have-key-events": "off", // 마우스가 아닌 키보드로 컴퓨터를 이용하는 사람들을 위한 접근성 옵션 꺼둠. 추후 적용하고자 하면 제거할 것
        "jsx-a11y/no-static-element-interactions": "off", // semantic 의미를 갖고 있지 않은 태그 사용을 지양하도록 하는 옵션 꺼둠
        "react/jsx-props-no-spreading": "off", // jsx에 넘겨주는 props 에 spread 연산자를 사용할 수 있게끔 셋팅
        "react/no-children-prop": "off", // children 으로 Prop 넘겨줄 수 있도록 설정
    },
};