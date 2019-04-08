# Gatsby Blog

[![Greenkeeper badge](https://badges.greenkeeper.io/Beingbook/blog.svg)](https://greenkeeper.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8cd0749f-db75-4d27-a2a5-7f84c0b25ff5/deploy-status)](https://app.netlify.com/sites/gifted-visvesvaraya-7b9324/deploys)

## 개발

```sh
# install deps
$ yarn
# dev!
$ yarn start
```

## 포스트 작성

MDX 포맷을 통해 마크다운과 React 컴포넌트를 사용하여 작성할 수 있습니다.
`./src/posts` 폴더에 `**/*.mdx` 파일을 생성합니다.
모든 문서는 다음 필수 [frontmatter](https://jekyllrb.com/docs/front-matter/) 설정이 필요합니다.

```md
---
title: 문서 제목
tags:
  - 태그1
  - 태그2
createdAt: 2019-04-06
---
```

### React Component 사용

```mdx
import SomeComponent from './SomeComponent';

# 예제 컴포넌트

<SomeComponent />

MDX를 자유롭게 사용할 수 있습니다.
```

### 이미지 마크다운

JPG와 PNG포맷만 지원합니다.

```mdx
![image presentation text](./some-relative-path.{jpg|png})
```
