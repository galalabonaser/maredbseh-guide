// 1. استدعاء حزم الفايربيز المعتمدة من Google المتوافقة مع المتصفحات الساكنة
import { initializeApp } from "https://gstatic.com";
import { getDatabase, ref, set, onValue } from "https://gstatic.com";

// 2. كود بيانات مشروعك الحقيقي maredbseh-guide المأخوذ من شاشتك
const firebaseConfig = {
    apiKey: "AIzaSyAxma_PbEkmwzuMTu4mhT6UfwFVYMJLExo",
    authDomain: "://firebaseapp.com",
    databaseURL: "https://firebaseio.com",
    projectId: "maredbseh-guide",
    storageBucket: "maredbseh-guide.firebasestorage.app",
    messagingSenderId: "647266651782",
    appId: "1:647266651782:web:1a880f31d467194cb00b07",
    measurementId: "G-9Y8XS1J3YV"
};

// 3. تشغيل الـ App وقاعدة البيانات برمجياً بالدليل الشامل
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 4. تصدير الأدوات لتشغيل المزامنة اللحظية الفورية مع الواجهات الأخرى
export { db, ref, set, onValue };
