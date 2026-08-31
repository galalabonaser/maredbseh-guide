// استدعاء حزم الفايربيز المعتمدة من Google للمتصفحات
import { initializeApp } from "https://gstatic.com";
import { getDatabase, ref, set, onValue } from "https://gstatic.com";

// ⚠️ ضع بيانات مشروعك الحقيقي من لوحة تحكم Firebase هنا
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_://firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_://firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_://appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تشغيل الفايربيز وربط قاعدة البيانات برمجياً
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// تصدير الأدوات للمزامنة مع الملفات الأخرى
export { db, ref, set, onValue };
