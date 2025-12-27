<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# my__game
A web-based game built with Vite and Node.js, running inside Docker.
# پروژه بازی My Game

این پروژه یک وب‌اپلیکیشن بازی ساده است که به عنوان تمرین درس مهندسی نرم‌افزار توسعه داده شده است. هدف از این پروژه تمرین توسعه فرانت‌اند با استفاده از React و Vite، آشنایی با مدیریت نسخه با Git و استقرار پروژه با Docker بوده است.

## توضیح بازی
این بازی یک بازی تمرکز روی قسمت هایلایت شده در صفحه و کلیک کردن روی آن در تایمی مشخص میباشد . با هربار کلیک روی قسمت های مختلف کاربر امتیاز بالاتری میگیرد و بعد حد مشخصی برنده میشود.
- بازی به صورت تعاملی و با رابط کاربری ساده طراحی شده است.
- کاربران می‌توانند با تعامل با المان‌های صفحه بازی را انجام دهند.
- هدف اصلی بازی تمرین مفاهیم React، مدیریت State و طراحی واکنش‌گرا با CSS و Tailwind است.
- طراحی بازی به گونه‌ای است که قابلیت توسعه و اضافه کردن ویژگی‌های جدید در آینده را دارد

## ساختار کد

- پروژه با React و Vite ساخته شده است.
- کد پروژه شامل:
  - پوشه src/ شامل کامپوننت‌ها و فایل‌های JS و CSS
  - فایل package.json برای مدیریت وابستگی‌ها
  - فایل Dockerfile برای ساخت کانتینر Docker
- استفاده از State در React برای مدیریت وضعیت بازی (مثل موقعیت‌ها، امتیاز و تعاملات کاربر) انجام شده است.
- طراحی CSS با استفاده از Tailwind ساده و قابل فهم است.



## مدیریت نسخه با Git

- پروژه با Git مدیریت می‌شود.
- تاریخچه کامیت‌ها شفاف و قابل ردیابی است و نشان‌دهنده مراحل توسعه پروژه است.
- هر تغییر مهم در کد با یک کامیت توضیحی ثبت شده است.



## استقرار با Docker

پروژه دارای یک Dockerfile است که محیط اجرای Node را آماده می‌کند و Dev Server پروژه را اجرا می‌کند.

 ساخت ایمیج . docker build -t my_game  
    
  
 اجرای کانتینر docker run -p 5173:5173 my_game
    
    
 اجرای سایت از طریق لینک زیر قابل مشاهده است 
  - Local:   http://localhost:5173/
  - Network: http://172.17.0.2:5173/

>>>>>>> e7c1edd5899da2628d63e4dd987b3bd8afdb8227
