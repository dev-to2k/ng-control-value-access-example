# AngularMyApp

## Giới thiệu

Đây là project demo form đăng nhập sử dụng Angular, tập trung vào xây dựng custom input component và error-message component hiện đại, hỗ trợ đa ngôn ngữ (i18n) với @ngx-translate/core, đảm bảo khả năng tái sử dụng, chuẩn accessibility và dễ mở rộng cho mọi form.

## Tính năng nổi bật

- **Custom Input Component**: Tái sử dụng, nhận props động qua signal input, tự động hiển thị lỗi dưới mỗi input.
- **Error Message Component**: Hiển thị đồng thời nhiều lỗi, nhận mảng lỗi qua signal input.
- **Reactive Forms**: Sử dụng FormGroup/FormControl, custom validator trả về nhiều lỗi cùng lúc.
- **Đa ngôn ngữ (i18n)**: Tích hợp @ngx-translate/core, hỗ trợ tiếng Việt và tiếng Anh, mọi văn bản và lỗi đều dịch động qua file json.
- **Accessibility**: Label liên kết đúng với input, có thuộc tính name/id chuẩn, hỗ trợ trình đọc màn hình.
- **Modern Angular**: Sử dụng signal input, template @if/@for, standalone component, code tối ưu cho Angular 17+.

## Công nghệ sử dụng

- Angular 17+
- @ngx-translate/core
- Reactive Forms
- Standalone Component, Signal Input, Template Syntax mới

## Cách chạy project

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy server phát triển

```bash
ng serve
```

Sau đó truy cập: [http://localhost:4200/](http://localhost:4200/)

### 3. Đổi ngôn ngữ

- Mặc định là tiếng Anh. Để đổi sang tiếng Việt, sửa dòng `this.translate.setDefaultLang('en')` thành `vi` trong `app.component.ts`.
- Hoặc tích hợp thêm nút chuyển đổi ngôn ngữ nếu muốn.

## Cấu trúc thư mục chính

- `src/app/input/`: Custom input component
- `src/app/error-message/`: Error message component
- `src/assets/i18n/`: File đa ngôn ngữ (en.json, vi.json)

## Sơ đồ cấu trúc project

```text
angular-my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── input/
│   │   │   ├── input.component.ts
│   │   │   ├── input.component.html
│   │   │   ├── input.component.css
│   │   ├── error-message/
│   │   │   ├── error-message.component.ts
│   │   │   ├── error-message.component.html
│   │   │   ├── error-message.component.css
│   ├── assets/
│   │   └── i18n/
│   │       ├── en.json
│   │       └── vi.json
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── README.md
```

## Đóng góp

Bạn có thể mở rộng thêm validate, giao diện, hoặc tích hợp các tính năng mới dễ dàng nhờ kiến trúc component tái sử dụng.

---

Project này phù hợp làm mẫu cho mọi dự án Angular cần form đẹp, chuẩn, dễ mở rộng và đa ngôn ngữ.
